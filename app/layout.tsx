import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import './globals.css';

import { Inter, Noto_Serif_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-inter' });
const notoSerif = Noto_Serif_JP({ subsets: ['latin'], weight: ['200', '300', '400'], variable: '--font-noto-serif' });

export const metadata = {
  title: 'Meamir - IT Solutions',
  description: 'シンプルでアーティスティックなITソリューション',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="noise-overlay" />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
