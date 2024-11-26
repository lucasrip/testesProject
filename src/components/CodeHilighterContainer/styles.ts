import styled from 'styled-components';

export const HiligterContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  button {
    border: 0px transparent;
    background: none;
    color: #000;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const HiligterModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: blur(2);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: rgb(244, 238, 245, 0.8);
  left: 0px;
  top: 0px;
`;

export const Content = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  header {
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    .close {
      cursor: pointer;
    }
  }

  .highlighterResult {
    width: 100%;
  }

  .openFiles {
    width: 10rem;
    & > button {
      border: 0px;
      background: none;
      color: #ffff;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 5rem;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  @media (max-width: 650px) {
    width: 95%;
    height: 95%;
  }
`;

export const Tools = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem 0rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    flex-wrap: wrap;
  }

  button,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 8rem;
    height: 4rem;
    gap: 0.5rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .copy {
    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2c0839;
      color: #ffff;
      width: 5rem;
      height: 3rem;
      border-radius: 0.5rem;
      margin-right: 1rem;
      font-weight: bold;
    }

    div:after {
      position: absolute;
      right: -20px;
      content: '';
      width: 0.5rem;
      height: 0.2rem;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 15px solid #2c0839;
    }
  }
  @media (max-width: 650px) {
    > div {
      gap: 1rem;
      width: 100%;
      flex-wrap: nowrap;
      overflow: scroll;
    }
    button {
      min-width: auto;
      max-width: 100%;
      padding: 0rem;
      p {
        width: auto;
        white-space: nowrap;
      }
    }
  }
`;

export const Files = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;

  .selected {
    font-weight: bold;
    border-bottom: 5px solid rgb(73, 35, 71);
  }
`;
