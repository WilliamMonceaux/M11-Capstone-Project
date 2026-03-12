import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { inputsCustomizations } from './inputs';
import { dataDisplayCustomizations } from './dataDisplay';
import { feedbackCustomizations } from './feedback';
import { navigationCustomizations } from './navigation';
import { surfacesCustomizations } from './surfaces';
import { 
  colorSchemes, 
  typography, 
  shadows, 
  shape 
} from '../customizations/themePrimitives';

export default function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // 1. CSS Variable Support (Standard for modern MUI templates)
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          // 2. The Color Palette from themePrimitives.js
          colorSchemes: {
            ...colorSchemes,
          },
          // 3. Core Design Tokens
          typography,
          shadows,
          shape,
          // 4. Component Overrides
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents, // Custom props passed directly to AppTheme
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange defaultMode="light">
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  disableCustomTheme: PropTypes.bool,
  themeComponents: PropTypes.object,
};