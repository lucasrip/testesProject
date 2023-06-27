
import Routes from './../router';
import { Container, Content } from './components/Container';
import Header from './components/Header';
import GlobalStyle from './styles/global';


function App() {
  return (
    <Container>
      <Header/>
      <Content>
        <Routes/>
      </Content>
      <GlobalStyle/>
    </Container>
  );
}

export default App;
