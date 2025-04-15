import { Link } from 'react-router-dom';
import { HeaderContainer, Tools } from './styles';
import logo from '../../assets/config/logo.png';
import { Iheader } from '../../types/header';
import CodeHilighterContainer from '../CodeHilighterContainer';
import ChangeLanguage from '../Changelanguge';

interface Props extends Iheader {}

export default function Header({
  redirect = '/',
  projectFiles = [],
  assets,
  folderDowloadName,
}: Props) {
  const hasFiles = projectFiles.length > 0;

  return (
    <HeaderContainer>
      <Link to={redirect}>
        <img
          src={logo}
          alt="botao para voltar para a pagina incial dos testes"
        />
      </Link>
      <Tools>
        <ChangeLanguage />
        {hasFiles && (
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
