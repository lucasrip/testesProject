import { Link } from 'react-router-dom';
import { HeaderContainer, Tools } from './styles';
import logo from '../../assets/config/logo.png';
import CodeHilighterContainer from '../CodeHilighterContainer';
import { Iheader } from '../../types/header';

interface Props extends Iheader {}

export default function Header({
  redirect,
  projectFiles = [],
  assets,
  folderDowloadName,
}: Props) {
  return (
    <HeaderContainer>
      <Link to={redirect}>
        <img
          src={logo}
          alt="botao para voltar para a pagina incial dos testes"
        />
      </Link>
      <Tools>
        {projectFiles.length > 0 && (
          <CodeHilighterContainer
            projectFiles={projectFiles}
            assets={assets}
            folderDowloadName={folderDowloadName}
          />
        )}
      </Tools>
    </HeaderContainer>
  );
}
