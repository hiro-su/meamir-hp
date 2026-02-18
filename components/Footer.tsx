'use client';

import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MEAMIR. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={4}>
            <Link href="#" color="text.secondary" underline="hover">
              Twitter
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Instagram
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
