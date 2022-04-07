import { useState } from "react";

export default function Example() {
  const [showNavs, setShowNavs] = useState(false);

  return (
    <>
      <div className="shadow-md mb-4">
        <div className="px-2 sm:px-6 lg:px-8 py-2 hidden md:flex  ">
          <div className="mx-2"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
        </div>

        <div
          className={`px-2 sm:px-6 lg:px-8 py-21   ${
            showNavs ? "flex flex-col" : "hidden"
          }
          
                      `}
        >
          <div className="mx-2  duration-1000 hover:text-red-500"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
          <div className="mx-2"> Nav1 </div>
        </div>

        <div className={`md:hidden $ px-2`}>
          <button
            onClick={() => {
              setShowNavs(!showNavs);
            }}
          >
            {showNavs ? "x" : "|||"}
          </button>{" "}
        </div>
      </div>
      <div className="max-w-7xl h-screen mx-auto flex flex-col items-center border border-red-500 ">
        <div className="border border-gray-500 border-t-0 w-full text-center h-full">
          {" "}
          Body {showNavs ? "yes" : "no"}
        </div>
      </div>
    </>
  );
}
