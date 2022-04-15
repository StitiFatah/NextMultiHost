export async function getStaticProps(context) {
  const name_dic = { name: "fatah" };
  return {
    props: {
      name_dic,
    },
  };
}
