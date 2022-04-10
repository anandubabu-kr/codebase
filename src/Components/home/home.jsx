import React from 'react';
import useStyles from './styles.js';
import cards from '../courses.js';
import logo from '../../assets/Log-horizondal.png'
import {
  Typography,
  ButtonGroup,
  Button,
  Card,
  Container,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Toolbar,
  Grid,
  AppBar,
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const classes = useStyles();
  const courses = useSelector((state) => state.courses)
  console.log('Dispatched : ', courses)
  return (
    <div className={classes.main}>
      <NavBar />
      <header>
        <HeaderInfo />
      </header>
      <main>
        <CourseList />
      </main>
    </div>
  );
}

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appbar} color="inherit" position="relative">
        <Toolbar>
          <img src={logo} className={classes.appBarLogo} alt="Horizondal CodeBasics logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const HeaderInfo = () => {
  const classes = useStyles();
  return (
    <div>
        <Grid container className={classes.container} spacing={2}>
          <Grid item xs={12} md={6}
          direction='column'
          >
            {/* Typography variant="h4" component="h4" */}
            <Typography variant="h4" component="h4" className={classes.header}
            >
              We will pick you up from where you get stuck :)
            </Typography>
            <p
              className={classes.header__info}
            >
              Hello students, <br />
              CodeBase is a community of programming experts, who would like to
              share their knowledge and skills with you.
            </p>
            <div>
                  <ButtonGroup className={classes.header__info}>
                    <Button variant="contained" onClick={()=>{window.location='#courselist'}} >Courses </Button>
                    <Button variant="outlined" onClick={()=>{alert('ERROR : 404 - Page is yet to finish !')}}>About us </Button>
                  </ButtonGroup>
            </div>
          </Grid>
        </Grid>

    </div>
  );
};

const CourseList = () => {
  const classes = useStyles();

  return (
    <div>
      <Container id='courselist' className={classes.course__lists} >
      <Typography variant="h4" component="h4" textAlign='center' className={classes.course__heading}>
      Pick your tech to start
      </Typography>
        <Grid container justifyContent="center" spacing={5}>
          {cards.map((card) => (
            <CourseItem key={card.id} card={card} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const CourseItem = (props) => {
  const card = props.card;
  const classes = useStyles();
  return (
    <Grid  textAlign='center' alignItems='center' item xs={12} sm={6} md={3}>
      <Card  className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          image={card.image}
          alt="Course Image"
        />
        <CardContent>
          <Typography variant="h6" component="h6">
            {card.title}
            </Typography>
          <Typography paragraph >
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>{/* <OpenInFullIcon /> */}</CardActions>
      </Card>
    </Grid>
  );
};
