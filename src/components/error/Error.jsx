import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="text-center">
      <div>
        <img
          src="https://img.freepik.com/free-vector/404-error-balloon-air-hot_24908-77779.jpg?t=st=1729592547~exp=1729596147~hmac=246d377ac128631b7076bf417764a767fb7635601c093c6885aa39674c282698&w=740"
          alt=""
          className="h-[400px] w-screen mt-16"
        />
      </div>
      <h1 className="mt-32 px-4 sm:px-0 sm:text-3xl font-bold underline text-red-600">
        This Page Is Not Exist, Please Return To{" "}
        <a href="/" className="text-[#F27737]">
          "Home"
        </a>
      </h1>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#F27737] to-[#FBB836] group-hover:from-teal-300 group-hover:to-[#FFE9A8] focus:ring-4 focus:outline-none focus:ring-lime-200 mt-8"
      >
        <span className="relative px-3 sm:px-5 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
          Back to Home
        </span>
      </button>
    </div>
  );
}

export default Error;
