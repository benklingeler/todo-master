import { Button, Typography, useTheme } from '@mui/material';
import shadows from '@mui/material/styles/shadows';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { SignIn } from '../redux/slices/authentication';
import { RootState } from '../redux/store';

export default function LandingPage() {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.authentication.loading);

  return (
    <>
      <Typography variant={'h1'}>Hallo Welt!</Typography>
      <Button
        onClick={() => {
          dispatch(SignIn({ email: '', password: '' }));
        }}>
        Hallo Welt! {loading == 'loading' ? 'Loading' : 'Not loading'}
      </Button>
    </>
  );
}
