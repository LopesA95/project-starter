import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: white;
  color: aqua;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 20px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: white;
    background-color: transparent;
    border: 0;
      

    &::placeholder {
      color: blueviolet;
    }
    &:focus{
      outline: violet;
      box-shadow: 0 0 5px violet;
      border-radius: 10px;
      border: 1px solid violet;;
    }
  }
`