import type { Metadata } from 'next';
import '@/shared/styles/reference.css';
import '@/shared/styles/index.css';
import { Header } from '@/shared/components/Header/Header';
import { Footer } from '@/shared/components/Footer/Footer';
export const metadata: Metadata = {
  title: { default: 'Compass — каталог профессий', template: '%s · Compass' },
  description:
    'Исследуй сферы, профессии и специальности. Узнай о работе специалистов и выбери свой путь.',
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#content" className="skip-link">
          Перейти к содержимому
        </a>
        <div className="page">
          <Header />
          <main className="view" id="content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
