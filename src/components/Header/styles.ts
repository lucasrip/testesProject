import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 3;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
    flex-wrap: wrap;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .progressBar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 8px;
    background: ${colors.gray.bold};
    .bar {
      background: ${colors.purple.bold};
      width: 0%;
      height: 100%;
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  ustify-content: center;
  align-items: center;
  width: auto;
`;
