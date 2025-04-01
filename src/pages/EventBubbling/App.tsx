import React from "react";
import BubblingDemo from "./examples/BubblingDemo";
import "./App.css";

const EventBubblingPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1 style={{ color: "white" }}>
        Event Bubbling ve Capturing: Olayların Yüzeyin Altındaki Yolculuğu
      </h1>

      <section className="intro">
        <p style={{ color: "white" }}>
          Bu demo, DOM'da event bubbling mekanizmasını ve stopPropagation()
          metodunun etkisini karşılaştırmalı olarak göstermektedir. Sol tarafta
          event bubbling'i durduran, sağ tarafta ise normal şekilde çalışan
          örnekleri görebilirsiniz.
        </p>
      </section>

      <BubblingDemo />

      <section className="explanation">
        <h2 style={{ color: "white" }}>Nasıl Çalışır?</h2>
        <ul style={{ color: "white" }}>
          <li>Sol tarafta (stopPropagation ile):</li>
          <ul>
            <li>Butona tıkladığınızda → Sadece butonun click eventi çalışır</li>
            <li>Karta tıkladığınızda → Kart click eventi çalışır</li>
          </ul>
          <li>Sağ tarafta (stopPropagation olmadan):</li>
          <ul>
            <li>
              Butona tıkladığınızda → Önce butonun, sonra kartın click eventi
              çalışır
            </li>
            <li>Karta tıkladığınızda → Sadece kart click eventi çalışır</li>
          </ul>
          <li>
            Modal açıldığında sayfa scroll'u otomatik olarak engellenir
            (useEffect hook'u ile)
          </li>
          <li>
            Modal dışına tıklandığında kapanır, içeriğine tıklandığında ise
            event bubbling engellenir
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EventBubblingPage;
