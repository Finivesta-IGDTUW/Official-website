import '../Media/Tenure24.css';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Team member data
const teamMembers = [
  // Leads
  {
    section: "Leads",
    members: [
      {
        name: "Aiman Zakir",
        img: require('./Tenure24/Pres_Aiman.png'),
        imgOL: require('./Tenure24/Pres_AimanOL.png'),
        linkedin: "https://www.linkedin.com/in/aiman-zakir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/_aimann.z_/"
      },
      {
        name: "Sanskriti Vidushi",
        img: require('./Tenure24/Pres_Sanskriti.png'),
        imgOL: require('./Tenure24/Pres_SanskritiOL.png'),
        linkedin: "https://www.linkedin.com/in/sanskritividushi/",
        instagram: "https://www.instagram.com/sanskritividushi/"
      }
    ]
  },
  // Treasurers
  {
    section: "",
    members: [
      {
        name: "Disha Bajaj",
        img: require('./Tenure24/Treas_Disha.png'),
        imgOL: require('./Tenure24/Treas_DishaOL.png'),
        linkedin: "https://www.linkedin.com/in/dishabajaj12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/disha_bajaj12/"
      },
      {
        name: "Kashish Narwal",
        img: require('./Tenure24/Treas_Kashish.png'),
        imgOL: require('./Tenure24/Treas_KashishOL.png'),
        linkedin: "https://www.linkedin.com/in/kashish-narwal-a45bab25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/kashish_narwal7/"
      }
    ]
  },
  // Heads
  {
    section: "Heads",
    members: [
      {
        name: "Jasleen Kaur",
        img: require('./Tenure24/FC_Jasleen.png'),
        imgOL: require('./Tenure24/FC_JasleenOL.png'),
        linkedin: "https://www.linkedin.com/in/jasleen-kaur-a6b775280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Mishthi Kainthola",
        img: require('./Tenure24/FC_Mishthi.png'),
        imgOL: require('./Tenure24/FC_MishthiOL.png'),
        linkedin: "https://www.linkedin.com/in/mishthi-kainthola-206854288/",
        instagram: "https://www.instagram.com/mishthi.kainthola/"
      },
      {
        name: "Aanvi Gupta",
        img: require('./Tenure24/Cont_Aanvi.png'),
        imgOL: require('./Tenure24/Cont_AanviOL.png'),
        linkedin: "https://www.linkedin.com/in/aanvig",
        instagram: "https://www.instagram.com/aanvig_/"
      },
      {
        name: "Vedika Gupta",
        img: require('./Tenure24/Cont_Vedika.png'),
        imgOL: require('./Tenure24/Cont_VedikaOL.png'),
        linkedin: "https://www.linkedin.com/in/vedika-gupta22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/vedi_idk/"
      },
      {
        name: "Abhaya Trivedi",
        img: require('./Tenure24/Crea_Abhaya.png'),
        imgOL: require('./Tenure24/Crea_AbhayaOL.png'),
        linkedin: "https://www.linkedin.com/in/abhayatrivedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/abbhayaaa/"
      },
      {
        name: "Sanya Saxena",
        img: require('./Tenure24/Crea_Sanya.png'),
        imgOL: require('./Tenure24/Crea_SanyaOL.png'),
        linkedin: "https://www.linkedin.com/in/sanya-saxena-4b42b1239/",
        instagram: "https://www.instagram.com/sanyasaxena_14/"
      },
      {
        name: "Anshika Patra",
        img: require('./Tenure24/FnR_Anshika.png'),
        imgOL: require('./Tenure24/FnR_AnshikaOL.png'),
        linkedin: "https://www.linkedin.com/in/anshika-patra-b67a52291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/p._.anshika/"
      },
      {
        name: "Sneha Roychowdhury",
        img: require('./Tenure24/FnR_Sneha.png'),
        imgOL: require('./Tenure24/FnR_SnehaOL.png'),
        linkedin: "https://www.linkedin.com/in/snehaaroychowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/snehaaaa.o_o/"
      },
      {
        name: "Harshita Soni",
        img: require('./Tenure24/HR_Harshita.png'),
        imgOL: require('./Tenure24/HR_HarshitaOL.png'),
        linkedin: "https://www.linkedin.com/in/harshita-soni-414005286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/harshita_soni.15/"
      },
      {
        name: "Manya Kaur Sachdeva",
        img: require('./Tenure24/HR_Manya.png'),
        imgOL: require('./Tenure24/HR_ManyaOL.png'),
        linkedin: "https://www.linkedin.com/in/manya-kaur-sachdeva-b74069288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      },
      {
        name: "Khushi Khorwal",
        img: require('./Tenure24/PR_Khushi.png'),
        imgOL: require('./Tenure24/PR_KhushiOL.png'),
        linkedin: "https://www.linkedin.com/in/khushi-khorwal-4a956a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/khushikhorwal24/"
      },
      {
        name: "Saniya Arora",
        img: require('./Tenure24/PR_Saniya.png'),
        imgOL: require('./Tenure24/PR_SaniyaOL.png'),
        linkedin: "https://www.linkedin.com/in/saniya-arora-322b88288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/saniyaa.aroraa/"
      },
      {
        name: "Disha Sethi",
        img: require('./Tenure24/Tech_Disha.png'),
        imgOL: require('./Tenure24/Tech_DishaOL.png'),
        linkedin: "https://www.linkedin.com/in/disha-sethi-068107220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr",
        instagram: "https://www.instagram.com/disha.sethi.5680/"
      },
      {
        name: "Urvashi Yadav",
        img: require('./Tenure24/Tech_Urvashi.png'),
        imgOL: require('./Tenure24/Tech_UrvashiOL.png'),
        linkedin: "https://www.linkedin.com/in/urvashiyadav2004"
      }
    ]
  }
];

const Team24 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <div>
      <section className="cores">
        {teamMembers.map((section, idx) => (
          <div key={idx}>
            <h2 data-aos="fade-up">{section.section}</h2>
            <div className="cores-photo">
              {section.members.map((member, i) => (
                <div className="team24-photo" data-aos="fade-up" key={i}>
                  <img src={member.img} loading="lazy" alt={member.name} className="team24-image" />
                  <img src={member.imgOL} loading="lazy" alt={member.name + " Back"} className="team24-image-anim" />
                  <div className="overlay24">
                    {member.linkedin && (
                      <a href={member.linkedin} className="team24-icons" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} className="team24-icons" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team24;