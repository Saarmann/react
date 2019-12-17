import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFunction from './components/widgets/ButtonFunction.jsx';
import ButtonCmp from './components/widgets/ButtonCmp';
import ButtonCmpClass from './components/widgets/ButtonClass.jsx';
import TopNav from './components/containers/TopNav'
import DemoDetailsPage from './components/pages/DemoDetailsPage.jsx'
import SideNav from './components/containers/SideNav.jsx';

/*style={{padding:"2px, 10px", background: "#"fff}}*/


function App() {
  return (
    <div>
     
      <DemoDetailsPage/>
      <SideNav/>
 

    </div>
  );
}

export default App;
