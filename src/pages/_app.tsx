import React from 'react';
import { TourProvider } from '@reactour/tour';

import type { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <TourProvider
      steps={steps}
      styles={{ popover: props => ({ ...props, background: '#fff000' }) }}
    >
      <Component {...pageProps} />
      <GlobalStyles />
    </TourProvider>
  );
};

const steps = [
  {
    selector: '.buttons-first',
    content: 'Botões',
  },
  {
    selector: '.buttons-first-one',
    content: 'Primeiro botão',
  },
  {
    selector: '.buttons-first-two',
    content: 'Segundo botão',
  },
  {
    selector: '.buttons-first-three',
    content: 'Terceiro botão',
  },
  {
    selector: '.form-first',
    content: 'This is my secund Step',
  },
  {
    selector: '.image-first',
    content: 'This is my third Step',
  },
];

export default MyApp;
