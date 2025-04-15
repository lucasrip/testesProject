import styled from 'styled-components';
import colors from '../../styles/colors';

export const ReferencesContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 15rem;
  display: flex;
  background: ${colors.gray.regular};
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;

  h1 {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      display: flex;
      width: fit-content;
      align-items: center;
      max-width: auto;
      text-decoration: underline;
      text-underline-position: under;
      line-height: 2.5;
      min-width: 5rem;
      height: 2rem;
    }
  }
`;
