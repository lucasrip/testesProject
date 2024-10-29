import styled from 'styled-components';

export const TextEditorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25rem;
  margin-top: 8rem;
  align-items: center;
  flex-direction: column;
  scroll-margin-top: 100px;
  margin: 5rem 0rem;
  @media (max-width: 700px) {
    div {
      scroll-margin-top: 10rem;
    }
  }
`;
