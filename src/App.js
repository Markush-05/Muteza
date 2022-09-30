import React from 'react';
import './App.scss';
import About from './container/About/About';
import Benefit from './container/Benefit/Benefit';
import Footer from './container/Footer/Footer';
import HowWork from './container/How-Work/How-Work';
import Info from './container/Info/Info';
import Navbar from './container/Navbar/Navbar';
import Reviews from './container/Reviews/Reviews';
import ScrollingSlow from './container/Scrolling-slow';
import Welcome from './container/Welcome/Welcome';


function App() {

  const cheangState = (element,detect = false) => {  

  }

  return (
    <>


        {/* <Navbar/> 
        <Welcome cheangState={cheangState} /> 
        <About cheangState={cheangState} />
        <HowWork cheangState={cheangState} />
        <Info cheangState={cheangState} />
        <Benefit cheangState={cheangState} />  
        <Reviews cheangState={cheangState} />
        <Footer cheangState={cheangState} /> */}

      <ScrollingSlow navBar={<Navbar/>}>
        <Welcome /> 
        <About/>
        <HowWork/>
        <Info/>
        <Benefit/>
        <Reviews/>
        <Footer />
     </ScrollingSlow>
     
      </>

  );
}

export default App;
