import React, { Component , useState, useEffect} from 'react';
import styled from 'styled-components'



//allow user to navigate to this page and see the full list of teams logs 
//allow user to update,edit and delete log 
//allow user to click into log ??

class Logs extends Component {
    render() {
        const [completed, setCompleted] = useState(0);

        useEffect(()=>{
            setInterval(()=> setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
        }, []);
        return (
            <>
            <Navbar />
            <ProgressBar completed={completed}/>
            <h1>Team Logs</h1>
            <div>
                <h2>form goes here</h2>
                {/* to see all, create, edit, & delete. */}
            </div>
            </>
        );
    }
}

export default Logs;