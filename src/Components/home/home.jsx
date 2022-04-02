import AboutUs from '../about/about.js';
import React from 'react';
import './style.css';
import useStyles from './styles.js';
import cards from '../courses.js';

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

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <header>
        <HeaderInfo />
        {/* <AboutUs /> */}
      </header>
      <main>
        <CourseList />
      </main>
    </div>
  );
}

const NavBar = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <PhotoCameraIcon className={clasess.icon} /> */}
          <Typography variant="body" paragraph position="center">
            Build your base in Coding
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const HeaderInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container} maxWidth="sm">
        <Typography
          align="center"
          color="primary"
          component="h4"
          variant="h4"
          gutterBottom
        >
          We will pick you up from where you get stuck :)
        </Typography>
        <Typography
          align="center"
          component="body"
          variant="body"
          paragraph
          gutterBottom
        >
          Hello students, <br />
          CodeBase is a community of programming experts, who would like to
          share their knowledge and skills with you.
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item justify="center">
              <ButtonGroup>
                <Button variant="outlined">About us </Button>
                <Button variant="contained">Courses </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

const CourseList = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container} maxWidth="md">
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
  return (
    <Grid justify="center" item xs={9} sm={6} md={3}>
      <Card>
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
          <Typography paragraph variant="body">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>{/* <OpenInFullIcon /> */}</CardActions>
      </Card>
    </Grid>
  );
};
