'use client';

import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden',
        pt: 10, // Header height offset
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 200,
              mb: 2,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            シンプルであること、
            <br />
            それが究極の洗練。
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 300,
              color: 'text.secondary',
              mt: 4,
              maxWidth: '600px',
              // fontStyle: 'italic', // 日本語ではitalicはあまり使わない
            }}
          >
            デザインと技術を通じて、複雑な課題をクリアにします。
          </Typography>
        </Box>
      </Container>

      {/* Abstract Background Element */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
}
