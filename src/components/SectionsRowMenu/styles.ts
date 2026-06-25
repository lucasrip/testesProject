import styled from 'styled-components';

export const SectionsMenuContainer = styled.div`
  position: sticky;
  top: 5rem;
  display: flex;
  width: 100%;
  background: #ffffffe1;
  min-height: 5rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  overflow-x: auto;
  z-index: 2;

  p,
  a {
    color: #5c5b5b;
    cursor: pointer;
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
