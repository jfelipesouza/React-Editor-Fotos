import styled from 'styled-components';


export const Heade = styled.header`
  background-color:${props=>props.theme.colors.primary.main};
  box-shadow: 1px 1px 1px 0px;
`;


export const Container = styled.div`
  display:flex;
  width: 100vw;
  height: 35px;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  padding-left:10px;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  h3{
    color:#fff;
  }

`
export const Right = styled.div`
  padding-right:10px;
  display:flex;
  align-items:center;
  justify-content: center;

  a{
    font-size:1.2rem;
    text-decoration: none;
    color:#333;

  }

  a:hover{
    text-decoration:underline;
    color:#111;
  }
`;

