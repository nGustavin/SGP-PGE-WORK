import React from 'react'
import Header from '../../components/Header/index'
import { Container, Main, TitleArea } from '../../styles/pages/form'
import 


export default function ItemSetForm() { 
  
  const onSubmit = (data: any) => console.log(data)

  return(


    <>
    <Container>
    <Header haveArrowLeft/>
    <Main>
      <TitleArea>
        <div className="send-image">
          <input type="file" className="send-image"/>
        </div>
        {/* <label  ref="file"> Choose a File </label> */}
      </TitleArea>
      
    </Main>
    </Container> 
    </>
  )
}
 
