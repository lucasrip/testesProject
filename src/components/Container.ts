import styled from 'styled-components';
import desktop from '../assets/background/desktop.png';

export const Container = styled.div`
position:relative;
margin: 0 auto;
display: flex;
flex-direction: column;
position: relative;
width: 100%;
min-height: 100vh;
height: 100%;
background: url(${desktop}) no-repeat ;
background-size: cover;

`;

export const Content = styled.div`
display: flex;
position: relative;
align-items: center;
flex-direction: column;
width: 100%;
min-height:auto;
`;