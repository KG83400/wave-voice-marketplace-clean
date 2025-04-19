import { useTranslations } from 'next-intl';
import Navbar from '../components/navbar';

export default function Home() {
  const t = useTranslations();

  return (
    <div style={{ backgroundColor: '#7f5af0', minHeight: '100vh', color: '#fff' }}>
      <Navbar />

      <main style={{ textAlign: 'center', marginTop: '120px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>{t('welcome')}</h1>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#fff',
            color: '#7f5af0',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {t('login')}
        </button>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}