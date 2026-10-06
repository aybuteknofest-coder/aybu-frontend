import React from "react";
import './Coordinators.css';

function Coordinators() {
  const deptList = [
    {
      id: 1,
      name: "Ar-Ge, İnovasyon ve Proje Koordinatörlüğü",
      desc: "Teknik projelerin geliştirilmesi.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/ArgeLogo.png", 
    },
    {
      id: 2,
      name: "Mentörlük ve Motivasyon Koordinatörlüğü",
      desc: "Sosyal medya ve tanıtım.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/MentorlukLogo.png",
    },
    {
      id: 3,
      name: "Dış İlişkiler ve Sponsorluk Koordinatörlüğü",
      desc: "Kurumsal iletişim ve fon.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/SponsorlukLogo.png",
    },
    {
      id: 4,
      name: "Etkinlik ve Organizasyon Koordinatörlüğü",
      desc: "Etkinlik planlama ve süreç yönetimi.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/OrganizasyonLogo.png",
    },
    {
      id: 5,
      name: "Yönetim Projelendirme Koordinatörlüğü",
      desc: "Yönetim süreçlerinin takibi.",
      foto: "/resimler/zeynep.jpg",
    },
    {
      id: 6,
      name: "Operasyonel Takip ve Web Tasarımı Koordinatörlüğü",
      desc: "Web sitesi ve dijital altyapı.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/WebTasar%C4%B1mLogo.png",
    },
    {
      id: 7,
      name: "Medya ve Tanıtım Koordinatörlüğü",
      desc: "Sosyal medya yönetimi ve tanıtım.",
      foto: "https://pub-82d545ae25964c4782c95a159a69d6bf.r2.dev/MedyaLogo.png",
    },
    {
      id: 8,
      name: "Girişimcilik Ekosistemi Koordinatörlüğü",
      desc: "Girişimcilik projeleri ve destek.",
      foto: "/resimler/ahmet.jpg",
    },
    {
      id: 9,
      name: "Temsilciler ve Üye İlişkileri Koordinatörlüğü",
      desc: "Üye takibi ve temsilcilikler.",
      foto: "/resimler/ahmet.jpg",
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coordinators;