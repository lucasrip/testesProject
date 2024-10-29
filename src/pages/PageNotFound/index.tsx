import { PageNotFoundContainer } from './styles';
import { Link } from 'react-router-dom';
export default function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <div>
        <h1>404</h1>
        <h2>Page not founded</h2>
        <Link to="/" title="click here for back to home">
          Click here for back to home
        </Link>
      </div>
    </PageNotFoundContainer>
  );
}
