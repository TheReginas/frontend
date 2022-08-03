import React from 'react'
import styled, { withTheme } from 'styled-components'

const ProgressContainer = styled.nav`
    height: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #222;
    margin: 50;
    border-radius: 50;
`
const title  = styled.nav`
  font-weight: 400;
  letter-spacing: 1px;
  margin-top:40px;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
`

const filler = styled.nav`
   height: 100%;
   width: ${completed}%;
   background-Color: #1cca3d;
   border-radius: inheriet;
   text=aliign: right;
   transititon: wodth 1s ease-in-out;

`

const progress = styled.nav`
   padding: 5;
   color: white;
   font-weight: bold;
`


const ProgressBar = (props) => {
  const  {completed } = props;
    return (
    <ProgressContainer>
        <div class="filler"><h3 className='title'>Team's Progress</h3><span className='progress'> {`${completed}%`}
        </span></div></ProgressContainer>
  )
}

export default ProgressBar