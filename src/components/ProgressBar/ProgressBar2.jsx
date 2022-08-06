import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ProgressContainer = styled.nav`
    height
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 50;
    border-radius: 50;
`
const Title = styled.nav`
  font-weight: 400;
  letter-spacing: 1px;
  margin-top:40px;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
`
function Progress({ progressCount }) {
    const [min, setProgress] =
        useState(progressCount);
    return (
        <>
            min: {min}
            <button onClick={() =>
                setProgress(progressCount)}>Reset</button>
            <button onClick={() => setProgress(prevMin => prevMin - 10)}>Uncompleted Task</button>
            <button onClick={() => setProgress(prevMin => prevMin + 10)}>Completed Task</button>
        </>
    )
}
const Filler = styled.nav`
   height: 100%;
   width: ${Progress}%;
   background-Color: #1cca3d;
   border-radius: inheriet;
   text=aliign: right;
   transititon: width 1s ease-in-out;
`

const Progressbar = styled.nav`
   padding: 5;
   color: white;
   font-weight: bold;
`
const ProgressBar2 = () =>{
return (
    <ProgressContainer>
        <Filler><Title>Team's Progress</Title><Progressbar> {`${Progress}%`}
        </Progressbar></Filler>
        </ProgressContainer>
)
}

export default ProgressBar2

