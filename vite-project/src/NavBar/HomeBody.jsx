import HomeBG from '../assets/header bg.png'
import HomeBG2 from '../assets/SDPT Logo 2.png'
function HomeBody() {
    return (
        <div className="home-body-container">
           <h2>What is SDPT Academy?</h2>
           <hr/>
           <div className='description-container'>
            <div><img src={HomeBG2} alt="" /> </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam, reiciendis possimus eligendi neque deserunt tenetur fugiat praesentium accusantium dolor cum molestias ex quaerat sapiente velit officia labore itaque. Magnam!</p>
           </div>
            <hr/>
        </div>
    );
}

export default HomeBody;
