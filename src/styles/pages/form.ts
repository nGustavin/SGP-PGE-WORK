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

    ::placeholder{
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
      font-size: 14px; 
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
  }

  
`
export const Form = styled.div`
  background: #4652fd;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  
  
  > .send-data-container {
    position: relative;
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
        box-shadow: 0px 0px 0px 2px #4652fd; 
        color: black;
      }
      :focus{
        
      }
    }
  }

  } 
`


