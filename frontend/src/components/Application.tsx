import { ThemeProvider } from '@mui/system';
import theme from '../utils/theme/Theme';
import Router from './Router';

export default function Application() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
