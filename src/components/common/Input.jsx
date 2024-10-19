export const Input = () => {
  return (
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-3 h-3 text-secondary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="p-3 ps-7 pe-0 outline-primary block w-full sm:p-[17px] sm:ps-10 text-secondary border border-[#E4E4E7] rounded-md bg-white text-xs md:text-sm leading-[15.3px]"
          placeholder="Search incident"
          required
        />
      </div>
    </form>
  );
};

export const Sort = () => {
  return (
    <form>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <span class="text-[#A1A1AA] text-xs">Sort By:</span>
        </div>
        <input
          type="search"
          id="search"
          className="py-3 block w-full sm:py-[17px] sm:px-1 text-secondary border border-[#E4E4E7] rounded-md bg-white text-xs md:text-sm leading-[15.3px]"
          placeholder=""
          required
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <select class="sm:pr-0 sm:mr-1 h-full rounded-md border-0 bg-transparent md:pr-2  text-secondary text-xs outline-none md:mr-3 cursor-pointer">
            <option>Date modified</option>
            <option>00/00/0000</option>
            <option>00/00/0000</option>
            <option>00/00/0000</option>
          </select>
        </div>
      </div>
    </form>
  );
};
