'use client';

import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', scrollBehavior: 'smooth' }}>
      <Header />
      <Hero />
      <Services />
      <Works />
      <Company />
      <Contact />
      <Footer />
    </Box>
  );
}
