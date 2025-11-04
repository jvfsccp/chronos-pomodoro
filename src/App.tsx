import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'

export function App() {
  console.log('Oi')

  return (
    <div>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas
        dicta maiores suscipit a nihil unde repellat cupiditate accusantium,
        placeat hic rerum provident quibusdam ex minima, fugit saepe adipisci
        iste.
      </p>
    </div>
  )
}
