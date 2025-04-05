import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '500', '600'], // para texto normal con variaciones
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const playfair_display = Playfair_Display({
  weight: ['400', '700'], // regular y bold para títulos
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});
