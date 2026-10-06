import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const INSTAGRAM_URL =
  "https://www.instagram.com/teknofestaybu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ayb%C3%BC-teknofest-kul%C3%BCb%C3%BC-55140a390/";
const MAIL = "aybu@teknofestkulubu.org";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 1. Sütun: Marka, slogan ve sosyal medya */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/aybuLogo.png" alt="AYBÜ Teknofest Kulübü" />
            <span>AYBÜ Teknofest Kulübü</span>
          </Link>
          <p>
            Milli Teknoloji Hamlesi yolunda, geleceğin mühendislerini
            yetiştiriyoruz.
          </p>
          <div className="footer-social">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <FaInstagram />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-btn"
            >
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${MAIL}`} aria-label="E-posta" className="social-btn">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 2. Sütun: Kurumsal (Navbar > Hakkımızda) */}
        <div className="footer-col">
          <h3>Kurumsal</h3>
          <ul>
            <li><Link to="/yonetim">Yönetim Kurulu</Link></li>
            <li><Link to="/koordinatorlukler">Koordinatörlükler</Link></li>
            <li><Link to="/galeri">Fotoğraf Galerisi</Link></li>
          </ul>
        </div>

        {/* 3. Sütun: Hızlı Erişim (Navbar'daki tüm ana sayfalar) */}
        <div className="footer-col">
          <h3>Hızlı Erişim</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/sponsorlar">Sponsorlar</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
            <li><Link to="/kayit-ol">Üye Ol</Link></li>
          </ul>
        </div>

        {/* 4. Sütun: Bize Ulaşın */}
        <div className="footer-col">
          <h3>Bize Ulaşın</h3>
          <ul>
            <li>
              <a href={`mailto:${MAIL}`}>
                <FaEnvelope /> {MAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <FaInstagram /> @teknofestaybu
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
          </ul>
          <Link to="/kayit-ol" className="footer-cta">
            Aramıza Katıl
          </Link>
        </div>
      </div>

      {/* En alt şerit */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AYBÜ Teknofest Kulübü. Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
