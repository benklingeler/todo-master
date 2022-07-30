import { createTheme } from '@mui/material';
import Autocomplete from './components/Autocomplete';
import Backdrop from './components/Backdrop';
import Button from './components/Button';
import Card from './components/Card';
import CssBaseline from './components/CssBaseline';
import IconButton from './components/IconButton';
import Input from './components/Input';
import Lists from './components/Lists';
import Paper from './components/Paper';
import Tooltip from './components/Tooltip';
import Typography from './components/Typography';
import palette from './Palette';
import shadows, { customShadows } from './Shadows';
import typography from './Typography';

const theme = createTheme({
  shadows: shadows as any,
  palette: palette,
  customShadows: customShadows,
  typography: typography,
  shape: { borderRadius: 8 },
} as any);

theme.components = {
  ...Button(theme),
  ...Autocomplete(theme),
  ...Backdrop(theme),
  ...Card(theme),
  ...CssBaseline(),
  ...IconButton(theme),
  ...Input(theme),
  ...Lists(theme),
  ...Paper(),
  ...Tooltip(theme),
  ...Typography(theme),
} as any;

export default theme;
