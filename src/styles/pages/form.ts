import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #060930;

  input{
    background: white;
    width: 500px;
    height: 40px;
    padding: 0px 10px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    transition: 0.3s;
    :focus{
      box-shadow: 0px 0px 0px 2px black;
     
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
  box-shadow: 0px 0px 60px 20px rgba(0, 0, 0, 0.1);
`

export const TitleArea = styled.div`
  background: #333456;
  width: 100%;
  height: 1000px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 310px 0px 200px;
  

  > .send-image{
    background: blue;
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
  background: #333456;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  
  } 
`
