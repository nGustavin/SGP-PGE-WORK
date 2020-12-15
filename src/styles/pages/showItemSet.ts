import styled from 'styled-components'

export const Container = styled.div`
  position: relative; 
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .a-link{
    text-decoration: none;
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
`

export const CreateItemWrapper = styled.div`
  background: #4652fd;
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.3);
  width: 1645px;
  padding: 8px;
  height: 100%;
  display: grid;
  grid-template-rows: 500px 200px 200px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'IA TA'
                       'RA RV'
                       'AA DA'
                       'BA BA';
  padding: 30px;
  

  > .item-image {
    background: white;
    width: 300px;
    height: 300px;
    grid-area: IA;
    align-self: center;
    justify-self: center;
    border-radius: 8px;
  }

  > .title {
    grid-area: TA;
    color: white;
    font-size: 46px;
    align-self: center;
    text-align: center;
    justify-self: center;
    font-weight: normal;
    text-decoration: none;
    margin-bottom: 20px;
  }

  > #room-container{
    grid-area: RA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    padding: 0px 250px;
    
    > .room {
      font-weight: 400;
    }
  }

  > #roomValues-container {
    grid-area: RV;
    max-height: 200px;
    overflow-y: scroll;
    padding: 100px 50px 100px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;

    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: none;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: white;
      transition: 0.2s;
      border-radius: 40px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      transition: 0.2s;
      background: rgba(255, 255, 255, 0.6);
    }

    >div {
      display: grid;
      grid-template-rows:  auto;
      grid-template-columns: repeat(9, 1fr);
      margin: 3px 3px;

      
      > h1{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3px 3px;
        color: white;
        background: rgba(255, 255 ,255 , 0.1);
        width: 70px;
        height: 35px;
        border-radius: 20px;
        font-size: 20px;
      }
    }
  }

  > #amount-container{
    grid-area: AA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    padding: 0px 230px;


    > .amount{
      color: white;
      font-weight: normal;
    }

  }

  > #avaliable-container {
    grid-area: DA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    > .avaliable{
      color:white;
      font-weight: normal;
    }

    
  }

  h3{
      font-size: 25px;
    }



 
  
  
`