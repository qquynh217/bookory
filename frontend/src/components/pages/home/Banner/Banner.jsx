import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import banner from 'resources/images/banner.jpg'

function Banner() {
    return (
        <div className="home-banner">
            <img src={banner} alt="banner" className='banner-image' />
            <div className="banner-content">
                <p className="small-title">A sale for the pages</p>
                <h1 className="title">50% off hundreds of books</h1>
                <p className="small-title-red">Online and in stores only</p>
                <div>
                    <Link to='/shop' className="app-button white banner-button">
                        <span>Shop Now</span>
                        <IoChevronForward stroke='#F65D4E' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;