import { useRouter } from "next/router";
import { useEffect } from "react";

// export async function getServerSideProps() {
// return {
// props: {
// hey: "hello",
// },
// };
// }

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
];

const new_mockDB = [
  ...mockDB,
  ...[{ name: "site3", description: "Subdomain only", subdomain: "domain-4" }],
];

export async function getStaticProps(context) {
  const site = context.params.site;
  const data = new_mockDB.filter((e) =>
    e.customDomain ? e.customDomain === site : e.subdomain === site
  )[0].subdomain;

  return {
    props: {
      data,
    },
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
    fallback: true,
  };
}

export default function NewPage({ data }) {
  return <div> New Page {data} </div>;
}

// export default function NewPage() {
//   const router = useRouter();

//   return (
//     <>
//       <div>NewPage</div>;<div>{JSON.stringify(router)}</div>
//     </>
//   );
// }
