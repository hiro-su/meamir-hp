'use client';

import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

const services = [
  {
    title: 'Web開発',
    description: 'Next.jsやReactなどの最新技術を使用し、高性能でスケーラブルなWebアプリケーションを構築します。',
  },
  {
    title: 'UI/UX デザイン',
    description: '機能性と美しさを両立させた、直感的で使いやすいデジタル体験をデザインします。',
  },
  {
    title: 'デジタル戦略',
    description: 'ビジネスの目標達成に向けて、テクノロジーを活用した最適な戦略を提案・サポートします。',
  },
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <FadeInWhenVisible>
          <Typography
            variant="h2"
            sx={{ mb: { xs: 4, md: 8 }, fontWeight: 300, fontSize: { xs: '2rem', md: '3.75rem' } }}
          >
            事業内容
          </Typography>
        </FadeInWhenVisible>

        <Box>
          {services.map((service, index) => (
            <FadeInWhenVisible key={index}>
              <Box
                sx={{
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    bgcolor: '#1a1a1a',
                    color: '#ffffff',
                    pl: { xs: 1, md: 2 },
                    '& .MuiTypography-root': { color: '#ffffff' },
                    '& .MuiDivider-root': { borderColor: 'rgba(255,255,255,0.2)' },
                  },
                }}
              >
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)', transition: 'border-color 0.3s' }} />
                <Grid container spacing={4} sx={{ py: { xs: 4, md: 8 }, alignItems: 'center' }}>
                  <Grid item xs={12} md={3}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 200,
                        opacity: 0.5,
                        fontFamily: 'var(--font-inter)',
                        fontSize: { xs: '1.5rem', md: '2.125rem' },
                      }}
                    >
                      {`0${index + 1}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 400,
                        mb: { xs: 2, md: 0 },
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 300, lineHeight: 2 }}>
                      {service.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </FadeInWhenVisible>
          ))}
          <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />
        </Box>
      </Container>
    </Box>
  );
}
