'use client';

import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Meamir. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
