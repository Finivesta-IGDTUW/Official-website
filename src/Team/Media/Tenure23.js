import '../Media/Tenure23.css';

import Khushi from './Tenure23/Pres_Khushi.png';
import Ritika from './Tenure23/CP_Ritika.png';
import Tejasvi from './Tenure23/Pres_Tejasvi.png';
import Akshika from './Tenure23/VP_Akshika.png';
import Manasi from './Tenure23/VP_Manasi.png';
import Anshika from './Tenure23/Content_Anshika.png';
import Kashish from './Tenure23/Content_Kashish.png';
import Anandita from './Tenure23/FR_Anandita.png';
import Sanskriti from './Tenure23/FR_Sanskriti.png';
import Aiman from './Tenure23/HR_Aiman.png';
import Urja from './Tenure23/HR_Urja.png';
import Gunjan from './Tenure23/Creative_Gunjan.png';
import Mansi from './Tenure23/Creative_Mansi.png';
import Aadya from './Tenure23/PR_Aadya.png';
import Disha from './Tenure23/PR_Disha.png';
import Gargi from './Tenure23/Treas_Gargi.png';
import Meera from './Tenure23/Treas_Meera.png';
import Saachi from './Tenure23/Tech_Saachi.png';

const Team23 = () => {
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
                    
                    <div className="photo">
                    <img src={Ritika} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/ritikasinghgautam/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/ikigairey?igsh=ODA1NTc5OTg5Nw==" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Khushi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/khushi-sharma-17185021b/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/khushisharma_1309/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Tejasvi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/tjv-sb/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/tjv_sb/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Akshika} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/akshika-dhankhar-8447b2223/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https:// www.instagram.com/akshika_dhankhar/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Manasi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/manasi-duggal" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/manasiduggal/?hl=en" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Gargi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/gargi-goel9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/goelgargi_9?igsh=ODA1NTc5OTg5Nw==" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Meera} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/meera-parida-82b62a223" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/meera.parida1612/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                </div>
                <h2>Heads</h2>
                <div className="cores-photo">

                    <div className="photo">
                    <img src={Anshika} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/anshika-aggarwal-704847249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/agg.anshika007/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Kashish} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/kashish-narwal-a45bab25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/kashish_narwal7?igsh=MTl6czQ3dnk5aDVydg==" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Anandita} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/anandita-mayer-9b5941261/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/_anaditamayer/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Sanskriti} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/sanskritividushi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/sanskritividushi?igsh=MWNvY2F3OWJ2ZG51aA==" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Gunjan} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/gunjanvaishnavijangra" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/gunjanvjangra/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Mansi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/manasi-bhagat-498646251/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/manasi_0508/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Aiman} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/aiman-zakir-358a2b257/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/_aimann.z_/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Urja} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/urja-kohli04" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href=" https://www.instagram.com/urja_kohli?igsh=MXI1dzRwYmhzeHZqNg%3D%3D&utm_source=qr" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                    
                    <div className="photo">
                    <img src={Aadya} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/aadya-kumar-a00718248/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/aadya_kumar/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Disha} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/dishabajaj12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/disha_bajaj12?igsh=dWRzc25na3VhOGNp" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>

                    <div className="photo">
                    <img src={Saachi} alt="Avatar" className="image" />
                    <div className="overlay23">
                        <a href="https://www.linkedin.com/in/saachi-bansal/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"/>
                        </a>
                        <a href="https://www.instagram.com/saachi.bansal/" className="icons" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"/>
                        </a>
                    </div>
                    </div>
                
                </div>
            </section>

        </div> 
        
    );
};

export default Team23;