
import Routes from './../router';
import { Container, Content } from './components/Container';
import ContentHeader from './components/ContentHeader';
import Header from './components/Header';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <Container>
        <Header/>
        <Content>
          <ContentHeader/>
          <Routes/>
        </Content>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
