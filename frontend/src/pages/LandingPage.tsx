import { Button, Typography, useTheme } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { SignIn } from '../redux/slices/authentication';
import { RootState } from '../redux/store';
import { useTranslation } from 'react-i18next';
import { getTranslationLanguage, setTranslation } from '../services/translationService';

export default function LandingPage() {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.authentication.loading);

  const { t } = useTranslation();

  const toggleLanguage = () => {
    setTranslation(getTranslationLanguage() == 'de' ? 'en' : 'de');
  };

  return (
    <>
      <Typography variant={'h1'}>Hallo Welt!</Typography>
      <Button
        onClick={() => {
          dispatch(SignIn({ email: '', password: '' }));
        }}>
        <>
          {t('button.save')} {loading == 'loading' ? 'Loading' : 'Not loading'}
        </>
      </Button>
      <Button
        onClick={() => {
          toggleLanguage();
        }}>
        Toggle Language
      </Button>
    </>
  );
}
