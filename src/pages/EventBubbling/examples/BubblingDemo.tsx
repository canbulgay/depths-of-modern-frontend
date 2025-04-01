import React, { useState } from "react";
import "./BubblingDemo.css";

const BubblingDemo: React.FC = () => {
  const [eventLogLeft, setEventLogLeft] = useState<string[]>([]);
  const [eventLogRight, setEventLogRight] = useState<string[]>([]);

  // Sol taraf - stopPropagation ile
  const handleCardClickLeft = () => {
    const message = `🃏 Karta tıklandı`;
    setEventLogLeft((prev) => [...prev, message]);
  };

  const handleButtonClickLeft = (e: React.MouseEvent) => {
    e.stopPropagation(); // Event bubbling'i durdur
    const message = `🔘 Butona tıklandı`;
    setEventLogLeft((prev) => [...prev, message]);
  };

  // Sağ taraf - stopPropagation olmadan
  const handleCardClickRight = () => {
    const message = `🃏 Karta tıklandı`;
    setEventLogRight((prev) => [...prev, message]);
  };

  const handleButtonClickRight = () => {
    const message = `🔘 Butona tıklandı`;
    setEventLogRight((prev) => [...prev, message]);
  };

  const clearLogs = () => {
    setEventLogLeft([]);
    setEventLogRight([]);
  };

  return (
    <div className="demo-container">
      <div className="controls">
        <button onClick={clearLogs}>Event Geçmişini Temizle</button>
      </div>

      <div className="demo-sections">
        <div className="demo-section">
          <h3>✅ Kontrollü Senaryo: Event'leri Durdurarak</h3>
          <div className="card" onClick={handleCardClickLeft}>
            <p>Kart</p>
            <button onClick={handleButtonClickLeft}>Buton</button>
          </div>
          <div className="event-log">
            <h4>Event Geçmişi:</h4>
            <ul>
              {eventLogLeft.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="demo-section">
          <h3>⚠️ Kontrolsüz Senaryo: Event'ler Serbestçe Yayılıyor</h3>
          <div className="card" onClick={handleCardClickRight}>
            <p>Kart</p>
            <button onClick={handleButtonClickRight}>Buton</button>
          </div>
          <div className="event-log">
            <h4>Event Geçmişi:</h4>
            <ul>
              {eventLogRight.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubblingDemo;
