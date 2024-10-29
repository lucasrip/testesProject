import styled from 'styled-components';

export const ReferencesContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0.5rem;

    a {
      display: flex;
      align-items: center;
      width: auto;
      max-width: 10rem;
      text-decoration: underline;
      text-underline-position: under;
      line-height: 2.5;
      min-width: 5rem;
      height: 2rem;
    }
  }
`;
