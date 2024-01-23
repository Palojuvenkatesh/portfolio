import './portfolio.component.css';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.jpg';
import portfolio6 from '../../assets/portfolio6.jpg';
import portfolio7 from '../../assets/portfolio7.jpg';
import portfolio8 from '../../assets/portfolio8.jpg';
import portfolio9 from '../../assets/portfolio9.jpg';

export function Portfoliocomponent() {
    return (
        <div>
            <div>
                <h1 className='portfolio-heading'>Portfolio</h1>
                <p className='portfolio-para'>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                    Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className='row'>
                <div className='col-4'>
                        <img className='portfolio1-icon' src={portfolio1}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio2-icon' src={portfolio2}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio3-icon' src={portfolio3}></img>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                        <img className='portfolio4-icon' src={portfolio4}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio5-icon' src={portfolio5}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio6-icon' src={portfolio6}></img>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                        <img className='portfolio7-icon' src={portfolio7}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio8-icon' src={portfolio8}></img>
                </div>
                <div className='col-4'>
                        <img className='portfolio9-icon' src={portfolio9}></img>
                </div>
            </div>

        </div>
    )
}