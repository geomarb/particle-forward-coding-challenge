import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import CloseIcon from "@material-ui/icons/Close";
import CardMedia from "@material-ui/core/CardMedia";
import Header from "../components/Header";
import Alert from "../components/Alert";

const useStyles = makeStyles(() => ({
  hide: {
    display: "none",
  },
}));

export default function PhotoPage({ location, history }) {
  const classes = useStyles();
  const [isLoading, setLoading] = React.useState(true);

  if (!location || !location.state) {
    return (
      <>
        <Header />
        <Alert
          title="Fail loading photo"
          message="It is missing params. Make sure your accessing it from our Home Page"
        />
      </>
    );
  }

  const { uri, title } = location.state;

  function handleClose() {
    return history.goBack();
  }

  return (
    <Box bgcolor="text.primary" color="primary.contrastText" p={1}>
      <Grid container>
        <Grid item xs={11}>
          <Typography variant="h5" component="h2" data-testid="title">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Box align="end">
            <CloseIcon
              fontSize="large"
              onClick={handleClose}
              data-testid="close-icon"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0}>
            {isLoading && (
              <Skeleton
                variant="rect"
                width="100%"
                height="80vh"
                data-testid="photo-skeleton"
              />
            )}
            <CardMedia
              className={isLoading ? classes.hide : ""}
              p={5}
              component="img"
              image={`${uri}_27.jpg`}
              title={title}
              alt={title}
              onLoad={() => setLoading(false)}
              data-testid="photo"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
