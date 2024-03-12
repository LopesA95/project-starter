import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const Form = styled.form`
  padding: 50px 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: blueviolet;
  border-radius: 10px;
  

  > h1 {
    font-size: 48px;
    color: white;
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: white;
    margin: 20px 10px;
  }

  > a {
    margin-top: 50px;
    color: white;
    padding: 10px;
  }

  
`

