import './App.css'
import { ButtonStyle, NavStyle } from './components/NavStyle'
import { CardsStyle } from './components/CardsStyle'
import { ContainerStyle, HeaderStyle } from './components/HeaderStyle'
import Option from './components/Options'

function App() {

  return (
    <>
    <NavStyle>
        <a href="">Landing Page</a>
        <div>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contacts</a>
          <a href="">Faq</a>
        </div>
        <ButtonStyle>Get Started</ButtonStyle>
    </NavStyle>

    <HeaderStyle>
      <CardsStyle>
        <h1>React Landing Page Website Template</h1>
        <p>Made with react and styled components</p>
        <ButtonStyle>Get Started</ButtonStyle>
      </CardsStyle>
      <ContainerStyle>
        <Option/>
      </ContainerStyle>
    </HeaderStyle>
    </>
  )
}

export default App
