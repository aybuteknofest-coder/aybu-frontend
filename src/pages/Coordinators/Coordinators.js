import React from "react";
import './Coordinators.css';

function Coordinators() {
  const deptList = [
    {
      id: 1,
      name: "Ar-Ge, İnovasyon ve Proje Koordinatörlüğü",
      desc: "Teknik projelerin geliştirilmesi.",
      leader: "Onur Ersoy",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/ArgeLogo.png", 
      baskanFoto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/OnurErsoy.png", 
    },
    {
      id: 2,
      name: "Mentörlük ve Motivasyon Koordinatörlüğü",
      desc: "Sosyal medya ve tanıtım.",
      leader: "Zeynep Çelik",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/MentorlukLogo.png",
      baskanFoto: "/resimler/zeynep.jpg",
    },
    {
      id: 3,
      name: "Dış İlişkiler ve Sponsorluk Koordinatörlüğü",
      desc: "Kurumsal iletişim ve fon.",
      leader: "Zeynep Çelik",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/SponsorlukLogo.png",
      baskanFoto: "/resimler/zeynep.jpg",
    },
    {
      id: 4,
      name: "Etkinlik ve Organizasyon Koordinatörlüğü",
      desc: "Etkinlik planlama ve süreç yönetimi.",
      leader: "Zeynep Çelik",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/OrganizasyonLogo.png",
      baskanFoto: "/resimler/zeynep.jpg",
    },
    {
      id: 5,
      name: "Yönetim Projelendirme Koordinatörlüğü",
      desc: "Yönetim süreçlerinin takibi.",
      leader: "Zeynep Çelik",
      foto: "/resimler/zeynep.jpg",
      baskanFoto: "/resimler/zeynep.jpg",
    },
    {
      id: 6,
      name: "Operasyonel Takip ve Web Tasarımı Koordinatörlüğü",
      desc: "Web sitesi ve dijital altyapı.",
      leader: "Zeynep Çelik",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/WebTasar%C4%B1mLogo.png",
      baskanFoto: "/resimler/zeynep.jpg",
    },
    {
      id: 7,
      name: "Medya ve Tanıtım Koordinatörlüğü",
      desc: "Sosyal medya yönetimi ve tanıtım.",
      leader: "Onur Ersoy",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/MedyaLogo.png",
      baskanFoto: "/resimler/onur.jpg",
    },
    {
      id: 8,
      name: "Girişimcilik Ekosistemi Koordinatörlüğü",
      desc: "Girişimcilik projeleri ve destek.",
      leader: "Onur Ersoy",
      foto: "/resimler/ahmet.jpg",
      baskanFoto: "/resimler/ahmet.jpg",
    },
    {
      id: 9,
      name: "Temsilciler ve Üye İlişkileri Koordinatörlüğü",
      desc: "Üye takibi ve temsilcilikler.",
      leader: "Onur Ersoy",
      foto: "/resimler/ahmet.jpg",
      baskanFoto: "/resimler/ahmet.jpg",
    },
  ];

  return (
    <div className="page-container">
      <h2>Koordinatörlüklerimiz</h2>
      <div className="card-grid">
        {deptList.map((dept) => (
          <div key={dept.id} className="card">
            
            {/* ÜST KISIM: Koordinatörlük Logosu */}
            <div className="img-container">
              <img
                src={dept.foto}
                alt={dept.name}
                className="leader-img"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </div>

            {/* ORTA KISIM: İsim ve Açıklama */}
            <h3>{dept.name}</h3>
            <p>{dept.desc}</p>

            {/* ALT KISIM: Başkan Alanı (Revize Edildi) */}
            <div className="team-info" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '15px', 
                marginTop: '20px', 
                borderTop: '1px solid #eee', 
                paddingTop: '15px',
                textAlign: 'left' 
            }}>
              
              {/* 1. Başkanın Fotosu (Büyütüldü) */}
              <img 
                src={dept.baskanFoto} 
                alt={dept.leader}
                style={{
                    width: '65px',  
                    height: '65px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '3px solid #002855',
                    flexShrink: 0 
                }}
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
              />
              
              {/* 2. İsim ve Unvan Kutusu */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* İsim */}
                <span style={{ 
                    fontWeight: 'bold', 
                    color: '#333', 
                    fontSize: '1rem',
                    marginBottom: '3px' 
                }}>
                  {dept.leader}
                </span>

                {/* Unvan (İstediğin Renk ve Font) */}
                <span style={{ 
                    color: '#002855', 
                    fontSize: '0.85rem', 
                    fontWeight: '600'
                }}>
                  Koordinatörlük Başkanı
                </span>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Coordinators;