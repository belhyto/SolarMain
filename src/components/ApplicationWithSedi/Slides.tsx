import { Box, Card, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  detail: string;
  img: string;
};

const Slides = ({ title, detail, img }: Props) => {
  return (
    <Box padding={{ md: '12px 46px', sm: '8px' }}>
      <Card
        sx={{
          width: '100%',
          height: { md: '400px', sm: 'auto' },
          background: 'radial-gradient(circle at top left, #FFF1CB, #FFFFFF)',
          padding: '16px 16px',
          borderRadius: '50px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Stack
          direction={{ md: 'row', sm: 'column', xs: 'column' }}
          sx={{ width: '100%', height: '100%' }}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={3}
        >
          <Box sx={{ width: { md: '70%', sm: '100%' }, height: '300px' }}>
            <img
              style={{ width: '100%', height: '100%', objectFit: 'contain'}}
              src={img}
              alt="Image"
            />
          </Box>
          <Stack direction={'column'} justifyContent={'center'} sx={{ height: '100%' }} spacing={2}>
            <p className='text-2xl font-semibold '>{title}</p>
            <p>{detail}</p>
          </Stack>
        </Stack>
        {/* Add the pseudo-element for the background with rounded corners and the gradient */}
        <span className="card-background" />
      </Card>
    </Box>
  );
};

export default Slides;
