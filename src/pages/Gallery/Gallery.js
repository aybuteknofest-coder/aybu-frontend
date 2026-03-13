import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  // 1. Hangi albümün açık olduğunu takip eden state
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  // --- YENİ: LIGHTBOX (Büyük Resim) STATE'LERİ ---
  // Lightbox açık mı?
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // Şu an kaçıncı fotoğrafa bakıyoruz? (İndeks numarası)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- ALBÜM VERİLERİ (Senin kendi verilerin kalacak) ---
  const albums = [
    {
      id: 1,
      title: "Havelsan Teknik Gezisi",
      date: "11 Aralık 2025",
      cover: "/resimler/havelsan/kapak.JPG", 
      photos: [
        
        { id: 101, src: "/resimler/havelsan/kapak.JPG" },
        { id: 102, src: "/resimler/havelsan/foto1.JPG" },
        { id: 103, src: "/resimler/havelsan/foto2.JPG" },
        { id: 104, src: "/resimler/havelsan/foto3.JPG" },
        
      ]
    },
    
    {
      id: 2,
      title: "Kulüp Tanışma Etkinliğimiz",
      date: "30 Kasım 2025",
      cover:
        "/resimler/bulusma/kapak.JPG", 
      photos: [
        { id: 201, src: "/resimler/bulusma/kapak.JPG" },
        { id: 202, src: "/resimler/bulusma/foto1.JPG" },
        { id: 203, src: "/resimler/bulusma/foto2.JPG" },
        { id: 204, src: "/resimler/bulusma/foto3.JPG" },
        { id: 205, src: "/resimler/bulusma/foto4.JPG" },
      ]
    }
  ];

  // --- YENİ: LIGHTBOX FONKSİYONLARI ---
  
  // Fotoğrafa tıklayınca Lightbox'ı aç
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Arka planın kaymasını engelle
    document.body.style.overflow = 'hidden';
  };

  // Kapat butonu
  const closeLightbox = () => {
    setLightboxOpen(false);
    // Arka plan kaymasını tekrar aç
    document.body.style.overflow = 'auto';
  };

  // Sonraki Fotoğraf
  const nextImage = () => {
    // Eğer sondayısa başa dön (Modülo işlemi)
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedAlbum.photos.length
    );
  };

  // Önceki Fotoğraf
  const prevImage = () => {
    // Eğer baştaysa sona dön
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + selectedAlbum.photos.length - 1) % selectedAlbum.photos.length
    );
  };


  return (
    <div className="page-container">
      
      {/* DURUM 1: ALBÜM LİSTESİ GÖRÜNÜMÜ */}
      {!selectedAlbum ? (
        <>
          <h2>📸 Etkinlik Galerisi</h2>
          <p style={{textAlign:'center', marginBottom: '30px', color:'#666'}}>
            Anılarımızı biriktirdiğimiz fotoğraf arşivimiz.
          </p>
          
          <div className="album-grid">
            {albums.map((album) => (
              <div key={album.id} className="album-card" onClick={() => setSelectedAlbum(album)}>
                <div className="album-cover-wrapper">
                   <img 
                     src={album.cover} 
                     alt={album.title} 
                     className="album-cover" 
                     onError={(e) => {e.target.src = 'https://via.placeholder.com/400x300?text=Resim+Yok'}}
                   />
                   <div className="album-badge">{album.photos.length} Fotoğraf</div>
                </div>
                <h3>{album.title}</h3>
                <span className="album-date">{album.date}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        
        /* DURUM 2: ALBÜM İÇİ GÖRÜNÜMÜ */
        <div className="album-detail-view">
          <div className="album-header">
            <button className="btn-back-gallery" onClick={() => setSelectedAlbum(null)}>
              ⬅ Galeriye Dön
            </button>
            <div>
              <h2>{selectedAlbum.title}</h2>
              <p style={{color:'#666', marginTop:'5px'}}>{selectedAlbum.date}</p>
            </div>
          </div>

          <div className="photos-grid">
            {selectedAlbum.photos.map((photo, index) => (
              <div key={photo.id} className="photo-item">
                {/* Fotoğrafa tıklama olayını ekledik: openLightbox(index) */}
                <img 
                  src={photo.src} 
                  alt={`Fotoğraf ${index + 1}`}
                  onClick={() => openLightbox(index)} 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/600x400?text=Resim+Yok'}}
                />
              </div>
            ))}
          </div>

        </div>
      )}

      {/* --- YENİ: LIGHTBOX MODALI (Sadece lightboxOpen true ise görünür) --- */}
      {lightboxOpen && selectedAlbum && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          
          {/* Kapatma Butonu (X) */}
          <button className="lightbox-close-btn" onClick={closeLightbox}>✕</button>
          
          {/* Sol Ok (<) */}
          <button className="lightbox-nav-btn prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            ❮
          </button>

          {/* Büyük Resim Container */}
          <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
             <img 
               src={selectedAlbum.photos[currentImageIndex].src} 
               alt="Büyük Görünüm" 
               className="lightbox-full-image"
             />
             <div className="lightbox-counter">
                {currentImageIndex + 1} / {selectedAlbum.photos.length}
             </div>
          </div>

           {/* Sağ Ok (>) */}
           <button className="lightbox-nav-btn next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>

        </div>
      )}

    </div>
  );
}

export default Gallery;