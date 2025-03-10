import { useState, useEffect } from "react";
import styles from "../styles/popup.module.css";

export interface PopupProps {
  header: string;
  content: string;
  duration?: number;
}

const PopupTimer: React.FC<{ duration: number; onComplete: () => void }> = ({
  duration,
  onComplete,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onComplete]);

  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
      s
    ).padStart(2, "0")}`;
  };

  return <div className={styles.popupTimer}>{formatTime(timeRemaining)}</div>;
};

const SpecialOfferPopup: React.FC<PopupProps> = ({ header, content, duration = 60 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > document.documentElement.scrollHeight * 0.17) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    setScrolled(true);
  };

  const onAccepted = () => {
    alert("Mission Accepted");
    setTimeout(() => {
      setIsOpen(false);
      setScrolled(true);
    }, 500)
  }

  return (
    <div className={`${styles.popupOverlay} ${isOpen ? styles.popupOverlayActive : ""}`}>
      {!scrolled ? (
        <div
          className={`${styles.popupContainer} 
          ${isOpen ? styles.popupContainerOpen : styles.popupContainerClose}`}
        >
          <div className={styles.popupControlPanel}>
            {["green", "red", "yellow"].map((color) => (
              <div key={color} className={`${styles.panelLight} ${styles[color]}`}></div>
            ))}
          </div>

          <span className={styles.popupClose} onClick={closePopup}>
            &times;
          </span>

          <div className={styles.popupContent}>
            <h3>{header}</h3>
            <p>{content}</p>
          </div>

          <PopupTimer duration={duration} onComplete={closePopup} />

          <button className="cta-button" onClick={onAccepted}>
            Accept Offer
          </button>
        </div>
      ) : null}
    </div>
  )
};

export default SpecialOfferPopup;