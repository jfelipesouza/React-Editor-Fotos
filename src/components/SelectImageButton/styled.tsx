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

  text-transform: uppercase;
  background-color: #bd1111;



  input[type="file"] {
    display: none;
  }




`;

export const Button = styled.button`
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #bd1111;
  text-align: center;
  color: #FFF;
  width:100%;
  height: 100%;
  cursor: pointer;
  font-size:1.2rem ;

`
