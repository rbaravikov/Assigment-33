import './App.css'
import styled from 'styled-components'

const NavStyle = styled.nav`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  box-shadow: 0px 3px 3px lightgrey;
  position: fixed;
  width: 100vw;
`
const AStyle = styled.a`
  text-decoration: none;
  color: #394C77;
  transition: .3s;
  margin: 5px;
  &:hover {
    color: #3E95D7;
    cursor: pointer;
  }
`
const ButtonStyle = styled.button`
  background: #2188CE;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  max-width: fit-content;
  align-self: center;
`

const HeaderStyle = styled.header`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`
const DivStyled = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  color: #103F62;
`

const DivCardStyled = styled.div`
  background: white;
  padding: 15px;
  border-radius: 4px;
  max-width: 300px;
`

function App() {



  return (
    <>
    <NavStyle>
      <AStyle href="#">Landing Page</AStyle>
      <div>
        <AStyle href="#">Home</AStyle>
        <AStyle href="#">About</AStyle>
        <AStyle href="#">Contacts</AStyle>
        <AStyle href="#">Faq</AStyle>
      </div>
      <ButtonStyle>Get Started</ButtonStyle>
    </NavStyle>

    <HeaderStyle>
      <DivStyled>
        <h1>React Landing Page Website Template</h1>
        <p>Made with react and styled components</p>
        <ButtonStyle>Get Started</ButtonStyle>
      </DivStyled>
      <div>
        <DivCardStyled>
          <h2>Option 1</h2>
          <p>Malores reicendis tenetur sunt eaque asperiores repallat molestiae atque natus accusamus inventore quidem ut possimus.</p>
        </DivCardStyled>
      </div>
    </HeaderStyle>

    </>
  )
}

export default App
