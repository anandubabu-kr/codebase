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
            <Typography
              component="h4"
              variant="h4"
              gutterBottom
              className={classes.header}
            >
              We will pick you up from where you get stuck :)
            </Typography>
            <Typography
              paragraph
              background='transparent'
              className={classes.header__info}
              gutterBottom
            >
              Hello students, <br />
              CodeBase is a community of programming experts, who would like to
              share their knowledge and skills with you.
            </Typography>
            <div>
                  <ButtonGroup className={classes.header__info}>
                    <Button variant="contained">Courses </Button>
                    <Button variant="outlined">About us </Button>
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
      <Container className={classes.coursel__lists} >
        <Grid container justifyContent="center" spacing={4}>
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
    <Grid justify="center" item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          image="http://unsplash.it/200/200"
          alt="Paella dish"
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
