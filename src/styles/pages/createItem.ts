import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  input[type=text]{
    background: white;
    width: 500px;
    height: 50px;
    padding: 0px 10px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    transition: 0.3s;
    :hover{
        box-shadow: 0px 0px 0px 2px black;
     
      }
    :focus{
      box-shadow: 0px 0px 0px 2px #4652fd;
    } 
  }
`

export const Main = styled.div`
  background: #4652fd;
  width: 1644px;
  height: 100%;
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  padding: 90px 0px;

  > section{
    overflow-y: scroll;
    padding: 5px;
    
    ::-webkit-scrollbar {
        display: none;
    }

    
    >h1{
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 35px;
    }

    .field-container{
      > h1 {
      color: white;
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      z-index: 10;
      margin: 10px 0px;
      }
    } 
  }

  
  > .send-data-container {
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    

    > input.add-field{
      background: #4652fd;
      width: 250px;
      height: 40px;
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      cursor: pointer;
      font-size: 15px;
      box-shadow: 0px 0px 0px 2px white; 
      transition: 0.3s; 
      outline: none;
      :hover{
        background: white;
        color: black;
      }
      :focus{
        
      }
    }
  }
`
