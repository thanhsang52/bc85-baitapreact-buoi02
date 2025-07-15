import React, { useState } from "react";
import glassesData from "./glassesData";
import "./Glasses.css";
export const Glasses = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };
  return (
    <div className="app-container">
      <h1 className="app-heading">TRY GLASSES APP ONLINE</h1>
      <div className="model-section">
        <div className="model-image">
          <img
            src="./glassesImage/model.jpg"
            alt="model"
            className="base-model"
          />
          {selectedGlasses && (
            <img
              src={selectedGlasses.url}
              alt="glasses"
              className="glasses-overlay"
            />
          )}
          {selectedGlasses && (
            <div className="glasses-info">
              <h4>{selectedGlasses.name}</h4>
              <p>{selectedGlasses.desc}</p>
            </div>
          )}
        </div>
      </div>

      <div className="glasses-list">
        {glassesData.map((glasses) => (
          <img
            key={glasses.id}
            src={glasses.url}
            alt={glasses.name}
            className="glasses-thumbnail"
            onClick={() => handleSelectGlasses(glasses)}
          />
        ))}
      </div>
    </div>
  );
};
export default Glasses;
