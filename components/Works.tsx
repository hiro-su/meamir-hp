'use client';

import { Box, Container, Grid, Typography } from '@mui/material';

const works = [
  {
    title: 'TOSHO-DOSA SCHOOL 開発',
    category: 'Education / SportsTech',
    year: '2025 - Present',
    image: '/images/works/tosho-dosa.png',
    description: '東京書籍様向けに学校体力測定サービスの開発・運用を行っております。',
  },
  {
    title: 'めっちゃMORIMORIスポーツテストシステム',
    category: 'Government / SportsTech',
    year: '2022 - Present',
    image: '/images/works/morimori.jpg',
    description:
      '大阪府様向けに学校体力測定サービスの開発・運用を行っております。一般社団法人スポーツ能力発見協会様との共同プロジェクトになります。',
  },
  {
    title: 'DOSA会員サイト',
    category: 'Membership / Cloud System',
    year: '2019 - Present',
    image: '/images/works/dosa.png',
    description: '一般社団法人スポーツ能力発見協会様のスポーツ能力測定向けの会員サイトの開発・運用を行っております。',
  },
  {
    title: 'MIFAサッカースクール会員決済システム',
    category: 'Payment / School Management',
    year: '2020 - Present',
    image: '/images/works/mifa.png',
    description:
      'ウカスカジー様（桜井和寿様・GAKU-MC様）が中心となるプロジェクトであるMIFAにおいて、MIFAサッカースクールのHP修正・会員決済システムの開発・運用を行っております。',
  },
  {
    title: 'NowEX',
    category: 'Sports / Web Service',
    year: '2020 - 2021',
    image: '/images/works/nowex.jpg',
    description: 'サッカー選手の本田圭佑様が代表を務められるNowDo株式会社様においてNowEXの開発・運用を行いました。',
  },
  {
    title: 'なでケア',
    category: 'Community / Web Portal',
    year: '2019 - Present',
    image: '/images/works/nadecare.webp',
    description:
      '女子サッカー選手の熊谷紗希が代表理事を務める一般社団法人なでしこケアのサイト開発・運営・システムサポートを行っております。',
  },
];

export default function Works() {
  return (
    <Box id="works" sx={{ py: { xs: 8, md: 15 }, bgcolor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 300, fontSize: { xs: '2rem', md: '3.75rem' } }}>
          制作実績
        </Typography>

        <Typography variant="caption" sx={{ mb: { xs: 4, md: 8 }, color: 'text.secondary', display: 'block' }}>
          ※弊社代表が取締役CTOを務める株式会社COZOUの実績も含まれます。
        </Typography>

        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ mt: { xs: 2, md: 4 } }}>
          {works.map((work, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    '& .work-title': { textDecoration: 'underline' },
                  },
                }}
              >
                <Box
                  sx={{
                    height: 300,
                    bgcolor: '#e0e0e0',
                    mb: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={work.image}
                    alt={work.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" className="work-title" sx={{ fontWeight: 500 }}>
                      {work.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 2, whiteSpace: 'nowrap' }}>
                      {work.year}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                    {work.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {work.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
