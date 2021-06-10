import React from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "./Alert";
import ThumbItem from "./ThumbnailItem";

export default function ThumbList({ state }) {
  return state && state.images && state.images.length > 0 ? (
    <Grid container p={1} spacing={5} data-testid="thumbnail-list">
      {state.images.map(({ id, uri }) => (
        <ThumbItem key={id} state={{ uri, title: state.title }} />
      ))}
    </Grid>
  ) : (
    <Alert severity="info" message="No car images found" />
  );
}
