import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  container: {
    padding: '2rem 0 0 2rem',
  },
  footer: {
    width: '100%',
    // minimumHeight='200px'
    background: '#567567',
    padding: '2rem',
  },
  icon: {
    marginRight: '1rem',
  },
});

export default useStyles;
