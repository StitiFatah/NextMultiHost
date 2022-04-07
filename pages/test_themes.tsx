export default function TestTheme() {
  const get_color = () => {
    return "text-blue-500";
  };

  return (
    <div>
      <h1 className={`text-3xl ${get_color()}`}> Title </h1>
    </div>
  );
}
