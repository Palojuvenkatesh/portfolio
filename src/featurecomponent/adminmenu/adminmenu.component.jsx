import './adminmenu.component.css';
import profile from '../../assets/profile-img.jpg';
import { Facebook, FileEarmark, HddStackFill, House, Instagram, Linkedin, Person, Skype, Telephone, Twitter } from 'react-bootstrap-icons';

export function Adminmenu(){
return(
    <div className='main-container'>
        <div>
            <div >
                <img className='profile' src={profile}></img>
            </div>
        <h1 className='h-name'> Paloju venkatesh</h1>
        <div>
            <Twitter className='t-icon' ></Twitter>
            <Facebook className='f-icon'></Facebook>
            <Instagram className='i-icon'></Instagram>
            <Skype className='s-icon'></Skype>
            <Linkedin className='l-icon'></Linkedin>
        </div>
        <div>
            <div>
                <House className='home-icon'> home</House>
                
            </div>
            <a href='/Admin-Home'>
            <h4 className='home'>Home</h4>
            </a>
            
            
           

            <div>
                <Person className='person-icon'></Person>
            </div>
            <a href='/Admin-About'>
            <h4 className='about'>About</h4>
            </a>
            

            <div>
                <FileEarmark className='person-icon'></FileEarmark>
            </div>
            <a href='/Admin-resume'>
            <h4 className='about'>Resume</h4>
            </a>
           

            <div>
            <FileEarmark className='person-icon'></FileEarmark>
            </div>
            <a href='/Admin-portfolio'>
            <h4 className='about'>Portfolio</h4>
            </a>
           

            <div>
            <HddStackFill className='person-icon'></HddStackFill>
            </div>
            <a href='/Admin-service'>
            <h4 className='about'>Services</h4>
            </a>
            

            <div>
            <Telephone className='person-icon'></Telephone>
            </div>
            <a href='/Admin-contact'>
            <h4 className='about'>contact</h4>
            </a>
            
            
        </div>


    </div>
    </div>
    
)
}