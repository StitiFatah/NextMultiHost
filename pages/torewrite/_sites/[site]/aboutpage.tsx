import axios from "axios";
import { useRouter } from "next/router";

const mockDB = [
  {
    name: "Site 1",
    description: "Subdomain + custom domain",
    subdomain: "domain-1",
  },
  {
    name: "Site 2",
    description: "Subdomain only",
    subdomain: "new-domain",
  },
  {
    name: "Site 3",
    description: "Subdomain only",
    customDomain: "custom-domain.com",
  },
];

export async function getStaticProps(context) {
  const actual_domain = context.params.site;
  const custom_domain = actual_domain.includes(".") ? true : false;

  // const data = mockDB.filter((e) =>
  //   custom_domain
  //     ? e.customDomain === actual_domain
  //     : e.subdomain === actual_domain
  // )[0];

  const get_data = await axios.get(
    `http://127.0.0.1:5000/domain_name/${actual_domain}/`
  );
  const data = await get_data.data.name;

  return {
    props: { data },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const site_paths = mockDB.map((elem) => {
    if (elem.customDomain) {
      return { params: { site: elem.customDomain } };
    } else {
      return { params: { site: elem.subdomain } };
    }
  });

  return {
    paths: site_paths,
    fallback: "blocking",
  };
}

export default function About({ data }) {
  // return <>Domain/Subdomain : {data.customDomain || data.subdomain}</>;

  const router = useRouter();
  return (
    <>
      <div> Domain/Subdomain : {data} </div>
      <div>{JSON.stringify(router)} </div>
    </>
  );
}
