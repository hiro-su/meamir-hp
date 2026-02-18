'use client';

import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 15 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 300 }}>
            お問い合わせ
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 300, maxWidth: '600px', mx: 'auto' }}>
            新しいプロジェクトのご相談や、創造的なアイデア、協業の機会など、いつでもお待ちしております。
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="name"
                label="お名前"
                variant="standard"
                InputProps={{ sx: { fontSize: '1.2rem', py: 1 } }}
                InputLabelProps={{ sx: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                name="email"
                label="メールアドレス"
                variant="standard"
                InputProps={{ sx: { fontSize: '1.2rem', py: 1 } }}
                InputLabelProps={{ sx: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                label="メッセージ"
                multiline
                rows={4}
                variant="standard"
                InputProps={{ sx: { fontSize: '1.2rem', py: 1 } }}
                InputLabelProps={{ sx: { fontSize: '1rem' } }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 6,
                  borderRadius: 0,
                  borderWidth: 1.5,
                  fontSize: '1rem',
                  borderColor: 'text.primary',
                  color: 'text.primary',
                  '&:hover': {
                    backgroundColor: 'text.primary',
                    color: 'background.default',
                    borderColor: 'text.primary',
                  },
                }}
              >
                送信する
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            Tokyo, Japan
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
