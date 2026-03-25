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
  padding: 1rem;
  max-width: 100%;
  gap: 1rem;

  main {
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    grid-template-rows: repeat(4, 1fr);
    justify-content: center;
    padding-top: 2rem;
    gap: 2rem;
    height: auto;
    min-height: 100vh;
    max-width: 100%;
  }
  @media (max-width: 400px) {
    main {
      gap: 1rem;
      place-items: center;
    }
  }
`;

export const LinkItem = styled(Link)`
  background: #ffffff;
  display: flex;
  box-shadow: #f4eef5 0px 7px 29px 0px;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  min-height: 10rem;
  padding: 1rem;
  border-radius: 8px;
  strong {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 400px) {
    padding: 1rem;
    width: 90%;
    strong {
      font-size: 1.5rem;
    }
  }
`;
