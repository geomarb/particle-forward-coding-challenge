import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ThumbList from "../components/ThumbnailList";
import Header from "../components/Header";
import Alert from "../components/Alert";

export default function HomePage() {
  const [state, setState] = React.useState({
    car: null,
    error: null,
    loading: true,
  });

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((car) => setState({ car, loading: false }))
      .catch((error) => setState({ error, loading: false }));
  }, []);

  return (
    <>
      <Header />
      {state.error ? (
        <Alert
          title="Oops! Something went wrong!"
          message="Please try again later or contact our support!"
          showHeader
        />
      ) : state.loading ? (
        <>
          <CircularProgress data-testid="loading" />
        </>
      ) : state.car && state.car.images ? (
        <ThumbList state={state.car} />
      ) : (
        <Alert
          title="Loading data has failed"
          message="Could not load data correctly. Please, contact our support."
        />
      )}
    </>
  );
}
