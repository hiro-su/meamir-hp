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
        pt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ animation: `${fadeIn} 1.5s ease-out` }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mb: 2,
              color: 'text.secondary',
              letterSpacing: '0.2em',
              transform: 'translateX(4px)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            EST. 2017
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 200,
              mb: 4,
              letterSpacing: '0.05em',
              lineHeight: 1.3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              '& span': { display: 'inline-block' },
            }}
          >
            シンプルであること、
            <br />
            それが
            <Box component="span" sx={{ fontStyle: 'italic', fontFamily: 'serif' }}>
              究極
            </Box>
            の洗練。
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 300,
              color: 'text.secondary',
              mt: 6,
              maxWidth: '600px',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 2,
              letterSpacing: '0.05em',
              borderLeft: '1px solid #ddd',
              pl: 3,
            }}
          >
            デザインと技術を通じて、
            <br />
            複雑な課題をクリアにします。
          </Typography>
        </Box>
      </Container>

      {/* Abstract Background Element */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0) 60%)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          background: 'linear-gradient(45deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
}
