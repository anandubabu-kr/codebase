import { makeStyles } from '@mui/styles';
import background from '../../assets/Background-logo.png'


const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  main:{
    backgroundImage:`url(${background})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain',
    backgroundPosition:'top center',
  },
  appbar:{
    background:'#FFFFFF',
    padding:'.3rem'
  },
  appBarLogo:{
    maxHeight:'40px'
  },
  header:{
    fontWeight:'900',
    fontStyle:'normal',
    marginTop:'6rem'
  },
  header__info:{
    marginTop:'3rem'
  },
  card:{
    maxHeight:'400px'
  },
  coursel__lists:{
    background:'#C2D5F6',
    padding:'2rem'
  },
  container: {
    padding: '2rem 0 0 2rem',
    minHeight:'100vh'
  },

  icon: {
    marginRight: '1rem',
  },
});

export default useStyles;
