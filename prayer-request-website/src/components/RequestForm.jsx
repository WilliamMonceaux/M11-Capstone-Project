'use client';
import React, { useState } from 'react';
import {
  Stack,
  styled,
} from '@mui/material';
import Image from 'next/image';
import CheckMark from '../../public/images/checkmark.png';

const PageWrapper = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

function RequestForm() {
  const [request, setRequest] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [duration, setDuration] = useState('12 hours');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ request, isAnonymous, duration });
  };

  return (
    <>
    </>
  );
}

export { RequestForm };