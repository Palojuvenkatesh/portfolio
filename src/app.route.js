import { Route, Routes } from "react-router-dom";
import { Homecomponent } from "./commoncomponent/homecomponent/home.component";
import { Adminmenu } from "./featurecomponent/adminmenu/adminmenu.component";
import { Aboutcompponent } from "./commoncomponent/aboutcomonent/about.component";
import { ResumeComponent } from "./commoncomponent/resumecomponent/resume.component";
import { Portfoliocomponent } from "./commoncomponent/portfoliocomponent/portfolio.component";
import { Servicecomponent } from "./commoncomponent/servicecomponent/service.component";
import { Contactcomponent } from "./commoncomponent/contactcomponent/contact.component";



export function Approute(){
    return(
        <Routes>
            <Route path="/Admin-Home" element={<Navigatehomecomponent></Navigatehomecomponent>}></Route>

            <Route path="/Admin-About" element={<Navigateaboutcomponent></Navigateaboutcomponent>} ></Route>

            <Route path="/Admin-resume" element={<Navigateresumetcomponent></Navigateresumetcomponent>}></Route>

            <Route path="/Admin-portfolio" element={<Navigateprotfoliotcomponent></Navigateprotfoliotcomponent>}></Route>
            
            <Route path="/Admin-service" element={<Navigateservicetcomponent></Navigateservicetcomponent>}></Route>

            <Route path="/Admin-contact" element={<Navigatecontacttcomponent></Navigatecontacttcomponent>}></Route>
        </Routes>
    )
}



function Navigatehomecomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Homecomponent></Homecomponent>
                </div>
            </div>
        </div>
    )
}

function Navigateaboutcomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Aboutcompponent></Aboutcompponent>
                </div>
            </div>
        </div>
    )
}

function Navigateresumetcomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <ResumeComponent></ResumeComponent>
                </div>
            </div>
        </div>
    )
}

function Navigateprotfoliotcomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Portfoliocomponent></Portfoliocomponent>
                </div>
            </div>
        </div>
    )
}


function Navigateservicetcomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Servicecomponent></Servicecomponent>
                </div>
            </div>
        </div>
    )
}

function Navigatecontacttcomponent(){
    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Contactcomponent></Contactcomponent>
                </div>
            </div>
        </div>
    )
}