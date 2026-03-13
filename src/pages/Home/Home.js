import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // Hangi etkinliğin seçildiğini tutan State
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Tanışma Toplantısı",
      date: "15 Ekim 2025",
      time: "14:00",
      location: "Etlik Yerleşkesi - Konferans Salonu",
      shortDesc: "Yeni üyelerimizle tanışma çayı.",
      fullDesc:
        "Yeni döneme merhaba diyoruz! Kulüp yönetim ekibiyle tanışmak, sene boyunca yapacağımız projeleri dinlemek ve ekiplere dahil olmak için bu toplantıyı kaçırma. Çay ve simit ikramımız olacaktır.",
    },
    {
      id: 2,
      title: "Python ile Yapay Zeka Eğitimi",
      date: "22 Ekim 2025",
      time: "20:00",
      location: "Online (Zoom)",
      shortDesc: "Sıfırdan ileri seviyeye AI temelleri.",
      fullDesc:
        "Yapay zeka dünyasına giriş yapıyoruz. Python kütüphaneleri (Pandas, NumPy) ve temel makine öğrenmesi algoritmalarının işleneceği 4 haftalık eğitim serisinin ilk dersi.",
    },
    {
      id: 3,
      title: "Teknofest Proje Belirleme Çalıştayı",
      date: "05 Kasım 2025",
      time: "10:30",
      location: "Mühendislik Fakültesi - B Blok",
      shortDesc: "Yarışma takımları kuruluyor.",
      fullDesc:
        "Hangi kategoride yarışacaksın? İHA mı, Elektrikli Araç mı yoksa Yazılım mı? Fikirlerini getir, takım arkadaşlarını bul ve projeni belirle. Bu çalıştayda takımlar resmen kurulacak.",
    },
  ];

  return (
    <div className="home-container">
      {/* 1. BÖLÜM: TAM EKRAN AÇILIŞ (HERO) */}
      <div className="hero-fullscreen">
        <div className="stars"></div>
        <div
          className="stars"
          style={{ animationDelay: "2s", transform: "scale(1.5)" }}
        ></div>

        

        <img
          src="/resimler/teknofest-logo.png"
          alt="Teknofest Logo"
          className="hero-logo-big"
        />

        <h1 className="hero-title">AYBÜ TEKNOFEST</h1>
        <p className="hero-subtitle">Geleceği Gökyüzünde İnşa Ediyoruz</p>

        <div className="hero-buttons">
          <Link to="/kayit-ol" className="btn-glow">
            Aramıza Katıl
          </Link>
          <Link to="/iletisim" className="btn-outline">
            İletişime Geç
          </Link>
        </div>

        {/* Dalga Efekti */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#f8f9fa"
            ></path>
          </svg>
        </div>
      </div>

      {/* 2. BÖLÜM: İÇERİK ALANI */}
      <div className="main-content-area">
        {/* Vizyon & Misyon */}
        <div className="vision-mission-section">
          <div className="vm-card">
            <h3>👁️ Vizyonumuz</h3>
            <p>Ulusal ve uluslararası arenada teknolojimizle ses getirmek.</p>
          </div>
          <div className="vm-card">
            <h3>🚀 Misyonumuz</h3>
            <p>
              Üyelerimize teknik yetkinlik kazandırmak ve proje kültürünü
              aşılamak.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* --- ETKİNLİK ALANI (GÜNCELLENEN KISIM) --- */}
        <div className="events-section">
          {!selectedEvent ? (
            /* LİSTE GÖRÜNÜMÜ */
            <>
              <h2 className="section-title">📅 Yaklaşan Etkinlikler</h2>
              <div className="events-grid">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="event-card clickable"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="event-date">
                      <span>{event.date.split(" ")[0]}</span>
                      <small>{event.date.split(" ")[1]}</small>
                    </div>
                    <div className="event-details">
                      <h3>{event.title}</h3>
                      <p className="event-short-desc">{event.shortDesc}</p>
                      <span className="click-hint">Detaylar için tıkla →</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* DETAY GÖRÜNÜMÜ (CSS ile Düzelteceğiz) */
            <div className="event-detail-view">
              
              <div className="detail-header">
                
                <h2 className="detail-title">{selectedEvent.title}</h2>
              </div>

              <div className="detail-card-body">
                <div className="detail-info-grid">
                  <div className="info-box">
                    <span className="info-icon">📅</span>
                    <div>
                        <strong>Tarih</strong>
                        <p>{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <span className="info-icon">⏰</span>
                    <div>
                        <strong>Saat</strong>
                        <p>{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <span className="info-icon">📍</span>
                    <div>
                        <strong>Konum</strong>
                        <p>{selectedEvent.location}</p>
                    </div>
                  </div>
                </div>

                <div className="detail-desc-box">
                  <h3>Etkinlik Detayı</h3>
                  <p>{selectedEvent.fullDesc}</p>
                </div>

                <button
                  className="btn-back-events"
                  onClick={() => setSelectedEvent(null)}
                >
                  Tüm Etkinliklere Dön
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;