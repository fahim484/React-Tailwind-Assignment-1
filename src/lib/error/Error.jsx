import { useNavigate } from "react-router-dom";

export const Error = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="text-center">
      <h1 className="mt-32 text-3xl font-bold underline text-red-600">
        This Page Is Not Exist, Please Return To{" "}
        <a href="/" className="text-blue-600">
          Home
        </a>
      </h1>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300  focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 mt-8"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          Back to Home
        </span>
      </button>
    </div>
  );
};
