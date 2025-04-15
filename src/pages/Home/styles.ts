import { Link } from 'react-router-dom';
import styled from 'styled-components';
import background from '../../assets/config/background.png';
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background}) #f4eef5;
  background-size: 80%;
  height: auto;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.625rem;
    padding-top: 2rem;
    height: auto;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    padding: 2.5rem 0;
  }
`;

export const LinkItem = styled(Link)`
  background: #ffffff;
  display: flex;
  padding: 1.5rem;
  box-shadow: #f4eef5 0px 7px 29px 0px;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
  height: 8rem;
  border-radius: 8px;
  strong {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
  }
`;
