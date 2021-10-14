import styled from 'styled-components'
import Screen from '../components/Screen/Screen'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 80px 1fr 1fr 10px;
  row-gap: 20px;
`

const Header = styled.div`
  height: 100%;
  grid-row:1/2;
  background-color: teal;
  text-align: center;
  color:white;
  font-size: 2rem;
  font-weight: bold;
  padding:0.6rem;
`

const Home = () => {
  return (
    <Container>
      <Header>CALCULE</Header>
      <Screen />
    </Container >
  )
}

export default Home
