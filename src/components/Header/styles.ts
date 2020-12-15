import styled from 'styled-components'

import {Props} from '.'

export const Container = styled.div<Props>`
   top: 0;
   width: 100vw;
   height: 70px;
   background: #4652fd;
   box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
   display: flex;
   flex-direction: row;
   align-items: center;
   /* justify-content: ${(props)=> props.haveArrowLeft? 'space-between' : 'space-between'}; */
   justify-content: space-between;
   padding: 0px 20px;
   position:fixed;
   z-index: 10;
   > #sets .droplist{
     background: red;
   }

   > h1{
     color: white;
     font-size: 16px;
   }
   
   > img{
     cursor:pointer;
     width: 50px;
   }

   > #search-input{
    width: 1060px;
    height: 36px;
    background: #f5f5ff;
    border-radius: 6px;
    /* box-shadow: 0px 0px 0px 1.3px black;  */
    padding: 10px;
    font-family: 'Archivo', sans-serif;
    font-size: 15px;
    transition: 0.2s;
    color:black;

    ::placeholder{
      color:rgba(0, 0, 0, 0.6);
      opacity: 0.5;
    }

    :hover{
      width: 1090px;
    }

    :focus{
      box-shadow:  0 0 0px 2px #f5f5ff;
      outline: none;

      ::placeholder{
        
      }
    }

    > .arrow-left{
     width: 40px;
     height: 40px;
     margin-right: 30px;

     :hover{
     cursor: pointer;
    }
   }
  }
`