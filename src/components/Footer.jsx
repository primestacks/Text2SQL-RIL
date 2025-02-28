function Footer() {
  return (
    <div className="w-full  bg-primary py-20 max-h-[500px] ">
      <div className=" max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-start bg-[#3c2f72] rounded-2xl py-20 px-10 text-[#ffff] gap-5 mx-auto">
        <div className="">
          <h1 className="text-2xl font-bold mb-5">
            <img
              src="./assets/text2sql-icon.svg"
              alt="text2sql-olog"
              className="inline-block mr-2 w-1xl"
            />
            Text2SQL
          </h1>
          <h2>Social Icons</h2>
        </div>
        <div className="my grid-cols-1 col-span-2 ">
          {/* Footer menu grid*/}
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div>
              <ul>
                <h2 className="font-bold mb-2">Explore</h2>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
              <div className="flex gap-2">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <ul>
                <h2 className="font-bold mb-2">Community</h2>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="font-bold mb-2">Company</h2>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Paragraph div */}
          <div className=" mt-10">
            <p>© {new Date().getFullYear()} Text2SQL. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
