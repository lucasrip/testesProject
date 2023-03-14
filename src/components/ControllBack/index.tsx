import { Container } from './styles';
import { Link } from 'react-router-dom';
import { assets } from '../../exportAssets/assets/imports';

interface Props
{
  label: string;
}

export default function ControllBack({label}:Props)
{
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={assets.leftArrow} loading="lazy" alt="botao para voltar para a home" title="botao para voltar para a home" />
        </Link>
        <strong>
          {label}
        </strong>
      </div>
    </Container>
  );
}