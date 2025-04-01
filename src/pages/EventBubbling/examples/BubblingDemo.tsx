import React, { useState, useEffect } from "react";
import "./BubblingDemo.css";

const BubblingDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventLogLeft, setEventLogLeft] = useState<string[]>([]);
  const [eventLogRight, setEventLogRight] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // Sol taraf - stopPropagation ile
  const handleCardClickLeft = () => {
    const message = `🃏 Karta tıklandı`;
    setEventLogLeft((prev) => [...prev, message]);
    setIsModalOpen(true);
  };

  const handleButtonClickLeft = (e: React.MouseEvent) => {
    e.stopPropagation(); // Event bubbling'i durdur
    const message = `🔘 Butona tıklandı`;
    setEventLogLeft((prev) => [...prev, message]);
    setIsModalOpen(true);
  };

  // Sağ taraf - stopPropagation olmadan
  const handleCardClickRight = () => {
    const message = `🃏 Karta tıklandı`;
    setEventLogRight((prev) => [...prev, message]);
    setIsModalOpen(true);
  };

  const handleButtonClickRight = (e: React.MouseEvent) => {
    const message = `🔘 Butona tıklandı`;
    setEventLogRight((prev) => [...prev, message]);
    setIsModalOpen(true);
  };

  const clearLogs = () => {
    setEventLogLeft([]);
    setEventLogRight([]);
  };

  return (
    <div className="demo-container">
      <div className="controls">
        <button onClick={clearLogs}>Logu Temizle</button>
      </div>

      <div className="demo-sections">
        <div className="demo-section">
          <h3>stopPropagation() ile:</h3>
          <div className="card" onClick={handleCardClickLeft}>
            <p>Kart</p>
            <button onClick={handleButtonClickLeft}>Buton</button>
          </div>
          <div className="event-log">
            <h4>Event Log:</h4>
            <ul>
              {eventLogLeft.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="demo-section">
          <h3>stopPropagation() olmadan:</h3>
          <div className="card" onClick={handleCardClickRight}>
            <p>Kart</p>
            <button onClick={handleButtonClickRight}>Buton</button>
          </div>
          <div className="event-log">
            <h4>Event Log:</h4>
            <ul>
              {eventLogRight.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>Ben bir modalım. Sayfa scroll edilememeli.</p>
            <button onClick={() => setIsModalOpen(false)}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BubblingDemo;
