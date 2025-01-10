import '../Media/Tenure24.css';

import Aiman from './Tenure24/Pres_Aiman.png';
import AimanOL from './Tenure24/Pres_AimanOL.png';
import Sanskriti from './Tenure24/Pres_Sanskriti.png';
import SanskritiOL from './Tenure24/Pres_SanskritiOL.png';
import DishaTreas from './Tenure24/Treas_Disha.png';
import DishaTreasOL from './Tenure24/Treas_DishaOL.png';
import Kashish from './Tenure24/Treas_Kashish.png';
import KashishOL from './Tenure24/Treas_KashishOL.png';
import Aanvi from './Tenure24/Cont_Aanvi.png';
import AanviOL from './Tenure24/Cont_AanviOL.png';
import Vedika from './Tenure24/Cont_Vedika.png';
import VedikaOL from './Tenure24/Cont_VedikaOL.png';
import Abhaya from './Tenure24/Crea_Abhaya.png';
import AbhayaOL from './Tenure24/Crea_AbhayaOL.png';
import Sanya from './Tenure24/Crea_Sanya.png';
import SanyaOL from './Tenure24/Crea_SanyaOL.png';
import Jasleen from './Tenure24/FC_Jasleen.png';
import JasleenOL from './Tenure24/FC_JasleenOL.png';
import Mishthi from './Tenure24/FC_Mishthi.png';
import MishthiOL from './Tenure24/FC_MishthiOL.png';
import Anshika from './Tenure24/FnR_Anshika.png';
import AnshikaOL from './Tenure24/FnR_AnshikaOL.png';
import Sneha from './Tenure24/FnR_Sneha.png';
import SnehaOL from './Tenure24/FnR_SnehaOL.png';
import Harshita from './Tenure24/HR_Harshita.png';
import HarshitaOL from './Tenure24/HR_HarshitaOL.png';
import Manya from './Tenure24/HR_Manya.png';
import ManyaOL from './Tenure24/HR_ManyaOL.png';
import Khushi from './Tenure24/PR_Khushi.png';
import KhushiOL from './Tenure24/PR_KhushiOL.png';
import Saniya from './Tenure24/PR_Saniya.png';
import SaniyaOL from './Tenure24/PR_SaniyaOL.png';
import DishaTech from './Tenure24/Tech_Disha.png';
import DishaTechOL from './Tenure24/Tech_DishaOL.png';
import Urvashi from './Tenure24/Tech_Urvashi.png';
import UrvashiOL from './Tenure24/Tech_UrvashiOL.png';

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
                <h2>Leads</h2>
                <div className="cores-photo">
                    
                    <div className="team24-photo">
                    <img src={Aiman} alt="Avatar" className="team24-image" />
                    <img src={AimanOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/aiman-zakir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/_aimann.z_/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="team24-photo">
                    <img src={Sanskriti} alt="Avatar" className="team24-image" />
                    <img src={SanskritiOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/sanskritividushi/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/sanskritividushi/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                <div className='cores-photo'>

                    <div className="team24-photo">
                    <img src={DishaTreas} alt="Avatar" className="team24-image"/>
                    <img src={DishaTreasOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/dishabajaj12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/disha_bajaj12/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Kashish} alt="Avatar" className="team24-image"/>
                    <img src={KashishOL} alt="Avatar Back" className="team24-image-anim"/>
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/kashish-narwal-a45bab25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/kashish_narwal7/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                </div>
                <h2>Heads</h2>
                <div className="cores-photo">
                
                    <div className="team24-photo">
                    <img src={Jasleen} alt="Avatar" className="team24-image" />
                    <img src={JasleenOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/jasleen-kaur-a6b775280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="team24-photo">
                    <img src={Mishthi} alt="Avatar" className="team24-image" />
                    <img src={MishthiOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/mishthi-kainthola-206854288/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/mishthi.kainthola/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Aanvi} alt="Avatar" className="team24-image" />
                    <img src={AanviOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/aanvig" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/aanvig_/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="team24-photo">
                    <img src={Vedika} alt="Avatar" className="team24-image" />
                    <img src={VedikaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/vedika-gupta22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/vedi_idk/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Abhaya} alt="Avatar" className="team24-image" />
                    <img src={AbhayaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/abhayatrivedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/abbhayaaa/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="team24-photo">
                    <img src={Sanya} alt="Avatar" className="team24-image" />
                    <img src={SanyaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/sanya-saxena-4b42b1239/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/sanyasaxena_14/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Anshika} alt="Avatar" className="team24-image" />
                    <img src={AnshikaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/anshika-patra-b67a52291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/p._.anshika/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Sneha} alt="Avatar" className="team24-image" />
                    <img src={SnehaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/snehaaroychowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/snehaaaa.o_o/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Harshita} alt="Avatar" className="team24-image" />
                    <img src={HarshitaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/harshita-soni-414005286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/harshita_soni.15/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Manya} alt="Avatar" className="team24-image" />
                    <img src={ManyaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/manya-kaur-sachdeva-b74069288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="team24-photo">
                    <img src={Khushi} alt="Avatar" className="team24-image" />
                    <img src={KhushiOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/khushi-khorwal-4a956a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/khushikhorwal24/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Saniya} alt="Avatar" className="team24-image" />
                    <img src={SaniyaOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/saniya-arora-322b88288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/saniyaa.aroraa/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={DishaTech} alt="Avatar" className="team24-image" />
                    <img src={DishaTechOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/disha-sethi-068107220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/disha.sethi.5680/" className="team24-icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="team24-photo">
                    <img src={Urvashi} alt="Avatar" className="team24-image" />
                    <img src={UrvashiOL} alt="Avatar Back" className="team24-image-anim" />
                    <div className="overlay24">
                        <a href="https://www.linkedin.com/in/urvashiyadav2004" className="team24-icons" target="_blank" rel="noreferrer">
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