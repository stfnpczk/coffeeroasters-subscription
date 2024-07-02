import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './styling/Globals';
import { Fraunces, Barlow } from 'next/font/google';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export const fraunces = Fraunces({
  weight: ['700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
  subsets: ['latin'],
});

export const barlow = Barlow({
  weight: ['400'],
  variable: '--font-barlow',
  display: 'swap',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Coffeeroasters subscription site',
  description:
    'This is a solution to the Coffeeroasters subscription site challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${fraunces.variable} ${barlow.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
