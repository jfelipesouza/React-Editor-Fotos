import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  border-width: 1px;
  border-color: #ccc;
  border-style: solid;
  height: 50px;
  align-items: center;
  justify-content: center;
  color:#fff;
  text-transform: uppercase;


  input[type="file"] {
    display: none;
  }

  label {
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    background-color:#BD1111;
    align-items:center;
    justify-content: center;
    width:100%;
    height:100%;
    cursor: pointer;
  }
  label:hover{
    background-color: #bd1111ad;
  }


`;
