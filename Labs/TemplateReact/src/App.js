import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFunction from './components/widgets/ButtonFunction.jsx';
import ButtonCmp from './components/widgets/ButtonCmp';
import ButtonCmpClass from './components/widgets/ButtonClass.jsx';
import DemoDetailsPage from './components/pages/DemoDetailsPage.jsx'
import MasterPage from './components/pages/MasterPage';
import SideNav from './components/containers/SideNav';
import TopNav from './components/containers/TopNav';


/*style={{padding:"2px, 10px", background: "#"fff}}*/


function App() {
  return (
    <div>
     
      <MasterPage/>

    </div>
  );
}

export default App;
