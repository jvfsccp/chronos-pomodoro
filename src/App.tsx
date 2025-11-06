import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

export function App() {
  console.log('Oi')

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <DefaultInput type='text' />
          </div>

          <div className='flex flex-col items-center justify-center gap-6'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-6'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='flex flex-col items-center justify-center gap-6'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}
