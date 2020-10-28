import styled from 'styled-components'

const Wrapper = styled.div`
  width: 1645px;
  padding: 8px;
  height: 100%;
  padding: 0px 8px;
  margin-top: 90px;
  position: relative;
  overflow: auto;
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 14px;
  

 /*  @media (min-width: 768px) {
    width: 100%;
    max-width: 860px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
} */

/* width */
::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
  position: relative;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #4652fd;
  border-radius: 40px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #4652fd;
}
`

export default Wrapper