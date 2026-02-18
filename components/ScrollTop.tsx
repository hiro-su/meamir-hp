'use client';

import { useState, useEffect } from 'react';
import { Fab, useTheme, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTop() {
  const [trigger, setTrigger] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setTrigger(true);
      } else {
        setTrigger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        size="medium"
        aria-label="scroll back to top"
        color="default"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 999,
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: theme.shadows[4],
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
