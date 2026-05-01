import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
  speed?: number
  startDelay?: number
  loop?: boolean
  pauseDuration?: number
}

export function useTypewriter(text: string, options: UseTypewriterOptions = {}) {
  const { speed = 80, startDelay = 0, loop = false, pauseDuration = 2000 } = options
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  const displayedText = text.slice(0, currentIndex)
  const isTyping = isStarted && currentIndex < text.length
  const isDone = isStarted && currentIndex >= text.length

  // Start delay
  useEffect(() => {
    const delayTimer = setTimeout(() => setIsStarted(true), startDelay)
    return () => clearTimeout(delayTimer)
  }, [startDelay])

  // Typing effect
  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) {
      if (loop && currentIndex >= text.length) {
        const pauseTimer = setTimeout(() => setCurrentIndex(0), pauseDuration)
        return () => clearTimeout(pauseTimer)
      }
      return
    }

    const timer = setTimeout(() => setCurrentIndex(prev => prev + 1), speed)
    return () => clearTimeout(timer)
  }, [isStarted, currentIndex, text.length, speed, loop, pauseDuration])

  const reset = useCallback(() => {
    setCurrentIndex(0)
    setIsStarted(false)
  }, [])

  return { displayedText, isTyping, isDone, reset }
}
