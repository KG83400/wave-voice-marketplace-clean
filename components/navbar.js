import Link from 'next/link';
import { useRouter } from 'next/router';

export default function navbar() {
  const { locale } = useRouter();
  const locales = ['fr', 'en', 'es'];
  const flags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸',
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#5B42F3',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <Link href="/" locale={locale}>
        <span style={{ fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }}>
          Wave Voice
        </span>
      </Link>

      <div style={{ display: 'flex', gap: '12px' }}>
        {locales
          .filter((lang) => lang !== locale)
          .map((lang) => (
            <Link key={lang} href="/" locale={lang}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  color: '#fff'
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
    </nav>
  );
}