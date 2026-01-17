import './Home.css';
import OnAMountain from '../models/keenanmountain.jpg'

function Home() {
    return (
        <div className='home-container'>
            <h1>Home Page</h1>
            <div className='image-container'>
                <img className='mountainimg' src={OnAMountain} alt="OnAMountain" />
            </div>
        </div>
    );
}
export default Home;