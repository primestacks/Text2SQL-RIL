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
      <div className="max-w-7xl mx-auto px-5 py-5 gap-3 flex flex-wrap justify-around">
        {growthData.map((growth) => (
          <div key={growth.value} className="flex">
            <h2 className="text-[30] lg:text-[36px] font-bold">
              {growth.value}{" "}
              <span className="text-seconday mr-2">{growth.span}</span>
            </h2>
            <p className="inline-flex text-[16px] lg:my-5">{growth.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurGrowth;
