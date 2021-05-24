import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import meditation from '../../../Assets/meditation.jfif';
import nsut2 from '../../../Assets/nsut2.jfif';
import nsut1 from '../../../Assets/nsut1.jfif'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {
     eventName:"Health and Happiness",
     eventLink:"https://www.eventbrite.com/e/health-and-happiness-workshop-tickets-141037654421?aff=ebdssbcitybrowse",
     eventImage:nsut1,
   },
   {
    eventName:"Poetry and The Creative Mind",
    eventLink:"https://www.eventbrite.com/e/poetry-the-creative-mind-virtual-gala-supporting-national-poetry-month-registration-138838474615?aff=ebdssbcitybrowse",
    eventImage:nsut2,
  },
  {
    eventName:"Live Guided Meditation",
    eventLink:"https://www.eventbrite.com/e/live-guided-meditation-hosted-by-meditation-breaks-registration-101689955394?aff=ebdssbcitybrowse",
    eventImage:meditation,
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Events Today
            </Typography>
          
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.eventImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.eventName}
                    </Typography>
                    <Typography>
                     
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link href={card.eventLink}>
                        View
                    </Link>
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
     
    </React.Fragment>
  );
}