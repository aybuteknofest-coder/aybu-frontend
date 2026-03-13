import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // 1. Ana Menü Açık mı?
  const [click, setClick] = useState(false);
  // 2. Hakkımızda Alt Menüsü Açık mı? (Sadece mobil için)
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(false); // Menü kapanınca dropdown da kapansın
  };

  // Mobilde Hakkımızda'ya basınca aç/kapa yap
  const toggleDropdown = () => {
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/resimler/logo.png" alt="Logo" className="nav-logo-img" />
          AYBÜ Teknofest Kulübü
        </Link>

        {/* Hamburger İkonu */}
        <div className="menu-icon" onClick={handleClick}>
          <span style={{ color: "white", fontSize: "1.8rem" }}>
            {click ? "✖" : "☰"}
          </span>
        </div>

        {/* Menü Linkleri */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Ana Sayfa
            </Link>
          </li>

          {/* HAKKIMIZDA (Tıklamalı Dropdown) */}
          <li className="nav-item" onClick={toggleDropdown}>
            <div className="nav-links dropdown-trigger">
              Hakkımızda {dropdown ? "▲" : "▼"}
            </div>

            {/* Dropdown İçeriği: CSS ile mobilde 'dropdown' state'ine göre gösterilecek */}
            <div
              className={
                dropdown ? "dropdown-content mobile-show" : "dropdown-content"
              }
            >
              <Link to="/yonetim" onClick={closeMobileMenu}>
                Yönetim Kurulu
              </Link>
              <Link to="/koordinatorlukler" onClick={closeMobileMenu}>
                Koordinatörlükler
              </Link>
              <Link to="/galeri" onClick={closeMobileMenu}>
                Galeri
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link
              to="/sponsorlar"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sponsorlar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/iletisim"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              İletişim
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/kayit-ol"
              className="nav-links-mobile-btn"
              onClick={closeMobileMenu}
            >
              Üye Ol
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
