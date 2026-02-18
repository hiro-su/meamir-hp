'use client';

import { Box, Container, Typography, Grid, Divider } from '@mui/material';

const companyInfo = [
  {
    label: '会社名',
    value: 'Meamir（メアミル）',
  },
  {
    label: '代表取締役',
    value: (
      <Box>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 300, mb: 1 }}>
          杉本 浩史
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
          株式会社COZOUにて取締役CTO、NowDo株式会社にてPM/テックリードを兼任中
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          サイボウズ株式会社品質保証部にてキャリアをスタート。その後、サイボウズスタートアップスにて開発を経験し、IIJ（インターネットイニシアティブ）にてインターネット管理、データセンター運用、クラウドサービスの開発リーダーを歴任。30歳にて、Meamirを創業。
        </Typography>
      </Box>
    ),
  },
  {
    label: '創立',
    value: '2017年',
  },
  {
    label: '事業内容',
    value: (
      <Box component="ul" sx={{ m: 0, pl: 2 }}>
        <li>システム開発</li>
        <li>保守運用</li>
        <li>ハードウェア開発</li>
      </Box>
    ),
  },
  {
    label: '住所',
    value: '〒102-0072 東京都千代田区飯田橋3-2-10-701',
  },
];

export default function Company() {
  return (
    <Box id="company" sx={{ py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: { xs: 4, md: 8 }, fontWeight: 300, fontSize: { xs: '2rem', md: '3.75rem' } }}
        >
          会社概要
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {companyInfo.map((info, index) => (
            <Box key={index}>
              <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />
              <Grid container spacing={{ xs: 2, md: 4 }} sx={{ py: { xs: 3, md: 4 }, alignItems: 'flex-start' }}>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: 'text.secondary',
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      pt: { xs: 0, sm: 0.5 },
                      mb: { xs: 1, sm: 0 },
                    }}
                  >
                    {info.label}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  {typeof info.value === 'string' ? (
                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 300 }}>
                      {info.value}
                    </Typography>
                  ) : (
                    info.value
                  )}
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
