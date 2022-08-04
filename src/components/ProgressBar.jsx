import React, { useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import {Animated} from 'react-animated-css'
import PropTypes from 'prop-types'

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
const Title  = styled.nav`
  font-weight: 400;
  letter-spacing: 1px;
  margin-top:40px;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
`
const progress = (props) => {
  const { min, max } = props;
}

progress.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number
}
progress.defaultProps = {
min: 0,
max: 100
}

const Filler = styled.nav`
   height: 100%;
   width: ${progress}%;
   background-Color: #1cca3d;
   border-radius: inheriet;
   text=aliign: right;
   transititon: wodth 1s ease-in-out;
`

const Progressbar = styled.nav`
   padding: 5;
   color: white;
   font-weight: bold;
`

const ProgressBar = (props) => {
  const  {
      progress,
      animated,
      indeterminate,
      progressDuration,
      indeterminateDuration,
      onCompletion, 
      //startAnimation,
      //stopAnimation
   } = props;

   const [timer] = useState(new Animated.Value(0));
   const [bar] = useState(new Animated.Value(0));

   const indeterminateAnimation = Animated.timing(timer, {
     duration: indeterminateDuration,
     toValue: 1
   });

   //const progress = (props) =>{
     //const {min, max} = props;
   //}

   //progress.propTypes = {
     //min: PropTypes.number.isRequired,
     //max: PropTypes.number
   //}
   //progress.defaultProps = {
     //min: 0,
     //max: 100
   //}

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
      Animated.timing(bar, {
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
     bar,
     onCompletion,
     timer
   ]);

   const stopAnimation = useCallback(()=>{
if (indeterminateAnimation) indeterminateAnimation.stop();

Animated.timing(bar,{
  duration: 200,
  toValue: 0,
  isInteraction: false
}).start();
   }, [indeterminateAnimation, bar]);

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
       bar: bar.interpolate({
         inputRange: [0, 100],
         outputRange: ['0%', '100%']
       })
     };
   };


    return (
    <ProgressContainer>
        <Filler><Title>Team's Progress</Title><Progressbar> {`${progress =((min/max) * 100)}%`}
        </Progressbar></Filler></ProgressContainer>
  )
}



export default ProgressBar