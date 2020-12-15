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
  background: #4652fd;
  width: 1644px;
  height: 100%;
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  padding: 90px 0px;

  > #form{
    background: #4652fd;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 0px 50px 0px;
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

  
  > .submit-container{
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
`
