'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locale } = useRouter();
  const locales = ['fr', 'en', 'es'];

  const flags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸'
  };

  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end',
      padding: '10px 20px',
      background: 'rgba(255,255,255,0.1)',
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: 1000
    }}>
      {locales
        .filter((lang) => lang !== locale)
        .map((lang) => (
          <Link key={lang} href="/" locale={lang} scroll={false}>
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              title={`Passer en ${lang === 'fr' ? 'français' : lang === 'en' ? 'anglais' : 'espagnol'}`}
            >
              {flags[lang]}
            </button>
          </Link>
        ))}
    </div>
  );
}
📌 Pour que ton composant s'affiche :
Importe-le dans pages/index.js (ou ton fichier de page) :





'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locale } = useRouter();
  const locales = ['fr', 'en', 'es']; // Ajout de 'es'

  const flags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸' // Drapeau espagnol ajouté
  };

  return (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginBottom: '20px' }}>
      {locales
        .filter((lang) => lang !== locale)
        .map((lang) => (
          <Link key={lang} href="/" locale={lang} scroll={false}>
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              title={`Passer en ${lang === 'fr' ? 'français' : lang === 'en' ? 'anglais' : 'espagnol'}`}
            >
              {flags[lang]}
            </button>
          </Link>
        ))}
    </div>
  );
}