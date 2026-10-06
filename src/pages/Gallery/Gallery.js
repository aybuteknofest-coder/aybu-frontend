import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // ⚠️ DİKKAT: Selimhan'ın albümler için açtığı API linki buraya gelecek
    // (Muhtemelen /api/events/ veya /api/albums/ şeklindedir, değişirse sadece burayı güncelle)
    fetch('http://127.0.0.1:8000/api/events/') 
      .then((cevap) => cevap.json())
      .then((veri) => {
        const asilListe = veri.results ? veri.results : veri;
        
        // Sadece içinde fotoğraf olan etkinlikleri (albümleri) filtreleyip gösterebiliriz
        // Eğer backend albümleri ayrı bir linkten veriyorsa filtrelemeye gerek kalmaz
        setAlbums(asilListe);
      })
      .catch((hata) => console.error("Galeriler çekilirken hata oluştu kral:", hata));
  }, []);

  // --- LIGHTBOX FONKSİYONLARI ---
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % (selectedAlbum.photos?.length || 1),
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + (selectedAlbum.photos?.length || 1) - 1) %
        (selectedAlbum.photos?.length || 1),
    );
  };

  return (
    <div className="page-container">
      {/* DURUM 1: ALBÜM LİSTESİ GÖRÜNÜMÜ */}
      {!selectedAlbum ? (
        <>
          <h2>📸 Etkinlik Galerisi</h2>
          <p style={{ textAlign: "center", marginBottom: "30px", color: "#666" }}>
            Anılarımızı biriktirdiğimiz fotoğraf arşivimiz.
          </p>

          <div className="album-grid">
            {albums.map((album) => (
              <div
                key={album.id}
                className="album-card"
                onClick={() => setSelectedAlbum(album)}
              >
                <div className="album-cover-wrapper">
                  {/* lazy loading eklendi! */}
                  <img
                    src={album.cover_image || album.cover || "https://via.placeholder.com/400x300?text=Kapak+Yok"}
                    alt={album.title}
                    className="album-cover"
                    loading="lazy" 
                    onError={(e) => {
  e.target.onerror = null; // Sonsuz döngüyü iptal et!
  e.target.src = "https://via.placeholder.com/400x300?text=Resim+Yok";
}}
                  />
                  <div className="album-badge">
                    {album.photos ? album.photos.length : 0} Fotoğraf
                  </div>
                </div>
                <h3>{album.title}</h3>
                {/* Tarih varsa göster */}
                {album.start_date && (
                  <span className="album-date">
                    {new Date(album.start_date).toLocaleDateString('tr-TR')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        /* DURUM 2: ALBÜM İÇİ GÖRÜNÜMÜ */
        <div className="album-detail-view">
          <div className="album-header">
            <button
              className="btn-back-gallery"
              onClick={() => setSelectedAlbum(null)}
            >
              ⬅ Galeriye Dön
            </button>
            <div>
              <h2>{selectedAlbum.title}</h2>
              {selectedAlbum.start_date && (
                <p style={{ color: "#666", marginTop: "5px" }}>
                  {new Date(selectedAlbum.start_date).toLocaleDateString('tr-TR')}
                </p>
              )}
            </div>
          </div>

          <div className="photos-grid">
            {selectedAlbum.photos && selectedAlbum.photos.map((fotoObj, index) => (
              <div key={fotoObj.id || index} className="photo-item">
                {/* Backend'den gelen kelime "photo" olduğu için fotoObj.photo kullanıldı. 
                  lazy loading eklendi!
                */}
                <img
                  src={fotoObj.photo || fotoObj.image || fotoObj.src}
                  alt={`Fotoğraf ${index + 1}`}
                  onClick={() => openLightbox(index)}
                  loading="lazy"
                  onError={(e) => {
  e.target.onerror = null; // Sonsuz döngüyü iptal et!
  e.target.src = "https://via.placeholder.com/400x300?text=Resim+Yok";
}}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- LIGHTBOX MODALI --- */}
      {lightboxOpen && selectedAlbum && selectedAlbum.photos && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>✕</button>

          <button
            className="lightbox-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </button>

          <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedAlbum.photos[currentImageIndex].photo || selectedAlbum.photos[currentImageIndex].src}
              alt="Büyük Görünüm"
              className="lightbox-full-image"
              loading="lazy"
            />
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {selectedAlbum.photos.length}
            </div>
          </div>

          <button
            className="lightbox-nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;