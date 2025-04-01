import React from "react";
import BubblingDemo from "./examples/BubblingDemo";
import "./App.css";

const EventBubblingPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Event Bubbling ve Capturing: Görünmez Zincirleme Tepkiler</h1>

      <section className="intro">
        <p>
          Event Bubbling ve Capturing, bir frontend developer'ın yaşayıp da "ha
          tamam şimdi anladım" demeden tam anlamıyla kavrayamayacağı konulardan
          biri. Açıkçası ben de uzun süre boyunca bu konuların fazla teknik,
          fazla teorik ve görünürde çok da etkisi olmayan şeyler olduğunu
          düşünüyordum. Ta ki yaptığım bir geliştirme, sayfanın scroll
          yeteneğini tamamen yok edene kadar...
        </p>

        <p>
          Aslında gelen feature isteği oldukça basit ve netti: Kullandığımız
          kartların içinde birer buton vardı ama kullanıcıların doğrudan butona
          değil, kartın herhangi bir yerine tıklamaya çalıştığı fark edildi.
          Gelen istek şuydu:
        </p>

        <p className="quote">"Kartlar tıklanabilir olsun Can."</p>

        <p>
          İlk başta karşı çıktım çünkü hem kartın hem içindeki butonun
          tıklanabilir olması içime sinmiyordu. Yine de düşük eforlu işleri
          sevdiğim için, başka bir işle birlikte göndermeye karar verdim ve test
          yapacak arkadaşıma "Zaten sadece karta onClick ekleyeceğim, test
          etmesek de olur" dedim. Neyse ki test edildi...
        </p>
      </section>

      <BubblingDemo />

      <section className="explanation">
        <h2>Peki Neden Böyle Oldu?</h2>
        <p>
          Aşağıdaki örnekte görebileceğiniz gibi, event bubbling'i kontrol
          etmediğimizde:
        </p>
        <ul>
          <li>
            <strong>Kontrollü Senaryo (stopPropagation Kullanıldı):</strong>{" "}
            Event'i durdurduğumuz için her şey beklendiği gibi çalışıyor
          </li>
          <li>
            <strong>Kontrolsüz Senaryo (stopPropagation Kullanılmadı):</strong>{" "}
            Butona tıkladığınızda hem butonun hem de kartın click eventi
            tetikleniyor ve bu da beklenmeyen davranışlara yol açabiliyor
          </li>
        </ul>
        <p>
          Bu basit örnek, event bubbling'in nasıl beklenmedik sorunlara yol
          açabileceğini ve neden önemli olduğunu gösteriyor. Gerçek dünya
          uygulamalarında bu tür durumları kontrol etmek çok daha kritik
          olabiliyor.
        </p>
      </section>
    </div>
  );
};

export default EventBubblingPage;
