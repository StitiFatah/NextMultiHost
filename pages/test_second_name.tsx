import useTestName from "./test_name";

export default function SecondName() {
  const { name, setName } = useTestName();

  return (
    <>
      <div> Name B2 : {name}</div>
    </>
  );
}
