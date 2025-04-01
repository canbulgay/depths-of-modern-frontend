import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventBubblingPage from "./pages/EventBubbling/App";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="main-nav">
          <h1>Görünenden Fazlası: Modern Frontend'in Derinlikleri</h1>
          <ul>
            <li>
              <Link to="/event-bubbling">
                1. Event Bubbling ve Capturing: Olayların Yüzeyin Altındaki
                Yolculuğu
              </Link>
            </li>
            {/* Diğer makaleler buraya eklenecek */}
          </ul>
        </nav>

        <Routes>
          <Route path="/event-bubbling" element={<EventBubblingPage />} />
          <Route
            path="/"
            element={
              <div className="welcome">
                <h2>Görünenden Fazlası: Modern Frontend'in Derinlikleri</h2>
                <p>
                  Bu seri, frontend geliştirmenin derinliklerinde yatan önemli
                  konuları interaktif örneklerle açıklamaktadır. Her bir bölümde
                  farklı bir konuyu ele alarak, teorik bilgileri pratik
                  örneklerle pekiştiriyoruz.
                </p>
                <p>Soldaki menüden istediğiniz konuya geçiş yapabilirsiniz.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
