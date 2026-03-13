import React, { useState } from 'react';
import './Register.css';

function Register() {
  // Formun gönderilip gönderilmediğini kontrol eden state
  const [formGonderildi, setFormGonderildi] = useState(false);

  // Başlangıç değerlerini bir değişkende tutalım ki sonra kolayca sıfırlayabilelim
  const initialState = {
    adSoyad: '',
    email: '',
    bolum: '',
    ilgiAlani: 'Ar-Ge, İnovasyon ve Proje Koordinatörlüğü'
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Başvuru Verisi:", formData);
    setFormGonderildi(true);
    window.scrollTo(0, 0);
  };

  // --- YENİ EKLENEN FONKSİYON ---
  const yeniBasvuruYap = () => {
    setFormData(initialState); 
    setFormGonderildi(false);  
  };

  return (
    <div className="page-container">
      
      {/* KOSUL: Eğer form gönderildiyse Teşekkür Mesajını göster */}
      {formGonderildi ? (
        <div className="success-message">
          <div className="check-icon">✅</div>
          <h2>Başvurunuz Alındı!</h2>
          <p>
            Aramıza hoş geldin <strong>{formData.adSoyad}</strong>. <br />
            <strong>{formData.ilgiAlani}</strong> başvurunu aldık. 
            En kısa sürede seninle iletişime geçeceğiz.
          </p>
          
          {/* Butona tıklayınca artık yeni fonksiyon çalışacak */}
          <button className="btn-back" onClick={yeniBasvuruYap}>
            Yeni Başvuru Yap
          </button>
        </div>
      ) : (
        
        /* DEGILSE: Formu göster */
        <>
          <h2>Aramıza Katıl</h2>
          <p style={{textAlign:'center', marginBottom:'20px', color:'#555'}}>
            AYBU Teknofest Kulübü ailesinin bir parçası olmak için formu doldurun.
          </p>

          <form onSubmit={handleSubmit} className="register-form">
            <label>Ad Soyad:</label>
            <input 
              type="text" name="adSoyad" 
              value={formData.adSoyad} onChange={handleChange} required 
              placeholder="Adınız Soyadınız"
            />

            <label>Email:</label>
            <input 
              type="email" name="email" 
              value={formData.email} onChange={handleChange} required 
              placeholder="ornek@ogrenci.aybu.edu.tr"
            />

            <label>Okul Bölümünüz:</label>
            <input 
              type="text" name="bolum" 
              value={formData.bolum} onChange={handleChange} required 
              placeholder="Bilgisayar Mühendisliği"
            />

            <label>İlgi Alanı ve Koordinatörlük Seçimi:</label>
            <select name="ilgiAlani" value={formData.ilgiAlani} onChange={handleChange}>
              <option value="Ar-Ge, İnovasyon ve Proje Koordinatörlüğü">
                Ar-Ge, İnovasyon ve Proje Koordinatörlüğü
              </option>
              <option value="Mentörlük ve Motivasyon Koordinatörlüğü">
                Mentörlük ve Motivasyon Koordinatörlüğü
              </option>
              <option value="Dış İlişkiler ve Sponsorluk Koordinatörlüğü">
                Dış İlişkiler ve Sponsorluk Koordinatörlüğü
              </option>
              <option value="Etkinlik ve Organizasyon Koordinatörlüğü">
                Etkinlik ve Organizasyon Koordinatörlüğü
              </option>
              <option value="Yönetim Projelendirme Koordinatörlüğü">
                Yönetim Projelendirme Koordinatörlüğü
              </option>
              <option value="Operasyonel Takip ve Web Tasarımı Koordinatörlüğü">
                Operasyonel Takip ve Web Tasarımı Koordinatörlüğü
              </option>
              <option value="Medya ve Tanıtım Koordinatörlüğü">
                Medya ve Tanıtım Koorditörlüğü
              </option>
            </select>

            <button type="submit">Başvuruyu Gönder</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Register;