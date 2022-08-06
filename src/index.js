import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from '../src/pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(

<Router>     
<App />
</Router>,

);
