export default function TestBunnyStream() {
  const iframe_link =
    "https://iframe.mediadelivery.net/embed/31191/f8c27496-5ffa-48f8-ba6e-7836a9ec1e02?autoplay=false&preload=false";

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
