function Herohome() {
  return (
    <div className="wx-full mt-0 lg:h-screen w-auto flex justify-center items-center lg:min-h-full bg-primary text-white relative overflow-x-hidden">
      <div className="w-full lg:w-7xl flex justify-center items-center group relative  ">
        {/* left img */}
        <img
          src="./assets/hero-img-left.svg"
          alt="Left hero img"
          className="lg:absolute  lg:block hidden lg:left-5 lg:group-hover:left-[-40px] transition-all z-0 duration-800 "
        />

        <div className="absolute flex items-center justify-center flex-col z-50 lg:max-w-[47rem] max-h-[29.5rem] text-center bg-secondary backdrop-blur-3xl opacity-95 p-5 lg:m-2 rounded-[50px] lg:border lg:border-seconday-500 ] my-auto">
          <p className="my-5 sm:block text-sm md:text-lg font-onest font-[400] text-[14px]">
            <img
              src="./assets/Frame 222.svg"
              alt="Frame 222"
              className="inline-block mr-2 "
            />
            Trusted by over 1k+ business owner
          </p>

          <h1 className="lg:text-5xl text-3xl md:text-4xl mb-5 my-2 lg:tracking-wider font-onest font-[600] ">
            Convert Text to SQL With Visualization
          </h1>
          <p className="font-onest font-[400] text-[1.25rem] px-[25px] max-w-[41rem] text-center mx-auto">
            Simplify your data queries with Text2SQL, effortlessly explore your
            data with our intuitive NIQ API
          </p>
          <button className="px-15 py-4 sm:px-10 sm:py-3 bg-[#2E58F1] text-white rounded hover:bg-blue-600 my-5">
            Try Now
          </button>
        </div>

        {/* right img */}

        <img
          src="./assets/hero-right-img.svg"
          alt="right hero img"
          className="lg:absolute max-w-[25rem] max-h-[25rem] lg:right-12 z-0 group-hover:right-[-25px] transition-all duration-800"
        />
      </div>
    </div>
  );
}

export default Herohome;
