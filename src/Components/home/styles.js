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
    backgroundSize:'cover',
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
    fontWeight:'900 !important',
    fontStyle:'normal',
    marginTop:'20% !important'
  },
  header__info:{
    marginTop:'3rem',
  },
  course__heading:{
    padding:'3rem',
    fontWeight:'900 !important',

  },
  card:{
    minHeight:'100%',
    maxWidth:'300px',
    margin:'auto !important',
    borderRadius:'20px !important'
  },
  course__lists:{
    background:'#C2D5F6',
    padding:'2rem',
    marginBottom:'2rem'
  },
  container: {
    padding: '0 5rem  0 5rem',
    minHeight:'100vh'
  },
  icon: {
    marginRight: '1rem',
  },
});

export default useStyles;
