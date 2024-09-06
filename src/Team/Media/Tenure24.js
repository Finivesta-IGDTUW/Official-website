import '../Media/Tenure24.css';

import Aiman from './Tenure24/Pres_Aiman.png';
import Sanskriti from './Tenure24/Pres_Sanskriti.png';
import DishaTreas from './Tenure24/Treas_Disha.png';
import Kashish from './Tenure24/Treas_Kashish.png';
import Aanvi from './Tenure24/Cont_Aanvi.png';
import Vedika from './Tenure24/Cont_Vedika.png';
import Abhaya from './Tenure24/Crea_Abhaya.png';
import Sanya from './Tenure24/Crea_Sanya.png';
import Jasleen from './Tenure24/FC_Jasleen.png';
import Mishthi from './Tenure24/FC_Mishthi.png';
import Anshika from './Tenure24/FnR_Anshika.png';
import Sneha from './Tenure24/FnR_Sneha.png';
import Harshita from './Tenure24/HR_Harshita.png';
import Manya from './Tenure24/HR_Manya.png';
import Khushi from './Tenure24/PR_Khushi.png';
import Saniya from './Tenure24/PR_Saniya.png';
import DishaTech from './Tenure24/Tech_Disha.png';
import Urvashi from './Tenure24/Tech_Urvashi.png';

const Team24 = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var photos = document.querySelectorAll('.photo');
    
        photos.forEach(function(photo) {
            photo.addEventListener('touchstart', function() {
                photo.classList.add('touch');
            });
    
            photo.addEventListener('touchend', function() {
                photo.classList.remove('touch');
            });
        });
    });

    return (
      
        <div>

            <section className="cores">
                <h2>Heads</h2>
                <div className="cores-photo">
                    
                    <div className="photo">
                    <img src={Aiman} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/aiman-zakir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/_aimann.z_/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Sanskriti} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/sanskritividushi/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/sanskritividushi/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                <div className='cores-photo'>

                    <div className="photo">
                    <img src={DishaTreas} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/dishabajaj12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/disha_bajaj12/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Kashish} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/kashish-narwal-a45bab25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/kashish_narwal7/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                </div>
                <h2>Cores</h2>
                <div className="cores-photo">
                
                    <div className="photo">
                    <img src={Jasleen} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/jasleen-kaur-a6b775280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Mishthi} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/mishthi-kainthola-206854288/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/mishthi.kainthola/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Aanvi} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/aanvig" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/aanvig_/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Vedika} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/vedika-gupta22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/vedi_idk/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Abhaya} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/abhayatrivedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/abbhayaaa/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Sanya} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/sanya-saxena-4b42b1239/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/sanyasaxena_14/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Anshika} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/anshika-patra-b67a52291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/p._.anshika/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Sneha} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/snehaaroychowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/snehaaaa.o_o/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Harshita} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/harshita-soni-414005286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/harshita_soni.15/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Manya} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/manya-kaur-sachdeva-b74069288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Khushi} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/khushi-khorwal-4a956a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/khushikhorwal24/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Saniya} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/saniya-arora-322b88288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/saniyaa.aroraa/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={DishaTech} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/disha-sethi-068107220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/disha.sethi.5680/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Urvashi} alt="Avatar" className="image" />
                    <div className="overlay">
                        <a href="https://www.linkedin.com/in/urvashiyadav2004" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                    </div>
                    </div>
                
                </div>
            </section>

        </div> 
        
    );
};

export default Team24;