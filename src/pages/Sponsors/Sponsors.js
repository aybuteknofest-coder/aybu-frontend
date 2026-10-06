import React, { useState, useEffect } from "react";
import "./Sponsors.css";

function Sponsors() {
  // Eski sabit listeyi uçurduk, yerine boş bir sepet koyduk
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Backend'in kapısını çalıyoruz
    fetch('http://127.0.0.1:8000/api/sponsors/')
      .then((cevap) => cevap.json())
      .then((veri) => {
        // Eğer sayfalama (pagination) varsa results içinden al, yoksa direkt veriyi kullan
        const asilListe = veri.results ? veri.results : veri;
        setSponsors(asilListe);
      })
      .catch((hata) => console.error("Sponsorlar çekilirken hata oluştu kral:", hata));
  }, []);

  return (
    <div className="page-container">
      <h2>🤝 Değerli Sponsorlarımız</h2>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Projelerimizi hayata geçirmemizde bize güç veren destekçilerimize
        teşekkür ederiz.
      </p>

      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            {/* Logo Alanı */}
            <div className="sponsor-logo-wrapper">
              {sponsor.logo && <img src={sponsor.logo} alt={sponsor.name} />}
            </div>

            {/* İsim Alanı */}
            <h3>{sponsor.name}</h3>

            {/* Website Butonu (Sadece backend'den link girildiyse görünür) */}
            {sponsor.website && (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-visit"
              >
                Web Sitesini Ziyaret Et
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;