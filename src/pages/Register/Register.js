import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import API_URL from '../../config';

function Register() {
  const [formGonderildi, setFormGonderildi] = useState(false);

  // Telefon numarasını (telefon) ve öğrenci numarasını ekledik
  const initialState = {
    adSoyad: '',
    email: '',
    telefon: '',
    ogrenciNo: '', 
    bolum: '',
    ilgiAlani: 'Ar-Ge, İnovasyon ve Proje Koordinatörlüğü'
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Backend'in beklediği tam sözlük
    const gonderilecekVeri = {
      full_name: formData.adSoyad,
      email: formData.email,
      phone: formData.telefon,           // TELEFON NUMARASI 
      student_number: formData.ogrenciNo, // ÖĞRENCİ NUMARASI
      department: formData.bolum,
      motivation: formData.ilgiAlani 
    };

    try {
      const response = await fetch(`${API_URL}/api/uye-basvurulari/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gonderilecekVeri),
      });

      if (response.ok) {
        setFormGonderildi(true);
        window.scrollTo(0, 0);
      } else {
        alert("Başvuru gönderilirken bir hata oluştu. Gerekli alanları kontrol edin.");
      }
    } catch (error) {
      console.error("Sunucuya bağlanılamadı:", error);
      alert("Sunucu ile bağlantı kurulamadı.");
    }
  };

  const yeniBasvuruYap = () => {
    setFormData(initialState); 
    setFormGonderildi(false);  
  };

  return (
    <div className="page-container">
      {!formGonderildi && (
        <div className="reg-head">
          <span className="reg-eyebrow">Üyelik</span>
          <h1 className="reg-title">Aramıza Katıl</h1>
          <p className="reg-sub">
            AYBÜ Teknofest Kulübü ailesinin bir parçası olmak için formu doldur,
            geri kalanını ekibimiz halletsin.
          </p>
        </div>
      )}

      {formGonderildi ? (
        <div className="success-message">
          <div className="success-badge">
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <circle className="sb-circle" cx="26" cy="26" r="24" fill="none" />
              <path className="sb-check" fill="none" d="M14 27 l8 8 l16 -17" />
            </svg>
          </div>

          <h2>Başvurun Alındı!</h2>
          <p className="success-lead">
            Aramıza hoş geldin <strong>{formData.adSoyad}</strong>. Başvurunu
            başarıyla aldık, ekibimiz en kısa sürede seninle iletişime geçecek.
          </p>

          <div className="success-summary">
            <div>
              <small>Koordinatörlük</small>
              <span>{formData.ilgiAlani}</span>
            </div>
            <div>
              <small>E-posta</small>
              <span>{formData.email}</span>
            </div>
            <div>
              <small>Telefon</small>
              <span>{formData.telefon}</span>
            </div>
          </div>

          <div className="success-next">
            <strong>Sırada ne var?</strong>
            <ul>
              <li>Ekibimiz başvurunu inceleyecek</li>
              <li>E-posta veya telefon ile sana ulaşacağız</li>
              <li>Bu arada bizi sosyal medyadan takip edebilirsin</li>
            </ul>
          </div>

          <div className="success-actions">
            <Link to="/" className="btn-home">Ana Sayfaya Dön</Link>
            <a
              className="btn-ig"
              href="https://www.instagram.com/teknofestaybu"
              target="_blank"
              rel="noreferrer"
            >
              Bizi Takip Et
            </a>
          </div>

          <button className="btn-back" onClick={yeniBasvuruYap}>
            Yeni Başvuru Yap
          </button>
        </div>
      ) : (
        <div className="reg-layout">
          {/* SOL: Neden katılmalı + süreç */}
          <aside className="reg-info">
            <h3>Neden Katılmalısın?</h3>
            <ul className="reg-benefits">
              <li>
                <span className="reg-ico">🚀</span>
                <div>
                  <strong>Gerçek projeler</strong>
                  <p>Fikirlerini ekip arkadaşlarınla birlikte ürüne dönüştür.</p>
                </div>
              </li>
              <li>
                <span className="reg-ico">🎓</span>
                <div>
                  <strong>Eğitim ve atölyeler</strong>
                  <p>Teknik yetkinliğini birlikte geliştirdiğimiz etkinliklere katıl.</p>
                </div>
              </li>
              <li>
                <span className="reg-ico">🤝</span>
                <div>
                  <strong>Güçlü bir topluluk</strong>
                  <p>Mentorlar, sponsorlar ve aynı hedefe koşan arkadaşlarla tanış.</p>
                </div>
              </li>
            </ul>

            <div className="reg-steps">
              <strong>Süreç nasıl işliyor?</strong>
              <ol>
                <li><span>1</span> Formu doldur ve gönder</li>
                <li><span>2</span> Ekibimiz seninle iletişime geçsin</li>
                <li><span>3</span> Koordinatörlüğünle tanış, projelere başla</li>
              </ol>
            </div>
          </aside>

          {/* SAĞ: Başvuru formu */}
          <div className="reg-form-box">
            <h2>Başvuru Formu</h2>
            <p className="reg-hint">Tüm alanlar zorunludur.</p>

            <form onSubmit={handleSubmit} className="register-form">
              <div className="reg-field">
                <label htmlFor="adSoyad">Ad Soyad</label>
                <input
                  id="adSoyad" type="text" name="adSoyad"
                  value={formData.adSoyad} onChange={handleChange} required
                  placeholder="Adınız Soyadınız" autoComplete="name"
                />
              </div>

              <div className="reg-row">
                <div className="reg-field">
                  <label htmlFor="email">E-posta</label>
                  <input
                    id="email" type="email" name="email"
                    value={formData.email} onChange={handleChange} required
                    placeholder="ornek@ogrenci.aybu.edu.tr" autoComplete="email"
                  />
                </div>
                <div className="reg-field">
                  <label htmlFor="telefon">Telefon</label>
                  <input
                    id="telefon" type="tel" name="telefon"
                    value={formData.telefon} onChange={handleChange} required
                    placeholder="0555 555 55 55" autoComplete="tel"
                  />
                </div>
              </div>

              <div className="reg-row">
                <div className="reg-field">
                  <label htmlFor="ogrenciNo">Öğrenci Numarası</label>
                  <input
                    id="ogrenciNo" type="text" name="ogrenciNo"
                    value={formData.ogrenciNo} onChange={handleChange} required
                    placeholder="Örn: 23050100120" inputMode="numeric"
                  />
                </div>
                <div className="reg-field">
                  <label htmlFor="bolum">Okul Bölümü</label>
                  <input
                    id="bolum" type="text" name="bolum"
                    value={formData.bolum} onChange={handleChange} required
                    placeholder="Bilgisayar Mühendisliği"
                  />
                </div>
              </div>

              <div className="reg-field">
                <label htmlFor="ilgiAlani">İlgi Alanı ve Koordinatörlük Seçimi</label>
                <select id="ilgiAlani" name="ilgiAlani" value={formData.ilgiAlani} onChange={handleChange}>
                  <option value="Ar-Ge, İnovasyon ve Proje Koordinatörlüğü">Ar-Ge, İnovasyon ve Proje Koordinatörlüğü</option>
                  <option value="Mentörlük ve Motivasyon Koordinatörlüğü">Mentörlük ve Motivasyon Koordinatörlüğü</option>
                  <option value="Dış İlişkiler ve Sponsorluk Koordinatörlüğü">Dış İlişkiler ve Sponsorluk Koordinatörlüğü</option>
                  <option value="Etkinlik ve Organizasyon Koordinatörlüğü">Etkinlik ve Organizasyon Koordinatörlüğü</option>
                  <option value="Yönetim Projelendirme Koordinatörlüğü">Yönetim Projelendirme Koordinatörlüğü</option>
                  <option value="Operasyonel Takip ve Web Tasarımı Koordinatörlüğü">Operasyonel Takip ve Web Tasarımı Koordinatörlüğü</option>
                  <option value="Medya ve Tanıtım Koordinatörlüğü">Medya ve Tanıtım Koordinatörlüğü</option>
                </select>
              </div>

              <button type="submit">Başvuruyu Gönder 🚀</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;