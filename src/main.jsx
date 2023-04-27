import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ============== bootstarp css 
import 'bootstrap/dist/css/bootstrap.min.css';
// ============ broswerRooter as router 
import { BrowserRouter as Router  } from 'react-router-dom'
// ============== remix icon 
import 'remixicon/fonts/remixicon.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 {/* ================== broswer router  */}
 <Router>

 <App />
 
 </Router>
 {/* ================== broswer router  end  */}
  </React.StrictMode>
)
