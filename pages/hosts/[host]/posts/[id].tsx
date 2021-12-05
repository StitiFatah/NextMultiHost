const name_dico = {
  localhost: "host local",
  "next-multiple-hosts-one.archeroe.xyz": "host one",
  "next-multiple-hosts-two.archeroe.xyz": "host two",
};

export async function getStaticProps(context) {
  console.log("getStaticProps", context);
  const host = context.params.host;
  const id = context.params.id;
  const name = name_dico[host];
  return {
    props: {
      host,
      id,
      name,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: "a", host: "localhost" } },
      { params: { id: "a", host: "next-multiple-hosts-one.archeroe.xyz" } },
      { params: { id: "a", host: "next-multiple-hosts-two.archeroe.xyz" } },
    ],
    // fallback: "blocking",
    fallback: false,
  };
}

export default function TestMultipleHosts({ host, id, name }) {
  return (
    <div>
      <h1>Test Multiple Hosts</h1>
      <div>
        Host : {host} , Id : {id}
      </div>
      <div>
        name : <strong>{name}</strong>
      </div>
    </div>
  );
}
