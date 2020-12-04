import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  


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
     
      ::placeholder{
        transition: 0.3s;
        color: white;
      }  
    }
  } 

  ` 


export const Main = styled.div`

  display: flex;
  flex-direction: row;
  width: 1645px;
  height: 100%;
  max-height: 100%;
  position: absolute;
  box-shadow: 0px 0px 100px 1px rgba(0, 0, 0, 0.2);
  
  
`

export const TitleArea = styled.div`
  background: #4652fd;
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 15px 0px 20px 5px rgba(0, 0, 0, 0.3);
  z-index: 6;

  > .send-image{
    background: #FFF;
    width: 400px;
    height: 400px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
`
export const Form = styled.div`
  background: #4652fd;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0px 0px 0px;
 
  section{
    overflow-y: scroll;

    padding: 5px;
    margin-bottom:60px;
    /* width */
      ::-webkit-scrollbar {
        display: none;
      }

    >h1{
      color: white;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 35px;
    }

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
  .two-field-container{
    display: flex;
    gap: 10px;
    input{
      width: 245px;
    }

    div {
      display: flex;
      flex-direction: column;

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


