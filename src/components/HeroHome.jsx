function HeroHome() {
  return (
    <div className="wx-full mt-0 lg:h-screen w-auto flex justify-center items-center lg:min-h-full bg-primary text-white relative overflow-x-hidden">
      <div className="w-full lg:w-7xl flex justify-center items-center group relative  ">
        {/* left img */}
        <img
          src="./assets/hero-img-left.svg"
          alt="Left hero img"
          className="lg:absolute lg:block hidden lg:left-5 lg:group-hover:left-[-40px] transition-all z-0 duration-800 "
        />

        <div className="absolute z-50 lg:max-w-2xl  text-center bg-secondary backdrop-blur-3xl opacity-95 p-5 lg:m-2 rounded-lg lg:rounded-[50px] lg:border lg:border-seconday-500 py-3 ">
          <p className="my-5 sm:block text-sm md:text-lg">
            <img
              src="./assets/Frame 222.svg"
              alt="Frame 222"
              className="inline-block mr-2 "
            />
            Trusted by over 1k+ business owner
          </p>

          <h1 className="lg:text-5xl text-3xl md:text-4xl mb-5 my-2 font-bold lg:tracking-wider font-primary ">
            Convert Text to SQL With Visualization
          </h1>
          <p>
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
          className="lg:absolute lg:right-5 z-0 group-hover:right-[-65px] transition-all duration-800"
        />
      </div>
    </div>
  );
}

export default HeroHome;
