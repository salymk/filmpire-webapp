import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
}));