const growthData = [
  {
    id: 1,
    value: "Our",
    span: "Growth",
  },
  {
    id: 2,
    value: "50k",
    span: "+",
    p: "Happy Client",
  },
  {
    id: 3,
    value: "30k",
    span: "+",
    p: "Review",
  },
  {
    id: 4,
    value: "10k",
    span: "+",
    p: "Businesses used Text2SQL",
  },
];

function OurGrowth() {
  return (
    <div className="w-full bg-[#F1F4FF] overflow-hidden">
      <div className="max-w-7xl mx-auto  py-5 gap-3 flex flex-wrap justify-around px-2">
        {growthData.map((growth) => (
          <div key={growth.value} className="flex space-x-10 flex-wrap">
            <h2 className="text-[25px] lg:text-[36px] font-poppins font-[500]">
              {growth.value}{" "}
              <span className="text-seconday mr-2 font-[500]">
                {growth.span}
              </span>
            </h2>
            <p className="inline-flex text-[20px] leading-9 lg:leading-12 font-poppins font-[500] ">
              {growth.p}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurGrowth;
