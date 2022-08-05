import React, { useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import {Animated} from 'react-animated-css'
//import { Transition} from //'react-transition-group'
//import PropTypes from 'prop-types'

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
//function progress (min, max) {
//min: 0,
//max: 100
//}

function Progress({progressCount}){
  const [min, setProgress] =
  useState(progressCount);
  return(
    <>
    min: {min}
    <button onClick={()=>
    setProgress(progressCount)}>Reset</button>
    <button onClick={()=> setProgress(prevMin => prevMin -10)}>Uncompleted Task</button>
    <button onClick={()=> setProgress(prevMin => prevMin + 10)}>Completed Task</button>
    </>
  )
}
const Filler = styled.nav`
   height: 100%;
   width: ${Progress}%;
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
  props = {
      Progress,
      Animated,
      indeterminate,
      progressDuration,
      indeterminateDuration,
      onCompletion, 
      //startAnimation,
      //stopAnimation
   } ;

   const [timer] = useState(new Animated.Value(0));
   const [bar] = useState(new Animated.Value(0));
  const [indeterminate] = useState(new Animated.Value(0));
  const [indeterminateDuration] = useState(new Animated.Value(0));
  const [progressDuration] = useState(new Animated.Value(0));
  const [onCompletion] = useState(new Animated.Value(0));


   const indeterminateAnimation = Animated.timing(timer, {
     duration: 10,
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
     if (indeterminate || typeof Progress === 'number'){
       startAnimation();
     } else {
       stopAnimation();
     }
   }, [indeterminate, Progress, startAnimation, stopAnimation]);

   const startAnimation = useCallback(()=>{
     if (indeterminate){
       timer.setValue(0);
       Animated.loop(indeterminateAnimation).start();
     }else{
      Animated.timing(bar, {
         duration: Animated ? progressDuration : 0,
         toValue: Progress
       }). start(()=>{
         onCompletion();
       });
     }
   },
   [
     Progress,
     Animated,
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

   //const styleAnimation = () => {
     //return indeterminate ? {
       //transform: [
         //{
           //translateX: timer.interpolate({
             //inputRange: [0, 0.5, 1],
             //outputRange: [-0.6 * 320, -0.5 * //0.8 * 320, 0.7 *320]
           //})
         //},
         //{
           //scaleX: timer.interpolate({
             //inputRange: [0, 0.5, 1]
//,
//outputRange:[0.0001, 0.8, 0.0001]           })
  //       }
    //   ]
     //}
     //: {
       //bar: bar.interpolate({
         //inputRange: [0, 100],
         //outputRange: ['0%', '100%']
      // })
     //};
   //};


    return (
    <ProgressContainer>
        <Filler><Title>Team's Progress</Title><Progressbar> {`${Progress}%`}
        </Progressbar></Filler></ProgressContainer>
  )
}



export default ProgressBar