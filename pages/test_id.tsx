import { useState, useEffect } from "react";
import { axiosInstance } from "../api_login";

export default function TestID() {
  type formData = {
    id: number;
    title: string;
    position: number;
  }[];

  const [formData, setFormData] = useState<formData>([]);

  useEffect(() => {
    axiosInstance.get("blogsite/test_id/").then((response) => {
      setFormData(response.data);
    });
  }, []);

  return (
    <>
      <h1>Test ID</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        {formData
          .sort((a, b) => {
            return a.position - b.position;
          })
          .map((elem, index) => (
            <div key={index}>
              <input
                className="border border-black m-4"
                onChange={(e) => {
                  const our_data = formData.find((el) => el.id == elem.id);
                  our_data.title = e.target.value;
                  setFormData([...formData]);
                }}
                value={elem.title}
              ></input>
              <button
                type="button"
                className="border border-blue-500 w-11"
                value={elem.position}
                onClick={(e) => {
                  const our_data = formData.find((el) => el.id == elem.id);
                  our_data.position += 1;
                  setFormData([...formData]);
                }}
              >
                +1 pos {elem.position}
              </button>
              <button
                type="button"
                className="border border-blue-500 w-11"
                value={elem.position}
                onClick={(e) => {
                  const our_data = formData.find((el) => el.id == elem.id);
                  our_data.position -= 1;
                  setFormData([...formData]);
                }}
              >
                -1 pos {elem.position}
              </button>
            </div>
          ))}
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
