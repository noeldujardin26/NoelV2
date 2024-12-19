import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PromoBanner.css";

const PromoBanner = () => {
  const initialTime = 2 * 60 * 60; // 2 heures
  const [countdown, setCountdown] = useState(initialTime);
  const navigate = useNavigate();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(timerInterval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="promo-banner">
      <div className="promo-banner__content">
        <div className="promo-banner__scroll">
          🎁 <strong>DESTOCKNOËL</strong> : Offre spéciale limitée ! Il reste{" "}
          <span className="promo-banner__timer">{formatTime(countdown)}</span> avant la fin de la promotion.
          <button
            className="promo-banner__button"
            onClick={() => navigate("/product")}
          >
            Voir les Offres
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
