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
        <Typography variant="body1">杉本 浩史</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          株式会社COZOUにて取締役CTO、NowDo株式会社にてPM/テックリードを兼任中
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
    <Box id="company" sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, fontWeight: 300 }}>
          会社概要
        </Typography>

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          {companyInfo.map((info, index) => (
            <Box key={index}>
              <Divider sx={{ borderColor: 'rgba(0,0,0,0.1)' }} />
              <Grid container spacing={4} sx={{ py: 4, alignItems: 'center' }}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" sx={{ fontWeight: 400, color: 'text.secondary' }}>
                    {info.label}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  {typeof info.value === 'string' ? (
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
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
