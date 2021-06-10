import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Alert from "./Alert";

const imageSize = { width: 200, height: 133 };

const useStyles = makeStyles({
  thumbnail: {
    width: imageSize.width,
    height: imageSize.height,
    boxShadow: "none",
  },
  hide: {
    display: "none",
  },
});

export default function ListItem({ state }) {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setLoading] = React.useState(true);

  function handleClick() {
    return history.push({ pathname: "/photo", state });
  }

  return state && state.uri ? (
    <Grid item xs={12} sm={6} md={4} onClick={handleClick}>
      {isLoading && (
        <Skeleton
          variant="rect"
          className={classes.thumbnail}
          data-testid="thumbnail-skeleton"
        />
      )}
      <CardMedia
        className={isLoading ? classes.hide : classes.thumbnail}
        p={5}
        component="img"
        image={`${state.uri}_2.jpg`}
        title={state.title}
        alt={state.title}
        onLoad={() => setLoading(false)}
        data-testid="thumbnail-item"
      />
    </Grid>
  ) : (
    <Alert title="Loading thumbnail image fail" />
  );
}
