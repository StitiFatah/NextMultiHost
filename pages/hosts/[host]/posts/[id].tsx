export async function getStaticProps(context) {
  console.log("getStaticProps", context);
  const host = context.params.host;
  const id = context.params.id;
  return {
    props: {
      host,
      id,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: "a", host: "localhost" } },
      { params: { id: "a", host: "next-multiple-hosts-one.vercel.app" } },
      { params: { id: "a", host: "next-multiple-hosts-two.vercel.app" } },
    ],
    fallback: "blocking",
  };
}

export default function TestMultipleHosts({ host, id }) {
  return (
    <div>
      <h1>Test Multiple Hosts</h1>
      <div>
        host : {host} , id : {id}
      </div>
    </div>
  );
}
