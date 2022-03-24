export default function TestBunnyStream() {
  const iframe_link =
    "https://iframe.mediadelivery.net/embed/31191/9fe3f539-9ca2-4132-a506-54a99d614178";

  return (
    <iframe
      src={iframe_link}
      loading="lazy"
      style={{
        border: "none",
        position: "absolute",
        top: 10,
        // right: "50%",
        // left: "50%",
        height: "33%",
        width: "33%",
      }}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen={true}
    ></iframe>
  );
}
