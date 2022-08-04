import React  from 'react';
//import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import ProgressBar from '../../components/ProgressBar'



//allow user to navigate to this page and see the full list of teams logs 
//allow user to update,edit and delete log 
//allow user to click into log ??

const Logs = () =>  {
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

export default Logs;