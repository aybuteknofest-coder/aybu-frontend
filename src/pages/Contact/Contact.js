import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';
import API_URL from '../../config';

function Contact() {
  const navigate = useNavigate(); 
  const [isSubmitted, setIsSubmitted] = useState(false); 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Senin bulduğun backend kelimeleri
    const gonderilecekVeri = {
      full_name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      // ⚠️ API LİNKİ GÜNCELLENDİ
      const response = await fetch(`${API_URL}/api/iletisim-mesajlari/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gonderilecekVeri),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo(0, 0); 
      } else {
        alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Sunucuya bağlanılamadı:", error);
      alert("Sunucu ile bağlantı kurulamadı.");
    }
  };

  return (
    <div className="page-container">
      <div className="contact-head">
        <span className="contact-eyebrow">İletişim</span>
        <h1 className="contact-title">Bizimle İletişime Geçin</h1>
        <p className="contact-sub">
          Sorularınız, sponsorluk teklifleriniz ya da proje fikirleriniz için
          bize yazın. Mesajınız ekibimize doğrudan ulaşır.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info-box">
          <h3>İletişim Bilgileri</h3>
          <p className="info-lead">
            Projelerimiz hakkında bilgi almak, sponsorluk görüşmesi yapmak ya da
            sadece tanışmak için bize her zaman yazabilirsiniz.
          </p>

          <div className="info-list">
            <div className="info-item">
              <span className="info-icon"><FaMapMarkerAlt /></span>
              <div>
                <small>Adres</small>
                <span>AYBÜ Etlik 15 Temmuz Kampüsü</span>
              </div>
            </div>
            <a className="info-item" href="mailto:aybu@teknofestkulubu.org">
              <span className="info-icon"><FaEnvelope /></span>
              <div>
                <small>E-posta</small>
                <span>aybu@teknofestkulubu.org</span>
              </div>
            </a>
            <a
              className="info-item"
              href="https://www.instagram.com/teknofestaybu"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon"><FaInstagram /></span>
              <div>
                <small>Instagram</small>
                <span>@teknofestaybu</span>
              </div>
            </a>
            <a
              className="info-item"
              href="https://www.linkedin.com/in/ayb%C3%BC-teknofest-kul%C3%BCb%C3%BC-55140a390/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon"><FaLinkedinIn /></span>
              <div>
                <small>LinkedIn</small>
                <span>AYBÜ Teknofest Kulübü</span>
              </div>
            </a>
          </div>

          <div className="info-topics">
            <strong>Bize yazabileceğiniz konular</strong>
            <ul>
              <li>Sponsorluk ve iş birliği</li>
              <li>Üyelik işlemleri</li>
              <li>Proje önerileri</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-box">
          {!isSubmitted ? (
            <>
              <h2>Mesaj Gönderin</h2>
              <p className="form-hint">Tüm alanlar zorunludur.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input 
                    type="text" name="name" 
                    placeholder="Örn: Ahmet Yılmaz" 
                    value={formData.name} onChange={handleChange} required 
                  />
                </div>
                <div className="form-group">
                  <label>E-Posta Adresiniz</label>
                  <input 
                    type="email" name="email" 
                    placeholder="ornek@email.com" 
                    value={formData.email} onChange={handleChange} required 
                  />
                </div>
                <div className="form-group">
                  <label>Konu</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Seçiniz...</option>
                    <option value="Sponsorluk">Sponsorluk Görüşmesi</option>
                    <option value="Üyelik">Üyelik İşlemleri</option>
                    <option value="Proje">Proje Önerisi</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mesajınız</label>
                  <textarea 
                    name="message" rows="5" 
                    placeholder="Bize ne söylemek istersiniz?" 
                    value={formData.message} onChange={handleChange} required 
                  ></textarea>
                </div>
                <button type="submit" className="btn-send">
                  Gönder 🚀
                </button>
              </form>
            </>
          ) : (
            <div className="contact-success">
              <div className="success-icon">✅</div>
              <h2>Mesajınız Alındı!</h2>
              <p>
                Teşekkürler <strong>{formData.name}</strong>.<br/>
                Mesajınız tarafımıza başarıyla ulaştı. Ekibimiz en kısa sürede 
                sizinle iletişime geçecektir.
              </p>
              <button className="btn-home-return" onClick={() => navigate('/')}>
                Ana Sayfaya Dön
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;