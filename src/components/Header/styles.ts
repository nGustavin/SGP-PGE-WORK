import styled from 'styled-components'

import {Props} from '.'

export const Container = styled.div<Props>`
   top: 0;
   width: 100vw;
   height: 70px;
   background: #4652fd;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: ${(props)=> props.haveArrowLeft? 'space-between' : 'space-between'};
   padding: 0px 20px;
   position: absolute;
   z-index: 10;

   > .header-title{
     color: white;
   }


   > .search-input{
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

// .header{
//   top: 0;
//   width: 100vw;
//   height: 70px;
//   background: #4652fd;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: ;
//   padding: 0px 20px;
//   position: absolute;
//   z-index: 10;
  
// }

// .header .search-input{
//   width: 1060px;
//   height: 36px;
//   background: #f5f5ff;
//   border-radius: 6px;
//  /* box-shadow: 0px 0px 0px 1.3px white; */
//   padding: 10px;
//   color: #ffffff;
//   font-family: 'Archivo', sans-serif;
//   font-size: 15px;
//   transition: 0.2s;
//   color:black;
// }

// .header .search-input::placeholder{
//   color:rgba(0, 0, 0, 0.6);
//   opacity: 0.5;
// }

// .header .search-input:hover{
//   width: 1090px;
// }

// .header .search-input:focus{
//   box-shadow:  0 0 0px 2px #ffffff;
//   outline: none;
// }

// .header .search-input:{
//   box-shadow:  0 0 0px 2px #ffffff;
//   outline: none;
// }

// .header .header-title {
//   font-size: 36;
// }

// .arrow-left{
//   width: 40px;
//   height: 40px;
// }

// .arrow-left:hover{
//   cursor: pointer;
// }



