import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import EventBubblingPage from "./pages/EventBubbling/App";
import "./App.css";

// Title helper
const updateTitle = (title: string) => {
  document.title = `${title} | Frontend'in Derinlikleri`;
};

// Route components with title updates
const Home = () => {
  useEffect(() => {
    updateTitle("Ana Sayfa");
  }, []);

  return (
    <div className="welcome">
      <h2>Görünenden Fazlası: Modern Frontend'in Derinlikleri</h2>
      <p>
        Bu seri, frontend geliştirmenin derinliklerinde yatan önemli konuları
        interaktif örneklerle açıklamaktadır. Her bir bölümde farklı bir konuyu
        ele alarak, teorik bilgileri pratik örneklerle pekiştiriyoruz.
      </p>
      <p>Soldaki menüden istediğiniz konuya geçiş yapabilirsiniz.</p>
    </div>
  );
};

const EventBubblingWrapper = () => {
  useEffect(() => {
    updateTitle("Event Bubbling ve Capturing: Görünmez Zincirleme Tepkiler");
  }, []);

  return <EventBubblingPage />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="main-nav">
          <h1>Görünenden Fazlası: Modern Frontend'in Derinlikleri</h1>
          <ul>
            <li>
              <Link to="/event-bubbling">
                1. Event Bubbling ve Capturing: Görünmez Zincirleme Tepkiler
              </Link>
            </li>
            {/* Diğer makaleler buraya eklenecek */}
          </ul>
        </nav>

        <Routes>
          <Route path="/event-bubbling" element={<EventBubblingWrapper />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
