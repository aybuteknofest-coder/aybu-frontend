import React, { useState, useEffect } from 'react';
import "./Board.css";
import API_URL from '../../config';

function Board() {
  const defaultPlaceholder =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  // 1. Backend'den gelecek verileri tutacağımız sepetimiz (Başlangıçta boş)
  const [boardMembers, setBoardMembers] = useState([]);

  // 2. Sayfa açıldığı an kuryeyi (fetch) yola çıkarıyoruz
  useEffect(() => {
    fetch(`${API_URL}/api/board-members/`) 
      .then((cevap) => cevap.json())
      .then((veri) => {

        const asilListe = veri.results ? veri.results : veri;
        
        setBoardMembers(asilListe); 
      })
      .catch((hata) => console.error("Backend'e ulaşılamadı kral:", hata));
  }, []);; // Sadece sayfa açıldığında 1 kere çalışır

  return (
    <div className="page-container">
      <h2>🏛️ Yönetim Kurulu</h2>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Kulübümüzün idari ve organizasyonel süreçlerini yöneten ekibimizle
        tanışın.
      </p>

      <div className="board-grid">
        {boardMembers.map((member) => (
          // ⚠️ KRİTİK NOKTA 2: Backend'deki id kısmı farklıysa (örn: member.uye_id) burayı güncelle
          <div key={member.id} className="board-card">
            
            {/* Fotoğraf Alanı */}
            <div className="board-img-wrapper">
              <img
                // ⚠️ KRİTİK NOKTA 3: Backend'de fotoğraf linkinin adı 'img' mi, 'image' mi yoksa 'fotograf' mı?
                src={member.photo || defaultPlaceholder} 
                alt={member.full_name}
                className="board-member-img"
                onError={(e) => {
                  e.target.src = defaultPlaceholder;
                }}
              />
            </div>

            {/* ⚠️ KRİTİK NOKTA 4: Backend'de bu alanların isimleri (name, role) neyse ona göre değiştir */}
            <h3>{member.full_name  }</h3>
            <span className="role-badge">{member.title}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;