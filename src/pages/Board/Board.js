import React from 'react';
import './Board.css';

function Board() {
  
  const defaultPlaceholder = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  // YÖNETİM KURULU LİSTESİ

  const boardMembers = [
    { 
      id: 1, 
      name: "Ömer Faruk Çakıllı", 
      role: "Kulüp Başkanı", 
      img: "/resimler/yonetimKurulu/OmerFaruk.png" 
    },
    { 
      id: 2, 
      name: "Zübeyir Enes Tiryaki", 
      role: "Kulüp Başkan Yardımcısı", 
      img: "/resimler/yonetimKurulu/EnesTiryaki.png" 
    },
    { 
      id: 3, 
      name: "Onur Ersoy", 
      role: "Ar-Ge, İnovasyon ve Proje Koordinatörlüğü Başkanı", 
      img: "/resimler/yonetimKurulu/OnurErsoy.png" 
    },
    { 
      id: 4, 
      name: "Yasir Yener", 
      role: "Ar-Ge, İnovasyon ve Proje Koordinatörlüğü Başkan Yardımcısı", 
      img: "" 
    },
    { 
      id: 5, 
      name: "Berkan Güdümcüoğlu", 
      role: "Kulüp Üyesi", 
      img: "/resimler/yonetimKurulu/Berkan.png" 
    },
    { 
      id: 5, 
      name: "Selimhan Altınpınar", 
      role: "Operasyonel Takip ve Web Tasarımı Koordinatörlüğü Başkanı", 
      img: "/resimler/yonetimKurulu/Selimhan.png" 
    },
    { 
      id: 5, 
      name: "Serhat Erdoğan", 
      role: "Operasyonel Takip ve Web Tasarımı Koordinatörlüğü Başkan Yardımcısı", 
      img: "/resimler/yonetimKurulu/Serhat.png" 
    },
  ];

  return (
    <div className="page-container">
      <h2>🏛️ Yönetim Kurulu</h2>
      <p style={{textAlign:'center', marginBottom:'40px', color:'#666'}}>
        Kulübümüzün idari ve organizasyonel süreçlerini yöneten ekibimizle tanışın.
      </p>
      
      <div className="board-grid">
        {boardMembers.map((member) => (
          <div key={member.id} className="board-card">
            
            {/* Fotoğraf Alanı */}
            <div className="board-img-wrapper">
              <img 
                src={member.img || defaultPlaceholder} // Resim yoksa direkt varsayılanı kullan
                alt={member.name} 
                className="board-member-img"
                // Eğer link kırık çıkarsa (404), varsayılan görseli devreye sok
                onError={(e) => { e.target.src = defaultPlaceholder; }}
              />
            </div>
            
            <h3>{member.name}</h3>
            <span className="role-badge">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;