import { TimerIcon } from 'lucide-react'

export function Logo() {
  return (
    <div className='flex items-center justify-center gap-6 pt-14'>
      <a
        href='#'
        className='flex flex-col items-center justify-center gap-2 text-6xl font-bold transition-all ease-in-out duration-100 text-primary hover:brightness-80'
      >
        <TimerIcon className='w-24 h-24' />
        <span>Chronos</span>
      </a>
    </div>
  )
}
