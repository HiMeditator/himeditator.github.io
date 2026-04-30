import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Blogs from './pages/Blogs'
import ProjectsIndex from './pages/Projects/index'
import AutoCaption from './pages/Projects/AutoCaption'
import LightAt from './pages/Projects/LightAt'
import LightBrowser from './pages/Projects/LightBrowser'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/auto-caption" element={<AutoCaption />} />
            <Route path="/projects/light-at" element={<LightAt />} />
            <Route path="/projects/light-browser" element={<LightBrowser />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}