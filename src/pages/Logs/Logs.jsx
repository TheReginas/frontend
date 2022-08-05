

import LogAdd from './LogAdd';



const Logs = ({addTask, logs}) => {
  // const [completed, setCompleted] = useState(0);
  // useEffect(() => {
    //   setInterval(() => setCompleted(Math.floor(Math.random()* 100) +1 ), 2000)
    
   
  return (
    <>
   
    
    <h1>Team Logs</h1>
    <LogAdd addTask= {addTask} logs={logs}/>

    <div>
      
    </div>
   
    
    </>
    
  )
  }


export default Logs