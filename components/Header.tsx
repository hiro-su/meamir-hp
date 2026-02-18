'use client';

import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';

const navItems = [
  { name: '事業内容', href: '#services' },
  { name: '制作実績', href: '#works' },
  { name: '会社概要', href: '#company' },
  { name: 'お問い合わせ', href: '#contact' },
];

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        backgroundColor: 'rgba(255,255,255,0.8)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>
          Meamir
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              underline="none"
              color="text.primary"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.6 },
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
