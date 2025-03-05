import picture from '../assets/StiBist.png'

function UpperBodyAbout(){
    return(
       <div className="main-box">
            <div className="Picture-left">
                <img src={picture} alt="Left-Image-PlaceHolder" />
            </div>
            <div className="Descriptin-right">
                <p>
                Passionate Individuals that aims to teach Filipinos 
                Programming in our own language and Glorify God.
                </p>
            </div>
       </div> 
       
    )
}

export default UpperBodyAbout