import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    width: 100%;
    height: 100%;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 720px) {
    & > div {
      flex-direction: column-reverse;
    }
  }
`;
