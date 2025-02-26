import { useState } from "react";

const FeaturesData = [
  {
    id: 1,
    icon: "./assets/featured-icon-one.svg",
    title: "Easy to Use",
    description:
      "No need to learn complex query languages. Just ask questions naturally",
  },
  {
    id: 2,
    icon: "./assets/featured-icon-one.svg",
    title: "Real-Time Insights",
    description:
      "Get instant responses to your questions and make data-driven decisions quickly",
  },
  {
    id: 3,
    icon: "./assets/featured-icon-two.svg",
    title: "Seamless Integration",
    description:
      "Works with your existing databases like MySQL, PostgreSQL, and more",
  },
];

function HomeCards() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 px-6 bg-[#FFFFFF] lg:w-7xl mx-auto">
      {/* Header Section */}
      <div className="max-w-lg mx-auto px-2 text-center">
        <h2 className="text-3xl lg:text-[40px] font-bold text-[#202020]">
          Benefits of Text2SQL
        </h2>
        <p className="text-[#6B6B6B] mt-3">
          Text2SQL allows developers to query databases using natural language,
          eliminating the need to write complex SQL code.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
        {FeaturesData.map((feature) => (
          <div
            key={feature.id}
            className={`py-5 px-5 rounded-lg shadow-md border group border-gray-200 transition-all duration-300  lg:w-[384px] ${
              isHovered ? "hover:bg-[#2E58F1]" : "bg-[#F1F4FF]"
            }`}
            onClick={() => setIsHovered(!isHovered)} // Tap to toggle hover effect on mobile
            onMouseEnter={() => setIsHovered(true)} // For desktop hover
            onMouseLeave={() => setIsHovered(false)} // For desktop hover out
          >
            <div className="flex flex-col items-start group-hover:text-[#ffffff] group-hover:border-amber-50 gap-3 lg:gap-5">
              <img src={feature.icon} alt="" />

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ffffff]">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 mt-3 group-hover:text-[#ffffff]">
              {feature.description}
            </p>
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline mt-3 inline-block group-hover:text-[#ffffff] relative"
            >
              Read More{" "}
              <span className="text-3xl font-extrabold text-center absolute top-[-8px] mr-5">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeCards;
