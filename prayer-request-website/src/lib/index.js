'use client';
import { createTheme } from '@mui/material/styles';
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from './theme/customizations/themePrimitives';
import { inputsCustomizations } from './theme/customizations/inputs';
import { dataDisplayCustomizations } from './theme/customizations/dataDisplay';
import { feedbackCustomizations } from './theme/customizations/feedback';
import { navigationCustomizations } from './theme/customizations/navigation';
import { surfacesCustomizations } from './theme/customizations/surfaces';

const theme = createTheme({
  colorSchemes,
  shadows,
  shape,

  typography: {
    ...typography,
    htmlFontSize: 10,
    fontFamily: 'var(--font-roboto), sans-serif',
    h1: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
    h2: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
    h3: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
    h4: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
    h5: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
    h6: { fontFamily: 'var(--font-lato), sans-serif', fontWeight: 700 },
  },
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations,
    ...feedbackCustomizations,
    ...navigationCustomizations,
    ...surfacesCustomizations,
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '10px',
        },
      },
    },
  },
});

export default theme;
