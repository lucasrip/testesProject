import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 50rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-margin-top: -500px;

  > div {
    scroll-margin-top: 6.25rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30rem;
    gap: 3rem;
    align-items: center;
    padding: 2rem;

    h1 {
      width: 15rem;
      height: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.3rem solid black;
      font-size: 2rem;
      font-weight: bold;
      border-radius: 100%;
    }

    > div {
      display: flex;
      width: 100%;
      height: 5rem;
      gap: 1rem;
      justify-content: center;
      align-items: center;

      & > button {
        display: flex;
        flex-direction: column;
        width: 3rem;
        height: 3rem;
        background: transparent;
        justify-content: center;
        align-items: center;
        border: 0px;
        gap: 0.5rem;
        padding-bottom: 1rem;
        img {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    div {
      scroll-margin-top: 10rem;
    }
  }
  @media (max-width: 300px) {
    div {
      width: 100%;
      height: 20rem;
      padding: 0.5rem;
      h1 {
        width: 10rem;
        height: 10rem;
      }

      > div {
        width: auto;
        height: 1rem;
        gap: 1rem;
        & > button {
          width: 1.5rem;
          height: 1.5rem;
          gap: 0.2rem;
          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
`;
