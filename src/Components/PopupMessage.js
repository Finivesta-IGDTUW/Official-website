import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PopupMessage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("popupShown");
    
    if (!popupShown) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Set the flag when closing
    sessionStorage.setItem("popupShown", "true");
  };

  const handleNewsletterClick = () => {
    setShowPopup(false);
    // Set the flag before navigation
    sessionStorage.setItem("popupShown", "true");
    navigate("/hackathon");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button
          onClick={handleClose}
          className="popup-close"
        >
          ✕
        </button>

        <h2>Payload'26</h2>
        <p>Finivesta's FinTech Hackathon!<br></br>Click on the banner to know more details</p>
        <br/>
        <button
          onClick={handleNewsletterClick}
          className="button"
        >
          Apply Now!
        </button>
      </div>
    </div>
  );
}