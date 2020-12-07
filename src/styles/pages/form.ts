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
    border-radius: 4px;
    :hover{
        box-shadow: 0px 0px 0px 2px black;
     
      }
    :focus{
      box-shadow: 0px 0px 0px 2px black;
     
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
  height: 100vh;
  position: absolute;
  box-shadow: 0px 0px 100px 1px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  overflow-y: hidden;

  #form{
    background: #4652fd;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 100px 0px 50px 0px;
    overflow-y: scroll;

    .field-container{
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label{
        color:white;
        font-size: 20px;
        margin-bottom: 4px;
      }
    }

    .submit-container{
      position: absolute;
      bottom: 10px;      

      button{
        height: 40px;
        width: 200px;
        color: white;
        border-radius: 4px;
        background: none;
        box-shadow: 0px 0px 0px 2px white;
        font-size: 16px;
        font-weight: bold;
        transition: 0.2s;

        :hover{
          background: white;
          color: black;
          cursor: pointer;
        }
      }

      button + button{
        margin-left: 50px;
      }
    }
    
  }

  
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
