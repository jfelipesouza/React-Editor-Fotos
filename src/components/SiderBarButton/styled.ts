import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height:50px ;
  width:100%;
  background-color:#ace;
  border-width: 1px;
  border-color: #3335;
  border-style: solid;
  min-width: 150px;
  font-size: 1.3rem;
  position: relative;
  cursor: pointer;

  &:focus{
    background-color:#123;
    color:#fff;
  }

  ::after{
    content: '';
    position: absolute;
    width: 80%;
    left:10%;
    bottom: 1px;
    height: 2px;
    background-color: teal;
  }

  @media(max-width:800px){
    margin-top:0;
    margin-right:5px;
    padding-left:10px;
    padding-right:10px;
    margin-left:5px;
  }


`;
