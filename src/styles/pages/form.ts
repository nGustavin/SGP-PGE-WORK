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
    height: 40px;
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
  flex-direction: column;
  width: 1645px;
  height: 100%;
  max-height: 100%;
  position: absolute;
  box-shadow: 0px 0px 100px 1px rgba(0, 0, 0, 0.5);

`

export const TitleArea = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 1000px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 310px 0px 200px;


  > .send-image{
    background: #FFF;
    width: 400px;
    height: 400px;
    border-radius: 8px;
  }

  .title-input{
    width: 400px;
    height: 50px;
    
  }
`
export const Form = styled.div`
  background: #e0e0e0;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  
  
  > .send-data-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    bottom: 0;
    background: none;
    width: auto;
    height: 100px;
    

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


