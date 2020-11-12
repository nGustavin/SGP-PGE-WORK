import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const Main = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  width: 1645px;
  height: 100%;
  max-height: 100%;
  position: absolute;
`
export const TitleArea = styled.div`
  background: yellow;
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
    border-radius: 8px;
    
  }
`
export const Form = styled.div`
  background: green;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  > input{
    background: white;
    width: 500px;
    height: 40px;
    padding: 0px 10px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    ::placeholder{
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
      font-size: 14px;
      :focus{
      font-size: 0px;
    }
    }

    
  }
`
