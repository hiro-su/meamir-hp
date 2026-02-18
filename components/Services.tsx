'use client';

import { Box, Container, Grid, Typography, Divider } from '@mui/material';

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
    <Box id="services" sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, fontWeight: 300 }}>
          事業内容
        </Typography>

        <Box>
          {services.map((service, index) => (
            <Box key={index}>
              <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />
              <Grid container spacing={4} sx={{ py: 8 }}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h4" sx={{ fontWeight: 400 }}>
                    {`0${index + 1}`}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h4" sx={{ fontWeight: 500, mb: 2 }}>
                    {service.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />
        </Box>
      </Container>
    </Box>
  );
}
