import { BarChart, Binoculars, Briefcase, BrightnessHigh, Calendar4Week, CardChecklist } from 'react-bootstrap-icons';
import './service.component.css';

export function Servicecomponent() {
    return (
        <div>
            <h1 className='services-heading'>Services</h1>
            <p className='services-paragraph'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div>
                <div className='row'>
                    <div className='col-4'>
                            <Briefcase className='briefcaseicon'></Briefcase>
                            <h4 className='heading1'>Lorem Ipsum</h4>
                            <p className='content1'>Voluptatum deleniti atque
                                corrupti quos dolores et quas molestias excepturi 
                                sint occaecati cupiditate non provident</p>
                    </div>
                    <div className='col-4'>
                        <CardChecklist className='listicon'></CardChecklist>
                        <h4 className='heading2'>Dolor Sitema</h4>
                        <p className='content2'>Minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    <div className='col-4'>
                        <BarChart className='baricon'></BarChart>
                        <h4 className='heading3'>Sed ut perspiciatis</h4>
                        <p className='content3'>Duis aute irure dolor in reprehenderit in voluptate
                             velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
     

                <div className='row'>
                    <div className='col-4'>
                            <Binoculars className='briefcaseicon'></Binoculars>
                            
                            <h4 className='heading1'>Magni Dolores</h4>
                            <p className='content1'>Excepteur sint occaecat cupidatat
                             non proident, sunt in culpa qui officia deserunt mollit anim id
                              est laborum</p>
                    </div>
                    <div className='col-4'>
                    <BrightnessHigh className='baricon'></BrightnessHigh>
                        <h4 className='heading2'>Nemo Enim</h4>
                        <p className='content2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                        blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                    <div className='col-4'>
                      
                        <Calendar4Week className='baricon'></Calendar4Week>
                       
                        <h4 className='heading3'>Eiusmod Tempor</h4>
                        <p className='content3'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                </div>

            </div>


        </div>
    )
}


