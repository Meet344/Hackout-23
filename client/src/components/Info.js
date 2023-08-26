import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">

        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title=""
          description=""
          icon={faTruckMedical}
        />

        <InformationCard
          title=""
          description="."
          icon={faHeartPulse}
        />

        <InformationCard
          title=""
          description=""
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
