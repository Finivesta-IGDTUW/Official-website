import React from "react";

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <button id="back-button" className="action-button" onClick={() => (window.location.href = "landing_page.html")}>
        Back
      </button>
      <button id="restart-button" className="action-button" onClick={() => window.location.reload()}>
        Restart
      </button>
    </div>
  );
};

export default ActionButtons;