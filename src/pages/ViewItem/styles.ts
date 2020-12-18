import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: none;
`

export const Wrapper = styled.div`
  padding: 110px 20px 20px 20px;
  background: #4652fd;
  width: 1645px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > .top-content{
    width: 100%;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 10px 0px;
    >h1{
      color:white;
      font-weight: normal;
    }
    >img{
      width: 400px;
      max-width: 400px;
      border-radius: 4px;
    }
  }
  > .bottom-content{
    width: 100%;
    height: 100%;
    padding: 35px;
    background: #e5e5e5;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    text-align: center;

    >h1{

      color:black;
      font-family: 'Roboto', sans-serif;
      font-weight: normal;

      >strong{

        color: #4652fd;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;

      }
    }

  }
`