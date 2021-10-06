import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:2px;
  height:50px ;
  width:100%;
  background-color:#ace;
  cursor: pointer;
  border-width: 2px;
  border-color: #333;
  border-style: solid;
  min-width: 150px;


  @media(max-width:800px){
    margin-top:0;
    margin-right:5px;
    padding-left:10px;
    padding-right:10px;
    margin-left:5px;
  }


`;
