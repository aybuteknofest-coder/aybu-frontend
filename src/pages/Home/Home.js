import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion";
import API_URL from '../../config';

function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // ⚠️ KAPIMIZ ARTIK SELİMHAN'IN DUYURULAR ODASI!
    fetch(`${API_URL}/api/announcements/`) 
      .then((cevap) => cevap.json())
      .then((veri) => {
        const asilListe = veri.results ? veri.results : veri;
        // Sadece admin panelinden 'Aktif mi?' seçili olanları ekrana basıyoruz
        const aktifDuyurular = asilListe.filter(duyuru => duyuru.is_active === true);
        setEvents(aktifDuyurular); 
      })
      .catch((hata) => console.error("Duyurular ana sayfaya çekilemedi:", hata));
  }, []);

  // Yaklaşanlar önce (en yakın tarih üstte), geçmiş olanlar sona
  const simdi = new Date();
  const siraliEtkinlikler = [...events].sort((x, y) => {
    const dx = new Date(x.event_date || 0);
    const dy = new Date(y.event_date || 0);
    const gx = dx < simdi;
    const gy = dy < simdi;
    if (gx !== gy) return gx ? 1 : -1;
    return gx ? dy - dx : dx - dy;
  });

  // ⚙️ TARİH PARÇALAMA MOTORU 
  const formatTarih = (isoString) => {
    if (!isoString) return { gun: "-", ay: "-", tamTarih: "Belirtilmedi", saat: "--:--" };
    const tarihObj = new Date(isoString);
    const gun = tarihObj.getDate();
    const aylar = ["OCA", "ŞUB", "MAR", "NİS", "MAY", "HAZ", "TEM", "AĞU", "EYL", "EKİ", "KAS", "ARA"];
    const ay = aylar[tarihObj.getMonth()];
    const tamTarih = tarihObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    const saat = tarihObj.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    return { gun, ay, tamTarih, saat };
  };

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
          src="/teknofestLogo.png"
          alt="Teknofest Logo"
          className="hero-logo-big"
        />

        <h1 className="hero-title">AYBÜ TEKNOFEST</h1>
        <p className="hero-subtitle">Geleceği Gökyüzünde İnşa Ediyoruz</p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link to="/kayit-ol" className="btn-glow">
            Aramıza Katıl
          </Link>
          <Link to="/iletisim" className="btn-outline">
            İletişime Geç
          </Link>
        </motion.div>

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
          <div className="vm-card vm-vision">
            <div className="vm-icon">👁️</div>
            <span className="vm-label">Nereye gidiyoruz?</span>
            <h3>Vizyonumuz</h3>
            <p className="vm-lead">
              Havacılık, uzay ve teknoloji alanında üniversitemizi ulusal ve
              uluslararası arenada gururla temsil eden, üreten ve ilham veren
              bir topluluk olmak.
            </p>
            <ul className="vm-list">
              <li>TEKNOFEST ve benzeri yarışmalarda güçlü, derece hedefleyen takımlarla yer almak</li>
              <li>Milli teknoloji hamlesine katkı sunan nitelikli mühendis adayları yetiştirmek</li>
              <li>Üniversite, sanayi ve sektör temsilcileri arasında kalıcı bir iş birliği ağı kurmak</li>
              <li>Üretken, girişimci ve araştırmacı bir öğrenci kültürünün öncüsü olmak</li>
            </ul>
          </div>

          <div className="vm-card vm-mission">
            <div className="vm-icon">🚀</div>
            <span className="vm-label">Nasıl ilerliyoruz?</span>
            <h3>Misyonumuz</h3>
            <p className="vm-lead">
              Üyelerimize teknik yetkinlik kazandırmak, proje kültürünü
              aşılamak ve fikirlerini gerçek ürünlere dönüştürebilecekleri bir
              ortam sunmak.
            </p>
            <ul className="vm-list">
              <li>Eğitimler, atölyeler ve teknik seminerlerle bilgi ve beceri paylaşımını artırmak</li>
              <li>Takım çalışması, planlama ve sorumluluk bilincini gerçek projelerle geliştirmek</li>
              <li>Mentorluk ve sektör buluşmalarıyla üyelerimizin kariyerine yön vermek</li>
              <li>Yenilikçi fikirleri destekleyip herkesin katkı verebileceği kapsayıcı bir topluluk oluşturmak</li>
            </ul>
          </div>
        </div>

        {/* --- ETKİNLİK ALANI --- */}
        <div className="events-section">
          {!selectedEvent ? (
            /* LİSTE GÖRÜNÜMÜ */
            <>
              <div className="events-head">
                <span className="events-eyebrow">Takvimimiz</span>
                <h2 className="events-title">Yaklaşan Etkinlikler</h2>
                <p className="events-sub">
                  Duyuruları ve etkinliklerimizi buradan takip edebilirsin.
                </p>
              </div>

              {siraliEtkinlikler.length === 0 ? (
                <div className="events-empty">
                  <div className="events-empty-icon">📅</div>
                  <h3>Şu an planlanmış bir etkinlik yok</h3>
                  <p>
                    Yeni etkinlikler eklendiğinde burada görünecek. Gelişmelerden
                    haberdar olmak için bizi sosyal medyadan takip edebilirsin.
                  </p>
                  <Link to="/iletisim" className="events-empty-btn">
                    Bize Ulaş
                  </Link>
                </div>
              ) : (
                <div className="events-grid">
                  {siraliEtkinlikler.map((event) => {
                    const tarih = formatTarih(event.event_date);
                    const gecmis =
                      event.event_date && new Date(event.event_date) < new Date();
                    return (
                      <div
                        key={event.id}
                        className={gecmis ? "ev-card ev-past" : "ev-card"}
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="ev-top">
                          <div className="ev-date">
                            <span className="ev-day">{tarih.gun}</span>
                            <span className="ev-month">{tarih.ay}</span>
                          </div>
                          <span className={gecmis ? "ev-chip ev-chip-past" : "ev-chip"}>
                            {gecmis ? "Tamamlandı" : "Yaklaşıyor"}
                          </span>
                        </div>

                        <h3 className="ev-title">{event.title}</h3>

                        <div className="ev-meta">
                          <span>📍 {event.location || "Belirtilmedi"}</span>
                          <span>⏰ {tarih.saat}</span>
                        </div>

                        <p className="ev-desc">
                          {event.content
                            ? event.content.length > 110
                              ? event.content.substring(0, 110) + "..."
                              : event.content
                            : ""}
                        </p>

                        <div className="ev-more">
                          Detayları İncele <span>&rarr;</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            /* DETAY GÖRÜNÜMÜ (Kart Tıklanınca Açılan Yer) */
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
                      <p>{formatTarih(selectedEvent.event_date).tamTarih}</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <span className="info-icon">⏰</span>
                    <div>
                      <strong>Saat</strong>
                      <p>{formatTarih(selectedEvent.event_date).saat}</p>
                    </div>
                  </div>
                  <div className="info-box">
                    <span className="info-icon">📍</span>
                    <div>
                      <strong>Konum</strong>
                      <p>{selectedEvent.location || "Belirtilmedi"}</p>
                    </div>
                  </div>
                </div>

                <div className="detail-desc-box">
                  <h3>Etkinlik Detayı</h3>
                  <p>{selectedEvent.content}</p>
                </div>

                {/* Geri Dön Butonu */}
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