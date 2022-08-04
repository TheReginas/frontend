import React, { useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import {Animated} from 'react-animated-css'

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
const title  = styled.nav`
  font-weight: 400;
  letter-spacing: 1px;
  margin-top:40px;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
`

const progress = styled.nav`
   padding: 5;
   color: white;
   font-weight: bold;
`

const filler = styled.nav`
   height: 100%;
   width: ${progress}%;
   background-Color: #1cca3d;
   border-radius: inheriet;
   text=aliign: right;
   transititon: wodth 1s ease-in-out;

`

const ProgressBar = (props) => {
  const  {
      progress,
      animated,
      indeterminate,
      progressDuration,
      indeterminateDuration,
      //width,
      onCompletion
   } = props;

   const [timer] = useState(new Animated.Value(0));
   const [width] = useState(new Animated.Value(0));

   const indeterminateAnimation = Animated.timing(timer, {
     duration: indeterminateDuration,
     toValue: 1
   });

   useEffect(()=>{
     if (indeterminate || typeof progress === 'number'){
       startAnimation();
     } else {
       stopAnimation();
     }
   }, [indeterminate, progress, startAnimation, stopAnimation]);

   const startAnimation = useCallback(()=>{
     if (indeterminate){
       timer.setValue(0);
       Animated.loop(indeterminateAnimation).start();
     }else{
       Animated.timing(width, {
         duration: animated ? progressDuration : 0,
         toValue: progress
       }). start(()=>{
         onCompletion();
       });
     }
   },
   [
     progress,
     animated,
     indeterminate,
     progressDuration,
     indeterminateDuration,
     width,
     onCompletion,
     timer
   ]);

   const stopAnimation = useCallback(()=>{
if (indeterminateAnimation) indeterminateAnimation.stop();

Animated.timing(width,{
  duration: 200,
  toValue: 0,
  isInteraction: false
}).start();
   }, [indeterminateAnimation, width]);

   const styleAnimation = () => {
     return indeterminate ? {
       transform: [
         {
           translateX: timer.interpolate({
             inputRange: [0, 0.5, 1],
             outputRange: [-0.6 * 320, -0.5 * 0.8 * 320, 0.7 *320]
           })
         },
         {
           scaleX: timer.interpolate({
             inputRange: [0, 0.5, 1]
,
outputRange:[0.0001, 0.8, 0.0001]           })
         }
       ]
     }
     : {
       width: width.interpolate({
         inputRange: [0, 100],
         outputRange: ['0%', '100%']
       })
     };
   };
    return (
    <ProgressContainer>
        <div class="filler"><h3 className='title'>Team's Progress</h3><span className='progress'> {`${progress}%`}
        </span></div></ProgressContainer>
  )
}

export default ProgressBar