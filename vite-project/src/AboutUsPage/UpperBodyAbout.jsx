import picture from '../assets/StiBist.png'
import styles from './styles/UpperBodyAbout.module.css'

function UpperBodyAbout(){
    return(
       <div className={styles.mainBody}>
            <div className="Picture-left">
                <img className={styles.image} src={picture} alt="Left-Image-PlaceHolder" />
            </div>
            <div className={styles.text}>
                        
                <div>
                Passionate <br/>
                Individuals that aims <br/>
                to teach Filipinos <br/>
                Programming in our own <br/>
                 language and Glorify God.
                </div>
               
 
            </div>
       </div> 
       
    )
}

export default UpperBodyAbout