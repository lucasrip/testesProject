import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.main`
display: flex;
flex-direction: column;
gap: 1rem;
width: 31.25rem;
max-width: 100%;
height: auto;
margin-top: 3rem;

 span 
{
  font-size: 1.3rem;
  line-height: 1.4rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${colors.black.regular};
  font-family: 'Oswald', sans-serif;
}
`;
