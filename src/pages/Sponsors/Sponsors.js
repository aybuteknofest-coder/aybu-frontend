import React from 'react';
import './Sponsors.css';

function Sponsors() {
  // SPONSOR LİSTESİ (Burayı kendi sponsorlarınla dolduracaksın)
  const sponsors = [
    { 
      id: 1, 
      name: "HAVELSAN", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Havelsan_logo.svg", 
      website: "https://www.havelsan.com.tr" 
    },
    { 
      id: 2, 
      name: "Gua Coffee Company", 
      logo: "/resimler/Gua.png", 
      website: "https://guacoffeecompany.com/" 
    },
    { 
      id: 3, 
      name: "Coffee de Madrid", 
      logo: "/resimler/Madrid.png", 
      website: "https://coffeedemadrid.com.tr/" 
    },
    { 
      id: 4, 
      name: "AYBU SKS", 
      logo: "/resimler/logo.png", 
      website: "https://aybu.edu.tr" 
    },
  ];

  return (
    <div className="page-container">
      <h2>🤝 Değerli Sponsorlarımız</h2>
      <p style={{textAlign:'center', marginBottom:'40px', color:'#666'}}>
        Projelerimizi hayata geçirmemizde bize güç veren destekçilerimize teşekkür ederiz.
      </p>

      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            {/* Logo Alanı */}
            <div className="sponsor-logo-wrapper">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
            
            {/* İsim Alanı */}
            <h3>{sponsor.name}</h3>
            
            {/* Website Butonu */}
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="btn-visit">
              Web Sitesini Ziyaret Et
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;