import { useRouter } from "next/router";

export default function Post({ site, post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>Post</h1>
      <div> site : {site} </div>
      <div> post : {post} </div>
    </>
  );
}

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

const mockPost = [
  {
    id: "1",
    post: "post1",
  },
  {
    id: "2",
    post: "post 2",
  },
];

export async function getStaticPaths() {
  const static_path = mockDB.map((elem) =>
    mockPost.map((el) => {
      return {
        params: {
          site: elem.customDomain || elem.subdomain,
          id: el.id,
        },
      };
    })
  );

  return {
    paths: static_path.flat(),
    fallback: "blocking",
    // bug doesn't work with true
    // fallback: true,
  };
}

export async function getStaticProps(context) {
  const site = context.params.site;
  const id = context.params.id;

  const post = mockPost.filter((e) => e.id === id)[0].post;

  return {
    props: {
      site,
      post,
    },
    revalidate: 60,
  };
}
