export async function getServerSideProps(context) {
  return {
    props: { name: "Fatah" },
  };
}

export default function TestSubRandom({ name }) {
  return (
    <>
      <div className="text-blue-500"> My name is {name}</div>
    </>
  );
}
