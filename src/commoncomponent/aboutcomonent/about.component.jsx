import './about.component.css';

import profile from '../../assets/profile-img.jpg';
import { ChevronRight } from 'react-bootstrap-icons';
export function Aboutcompponent() {
    return (
        <div>
            <h1 className='heading-about'>About</h1>
            <p className='pharagraph-about'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

            <div className='row'>
                <div className='col-5'>
                    <img className='profile-img' src={profile}></img>
                </div>
                <div className='col-7'>
                    <h1 className='sub-heading'>UI/UX Desginer & Web Developer.</h1>
                    <p className='sub-phargraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <div className='row'>
                        <div className='col-1'>
                            <ChevronRight className='arow-icon'></ChevronRight>

                        </div>

                        <div className='col-5'>
                            <h4 className='heading-birthday'>Birthday :</h4>
                            <p className='dateformate1'> 1 May 1995</p>
                        </div>

                        <div >
                            <ChevronRight className='arow-icon1'></ChevronRight>
                            <h4 className='age-heading'>Age:</h4>
                            <p className='age1'> 30</p>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-1'>
                            <ChevronRight className='arow-icon'></ChevronRight>

                        </div>

                        <div className='col-5'>
                            <h4 className='heading-birthday'>Website :</h4>
                            <p className='dateformate1'> www.example.com</p>
                        </div>

                        <div >
                            <ChevronRight className='arow-icon1'></ChevronRight>
                            <h4 className='age-heading'>Degree:</h4>
                            <p className='degreename'>Master</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-1'>
                            <ChevronRight className='arow-icon'></ChevronRight>

                        </div>

                        <div className='col-5'>
                            <h4 className='heading-birthday'>Phone:</h4>
                            <p className='dateformate1'> +123 456 7890</p>
                        </div>

                        <div >
                            <ChevronRight className='arow-icon1'></ChevronRight>
                            <h4 className='age-heading'>PhEmailone:</h4>
                            <p className='emailexample'>email@example.com</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-1'>
                            <ChevronRight className='arow-icon'></ChevronRight>

                        </div>

                        <div className='col-5'>
                            <h4 className='heading-birthday'>City:</h4>
                            <p className='dateformate1'> New York, USA</p>
                        </div>

                        <div >
                            <ChevronRight className='arow-icon1'></ChevronRight>
                            <h4 className='age-heading'>Freelancer:</h4>
                            <p className='emailexample'>Available</p>
                        </div>
                    </div>

                    <p className='about-pharagraph'>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                         Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
                         Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur 
                         qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui 
                         repellendus omnis culpa magni laudantium dolores.
                    </p>


                </div>


            </div>
        </div>
    )
}