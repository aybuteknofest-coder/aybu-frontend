import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Sayfa yönlendirmesi için
import './Contact.css';

function Contact() {
  const navigate = useNavigate(); // Yönlendirme kancası
  const [isSubmitted, setIsSubmitted] = useState(false); // Form gönderildi mi kontrolü
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normalde burada mail gönderme işlemi yapılır.
    // Şimdilik başarılı kabul edip ekranı değiştiriyoruz:
    setIsSubmitted(true);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="page-container">
      <div className="contact-container">
        
        {/* SOL TARA: İletişim Bilgileri (Hep Görünür) */}
        <div className="contact-info-box">
          <h3>📍 İletişim Bilgileri</h3>
          <p style={{color:'#ccc', marginBottom:'30px'}}>
            Projelerimiz hakkında bilgi almak, sponsorluk veya tanışmak için bize her zaman yazabilirsiniz.
          </p>
          
          <div className="info-item">
            <span className="info-icon">🏫</span>
            <span>AYBU Etlik 15 Temmuz Kampüsü</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <span>aybu@teknofestkulubu.org</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📷</span>
            <span>@aybuteknofest</span>
          </div>
        </div>

        {/* SAĞ TARAF: Form VEYA Başarı Mesajı */}
        <div className="contact-form-box">
          
          {!isSubmitted ? (
            /* DURUM 1: Form Henüz Gönderilmediyse GÖSTER */
            <>
              <h2>✉️ Bize Ulaşın</h2>
              <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Örn: Ahmet Yılmaz" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>E-Posta Adresiniz</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="ornek@email.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
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
                    name="message" 
                    rows="5" 
                    placeholder="Bize ne söylemek istersiniz?" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className="btn-send">
                  Gönder 🚀
                </button>
              </form>
            </>
          ) : (
            /* DURUM 2: Form Gönderildiyse BUNU GÖSTER */
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