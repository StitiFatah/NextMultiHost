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

function gsp() {
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

export { gsp };
