import styled from 'styled-components';

export const SectionsMenuContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  overflow-x: auto;

  a {
    color: #5c5b5b;
    font-size: 1rem;
  }
  .currentSection {
    color: #000;
    font-weight: bold;
  }

  .preCurrentSection {
    color: #000;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  strong {
    font-size: 1rem;
  }

  > nav {
    margin-left: 1rem;
    display: flex;
    gap: 1rem;
  }
`;
