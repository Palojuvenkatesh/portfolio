import { Alt, Envelope, GeoAltFill, Phone } from 'react-bootstrap-icons';
import './contact.component.css';
import { saveuser } from '../../services/user.service';
import { useRef } from 'react';
import map from '../../assets/map.png';

export function Contactcomponent(){
    
    
    //create a Ref Variable.
    const yournameRef = useRef();
    const youremailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();



    function savemessagedata(){
        let data={
            id:0,
            Yourname: yournameRef.current.value,
            Youremail:youremailRef.current.value,
            Subject:subjectRef.current.value,
            Message:messageRef.current.value

        };
        saveuser(data).then(()=>{
            alert("save message");
        }).catch(()=>{
            alert("not saved");
        })
    }
    
    
    return(
        <div >
            <h1 className="heading">
                Contact
            </h1>
            <diV>
                <p className='pharagram'>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
                fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi 
                quidem hic quas.
                </p>
            </diV>
            <div className='row'>
                <div className='card-1 '>
                <GeoAltFill className='location'></GeoAltFill>
                <h3 className='heading-location'>Location:</h3>
                <p className='loc-pharagraph'>A108 Adam Street, New York, NY 535022</p>

                <Envelope className='emailicon'></Envelope>
                <h3 className='heading-email'>Email:</h3>
                <p className='emailformat'>info@example.com</p>

                <Phone className='phoneicon'></Phone>
                <h3 className='heading-call'>Call:</h3>
                <p className='numberformat'>info@example.com</p>

                <div>
                    <img className='map' src={map}></img>
                </div>

                </div>
                <div className='card-2'>
                    
                    <div className='row'>
                        <div className='col-4'>
                            <p className='yourname'>Your Name</p>
                            <input type='text' className='form-control name' id="Yourname" ref={yournameRef}></input>
                        </div>
                        <div className='col-6'>
                        <p className='youremail'>Your Email</p>
                            <input type='text' className='form-control email' id="YourEmail" ref={youremailRef}></input>
                        </div>
                    </div>

                    <div>
                        <p className='subjectheading'>Subject</p>
                        <input type='text' className='form-control subject' id="Subject" ref={subjectRef}></input>

                        <p className='heading-message'>Message</p>
                        <textarea className='form-control textarea ' id="Message" ref={messageRef}></textarea>
                    </div>
                    <input type='button' value="Send message" className='button1' onClick={(()=>{savemessagedata()})} ></input>
                   
                </div>
            </div>
            
        </div>
    )
}