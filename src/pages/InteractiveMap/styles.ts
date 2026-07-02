import styled from 'styled-components';

export const InteractiveMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 40rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;

  .container {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  }
  svg {
    position: relative;
    width: 60%;
    height: 50%;
    min-width: 15rem;
    min-height: 20rem;
  }
  .norte {
    fill: #63ab3f;
  }
  .nordeste {
    fill: #f0b541;
  }
  .centro-oeste {
    fill: #ffae70;
  }
  .sudeste {
    fill: #4fa4b8;
  }
  .sul {
    fill: #686f99;
  }
  path {
    width: auto;
    height: auto;
    fill: #1da1f2;
    stroke: white;
    stroke-width: 1px;
  }
  path:hover {
    fill: purple;
    stroke: red;
    stroke-width: 3px;
    transition: fill 0.4s;
  }

  .tooltip {
    display: none;
    position: absolute;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 13rem;
    height: 8rem;
    border-radius: 0.5rem;
    background: #e2ebf1;
    color: black;
    padding: 1rem;
    z-index: 2;
    strong {
      width: 100%;
      height: 2rem;
    }
    h2 {
      display: flex;
      font-size: 1rem;
      justify-content: space-between;
      width: 100%;
      height: 2rem;
    }
    span {
      width: 100%;
      height: 100%;
    }
  }
  .showTooltip {
    display: flex;
  }
`;
