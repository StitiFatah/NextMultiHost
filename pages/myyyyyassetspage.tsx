export async function getStaticProps() {
  const my_age = 26;

  return {
    props: {
      age: my_age,
    },
  };
}

export default function MyAssetPage({ age }) {
  const abc = "hello my name is Fatah";

  return (
    <div>
      presentation : {abc} and I'm not {age}
    </div>
  );
}
