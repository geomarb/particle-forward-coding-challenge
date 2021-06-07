import React from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "./Alert";

import ThumbItem from "./ThumbnailItem";

export default function ThumbList({ images, title, setPhotoState }) {
  return (
    <Grid container p={1} spacing={5} data-testid="thumbnail-list">
      {images && images.length > 0 ? (
        images.map(({ uri }, index) => (
          <ThumbItem
            key={index}
            uri={uri}
            title={title}
            setPhotoState={setPhotoState}
          />
        ))
      ) : (
        <Alert severity="info" message="No car images found" />
      )}
    </Grid>
  );
}
