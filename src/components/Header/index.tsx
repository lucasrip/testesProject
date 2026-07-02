import { Link } from 'react-router-dom';
import { HeaderContainer, Tools } from './styles';
import logo from '../../assets/config/logo.png';
import { Iheader } from '../../types/header';
import CodeHilighterContainer from '../CodeHilighterContainer';
import ChangeLanguage from '../Changelanguage';
import { useEffect, useRef } from 'react';

interface Props extends Iheader {}

export default function Header({
  redirect = '/',
  projectFiles = [],
  assets,
  folderDowloadName,
}: Props) {
  const hasFiles = projectFiles.length > 0;
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateScroll = () => {
     
      if (!progressRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const trackLength = documentHeight - windowHeight;
      const percentage = trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;

      progressRef.current.style.width = `${percentage}%`;
    };

    window.addEventListener('scroll', calculateScroll, { passive: true });

    return () => window.removeEventListener('scroll', calculateScroll);
  }, []);

  return (
    <HeaderContainer>
      <span className="progressBar">
        <div className="bar" ref={progressRef}></div>
      </span>
      <div>
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
      </div>
    </HeaderContainer>
  );
}
