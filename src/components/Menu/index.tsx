import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'

export function Menu() {
  return (
    <nav className='flex items-center justify-center gap-4'>
      <a
        href='#'
        className='inline-flex items-center justify-center  transition-all ease-in-out duration-100 bg-primary text-over-primary hover:brightness-80 p-4 rounded-xl'
      >
        <HouseIcon className='w-6 h-6' />
      </a>

      <a
        href='#'
        className='inline-flex items-center justify-center  transition-all ease-in-out duration-100 bg-primary text-over-primary hover:brightness-80 p-4 rounded-xl'
      >
        <HistoryIcon className='w-6 h-6' />
      </a>

      <a
        href='#'
        className='inline-flex items-center justify-center  transition-all ease-in-out duration-100 bg-primary text-over-primary hover:brightness-80 p-4 rounded-xl'
      >
        <SettingsIcon className='w-6 h-6' />
      </a>

      <a
        href='#'
        className='inline-flex items-center justify-center  transition-all ease-in-out duration-100 bg-primary text-over-primary hover:brightness-80 p-4 rounded-xl'
      >
        <SunIcon className='w-6 h-6' />
      </a>
    </nav>
  )
}
