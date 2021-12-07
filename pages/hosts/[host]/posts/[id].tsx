import axios from "axios";

const name_dico = {
  localhost: "host local",
  "next-multiple-hosts-one.archeroe.xyz": "host one",
  "next-multiple-hosts-two.archeroe.xyz": "host two",
};

const get_name = async (host_name) => {
  axios
    .get(`http://localhost:5000/domain_name/${host_name}/`)
    .then((response) => {
      return response.data.name;
    })
    .catch((error) => console.log(error));
};

export async function getStaticProps(context) {
  console.log("getStaticProps", context);
  const host = context.params.host;
  const id = context.params.id;
  // const name = name_dico[host];

  const get_db_name = await axios.get(
    `http://127.0.0.1:5000/domain_name/${host}/`
  );

  const db_name = await get_db_name.data.name;
  // const db_name = "hello";

  return {
    props: {
      host,
      id,
      // name,
      db_name,
    },
    // revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: "a", host: "localhost" } },
      { params: { id: "a", host: "domain.localhost" } },
      { params: { id: "a", host: "next-multiple-hosts-one.archeroe.xyz" } },
      { params: { id: "a", host: "next-multiple-hosts-two.archeroe.xyz" } },
    ],
    // fallback: "blocking",
    // fallback: false,
    fallback: true,
  };
}

export default function TestMultipleHosts({ host, id, db_name }) {
  return (
    <div>
      <h1>Test Multiple Hosts</h1>
      <div>
        Host : {host} , Id : {id}
      </div>
      <div>
        name : <strong>{db_name}</strong>
      </div>
    </div>
  );
}
