import ThumbList from "../components/ThumbnailList";
import Header from "../components/Header";
import Alert from "../components/Alert";

export default function HomePage({ state, setPhotoState }) {
  return (
    <>
      <Header />
      {state && state.images ? (
        <ThumbList
          images={state.images}
          title={state.title}
          setPhotoState={setPhotoState}
        />
      ) : (
        <Alert
          title="Loading data has failed"
          message="Could not load data correctly. Please, contact our support."
        />
      )}
    </>
  );
}
