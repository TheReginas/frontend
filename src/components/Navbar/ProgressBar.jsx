import React from 'react'
import styled, { keyframes } from 'styled-components'

const ProgressContainer = styled.nav`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #222;
`
const title  = styled.nav`
  font-weight: 400;
  letter-spacing: 1px;
  margin-top:40px;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
`

const progressbar = styled.nav`
   background: #30e31e;
    width: 0%;
    height: 15px;
    border-radius: 5px;
    animation: progressbar 1s linear forwards; 
`

const progress = styled.nav`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background:#222;
    float: right;
    margin-top: 15px;
    margin-right: -20px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;

`


function ProgressBar() {
  return (
    <ProgressContainer>
        <div class="progressbar"><h3 className='title'>Team's Progress</h3><span className='progress'>
        </span></div></ProgressContainer>
  )
}

export default ProgressBar