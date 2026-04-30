import {
  ArticleIcon,
  FilmSlateIcon,
  LightbulbFilamentIcon,
  LockIcon,
  GlobeIcon,
  ChartBarIcon,
  GithubLogoIcon,
  YoutubeLogoIcon,
  TextAaIcon,
  HouseIcon,
  UserIcon,
  RocketLaunchIcon,
  SunIcon,
  MoonIcon,
  CaretRightIcon,
  CodeIcon,
  PaintBrushIcon,
  GearIcon,
  PackageIcon,
  FileTextIcon,
  LightningIcon,
  FolderOpenIcon,
  ArrowLeftIcon,
  DesktopTowerIcon,
  WrenchIcon,
  HardDrivesIcon,
  PlugsIcon,
} from '@phosphor-icons/react'
import { CSSProperties } from 'react'

export const iconMap = {
  Article: ArticleIcon,
  FilmSlate: FilmSlateIcon,
  LightbulbFilament: LightbulbFilamentIcon,
  Lock: LockIcon,
  Globe: GlobeIcon,
  ChartBar: ChartBarIcon,
  GithubLogo: GithubLogoIcon,
  YoutubeLogo: YoutubeLogoIcon,
  TextAa: TextAaIcon,
  House: HouseIcon,
  User: UserIcon,
  RocketLaunch: RocketLaunchIcon,
  Sun: SunIcon,
  Moon: MoonIcon,
  CaretRight: CaretRightIcon,
  Code: CodeIcon,
  PaintBrush: PaintBrushIcon,
  Gear: GearIcon,
  Package: PackageIcon,
  FileText: FileTextIcon,
  Lightning: LightningIcon,
  FolderOpen: FolderOpenIcon,
  ArrowLeft: ArrowLeftIcon,
  DesktopTower: DesktopTowerIcon,
  Wrench: WrenchIcon,
  HardDrives: HardDrivesIcon,
  Plugs: PlugsIcon,
}

interface IconProps {
  name: keyof typeof iconMap
  size?: number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  style?: CSSProperties
}

export default function Icon({ name, size = 24, weight = 'regular', style }: IconProps) {
  const IconComponent = iconMap[name]
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  return <IconComponent size={size} weight={weight} style={style} />
}
