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

// const new_mockDB = [
//   ...mockDB,
//   ...[{ name: "site3", description: "Subdomain only", subdomain: "domain-4" }],
// ];

export async function getStaticProps(context) {
  const site = context.params.site;

  return {
    props: {
      site,
    },
  };
}

export async function getStaticPaths() {
  const site_paths = mockDB.map((elem) => {
    return { params: { site: elem.subdomain } };
  });

  return {
    paths: site_paths,
    fallback: true,
    // fallback: "blocking",
  };
}

export default function NewPage({ site }) {
  return <div> New Page {site} </div>;
}
