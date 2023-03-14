import styled from 'styled-components';
import desktop from '../assets/background/desktop.jpg';
import mobile from '../assets/background/mobile.jpg';

export const Container = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
position: relative;
width: 100%;
height: 100%;
background: url(${desktop}) no-repeat ;
background-size: cover;

@media (max-width:800px) {
 background: url(${mobile}) no-repeat ;
}
`;

export const Content = styled.div`
display: flex;
position: relative;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 100vh;
height: 100%;


`;