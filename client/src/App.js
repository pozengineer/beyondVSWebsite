import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
// import MyNavBar from './components/MyNavBar';
// import Nav from './components/Nav';
import Wrapper from './components/Wrapper/wrapper';
import Footer from './components/Footer/footer';
import PushDiv from './/components/Footer/pushDiv';
import Landing from './components/pages/Landing/landing';
import AboutUs from './components/pages/AboutUs/aboutUs';
import Services from './components/pages/Services/services';
import HowItWorks from './components/pages/HowItWorks/howItWorks';
import ExpertServices from './components/pages/ExpertServices/expertServices';
import AdminSupport from './components/pages/AdminSupport/adminSupport';
import ProjectManagement from './components/pages/ProjectManagement/projectManagement';
import AccountFinance from './components/pages/AccountFinance/accountFinance';
import WebDevelopment from './components/pages/WebDevelopment/webDevelopment';
// import Projects from './components/pages/Projects/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Wrapper />
                <div className='appContainer'>
                    <Switch>
                    <Route exact path={["/", "/landing"]}>
                        <Landing />
                    </Route>
                    </Switch>
                    <AboutUs />
                    <Services />
                    <HowItWorks />
                    <ExpertServices />
                    <AdminSupport />
                    <ProjectManagement />
                    <AccountFinance />
                    <WebDevelopment />
                </div>
                <PushDiv/>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
