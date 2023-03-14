import { Container } from './styles';

import Logo from '../../assets/logo/logo.png';

export default function Header()
{

  return(
    <Container>
      <img src={Logo} loading="lazy" alt="minha logo atual" title="minha logo atual" />  
    </Container>
  );
}