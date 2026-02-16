import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

const fontTheme = createTheme ({
  typography: {
    fontFamily: '"Roboto", "sans-serif"',
    h1: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
    h2: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
    h3: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
    h4: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
    h5: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
    h6: { fontFamily: '"Lato", "sans-serif"', fontWeight: 700 },
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={fontTheme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
