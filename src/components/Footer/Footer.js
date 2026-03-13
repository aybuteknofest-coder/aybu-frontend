import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1. Sütun: Marka ve Slogan */}
        <div className="footer-col">
          <h3>🚀 AYBU Teknofest</h3>
          <p>
            Milli Teknoloji Hamlesi yolunda,
            <br />
            geleceğin mühendislerini yetiştiriyoruz.
          </p>
        </div>

        {/* 2. Sütun: HAKKIMIZDA (Navbar'daki Dropdown Öğeleri) */}
        <div className="footer-col">
          <h3>Kurumsal</h3>
          <ul>
            <li>
              <Link to="/yonetim">Yönetim Kurulu</Link>
            </li>
            <li>
              <Link to="/koordinatorlukler">Koordinatörlükler</Link>
            </li>
            <li>
              <Link to="/galeri">Fotoğraf Galerisi</Link>
            </li>
          </ul>
        </div>

        {/* 3. Sütun: HIZLI LİNKLER (Sponsorlar burada) */}
        <div className="footer-col">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/sponsorlar">Sponsorlar</Link>
            </li>{" "}
            {/* Takımlar yerine geldi */}
            
            <li>
              <Link to="/kayit-ol">Üye Ol</Link>
            </li>
          </ul>
        </div>

        {/* 4. Sütun: İletişim & Sosyal Medya */}
        <div className="footer-col">
          <h3>Bize Ulaşın</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/teknofestaybu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              Instagram
            </a>
            
            <a href="https://www.linkedin.com/in/ayb%C3%BC-teknofest-kul%C3%BCb%C3%BC-55140a390/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:aybu@teknofestkulubu.org">aybu@teknofestkulubu.org</a>
          </div>
        </div>
      </div>

      {/* En Alt Şerit */}
      <div className="footer-bottom">
        <p>&copy; 2025 AYBU Teknofest Kulübü. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
