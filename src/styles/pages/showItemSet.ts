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
    background: black;
    width: 300px;
    height: 300px;
    grid-area: IA;
    align-self: center;
    justify-self: center;
    border-radius: 8px;
  }

  > .title {
    grid-area: TA;
    color: black;
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
    color: black;
    padding: 0px 250px;
    
    > h2 {
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
    color: black;
    font-weight: 400;
  }

  > #amount-container{
    grid-area: AA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
    padding: 0px 230px;


    > .amount{
      color: black;
      font-weight: normal;
    }

  }

  > #avaliable-container {
    grid-area: DA;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;

    > .avaliable{
      color:black;
      font-weight: normal;
    }

    
  }

  h3{
      font-size: 25px;
    }



 
  
  
`