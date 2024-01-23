import { Aboutcompponent } from "../../commoncomponent/aboutcomonent/about.component";
import { Contactcomponent } from "../../commoncomponent/contactcomponent/contact.component";
import { Homecomponent } from "../../commoncomponent/homecomponent/home.component";
import { Portfoliocomponent } from "../../commoncomponent/portfoliocomponent/portfolio.component";
import { ResumeComponent } from "../../commoncomponent/resumecomponent/resume.component";
import { Servicecomponent } from "../../commoncomponent/servicecomponent/service.component";
import { Adminmenu } from "../adminmenu/adminmenu.component";

export function Adminlayout(){

    return(
        <div >
            <div className="row">
                <div className="col-3">
                    <Adminmenu></Adminmenu>
                </div>

                <div className="col-8">
                    <Homecomponent></Homecomponent>
                    <Aboutcompponent></Aboutcompponent>
                    <ResumeComponent></ResumeComponent>
                    <Portfoliocomponent></Portfoliocomponent>
                    <Servicecomponent></Servicecomponent>
                    <Contactcomponent></Contactcomponent>
                   
                    
                   
                </div>
            </div>
        </div>
    )
}