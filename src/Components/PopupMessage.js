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
    navigate("/finweek");
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

        <h2>FinWeek 2.0</h2>
        <p>Finivesta's presents FinWeek 2.0 with various exciting events!<br></br>Click on the banner to know more details</p>
        <br/>
        <button
          onClick={handleNewsletterClick}
          className="button"
        >
          Check out
        </button>
      </div>
    </div>
  );
}