import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "./assets/testimonial-one.svg",
    name: "Becky Nelson",
    title: "Data Analyst",
    quote:
      "This tool has transformed how we access our data. It's like having a data expert on hand 24/7. We saved hours each week by asking simple questions instead of writing complex queries",
  },
  {
    id: 2,
    image: "./assets/mark-jackson.svg",
    name: "Mark Jackson",
    title: "Business Manager",
    quote:
      "This tool has transformed how we access our data. It's like having a data expert on hand 24/7. We saved hours each week by asking simple questions instead of writing complex queries",
  },
  {
    id: 3,
    image: "./assets/testimonial-3.svg",
    name: "Jenny Robert",
    title: "Cloud Engineer",
    quote:
      "We saved hours each week by asking simple questions instead of writing complex queries",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative min-w-full bg-[#F1F4FF]   px-5 py-10 mx-auto">
      <div className="relative max-w-7xl mx-auto max-h-[400px] pb-[50rem] lg:pb-[40rem]">
        <div className="max-w-sm py-5 my-5 mx-auto text-center">
          <h1 className="text-3xl font-bold py-3">Testimonials</h1>
          <p>Real stories from satisfied users, word from our valued users</p>
        </div>
        {/* Testimonials Slider */}
        <div className="mx-auto max-w-1xl">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const isActive = index === current;
              const isPrevious = (current + 1) % testimonials.length === index;

              return (
                <motion.div
                  key={index}
                  className={`absolute transform lg:translate-x-1/3 lg:left-5 top-40 max-w-4xl  flex flex-col lg:flex-row items-center mx-auto px-0 lg:px-2 py-2 transition-all ease-out rounded-lg shadow-lg bg-white   ${
                    index === 0
                      ? "z-30 scale-90 top-10"
                      : index === 1
                      ? "z-20 scale-90 top-20 "
                      : "z-10  scale-85 top-25 "
                  }`}
                  initial={{ opacity: 100, scale: 0, y: 10 }}
                  animate={{
                    opacity: isActive ? 100 : 1,
                    scale: isActive ? 1.1 : isPrevious ? 0.85 : 0.85,
                    y: isActive ? 0 : isPrevious ? 10 : 20,
                    zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`lg:rounded-lg w-[200px] rounded-2xl lg:w-[250px] bottom-0 p-0   ${
                      index === 0
                        ? "z-30 scale-100"
                        : index === 1
                        ? "z-20 scale-95 b-0 lg:w-[220px] top-[-11%]"
                        : "z-10 scale-85 lg:w-[200px]  top-[-8%] p-0"
                    }`}
                    initial={{ opacity: 100, scale: 0, y: 0 }}
                    animate={{
                      opacity: isActive ? 100 : 0,
                      scale: isActive ? 1 : isPrevious ? 0.55 : 0.55,
                      y: isActive ? 0 : isPrevious ? 10 : 20,
                      zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                    }}
                    exit={{ opacity: 0, scale: 0, y: 0 }}
                    transfom
                    transition={{ duration: 0.3 }}
                  />

                  <div className=" top-1/2 max-w-md p-5 transfom left-1/5 lg:ml-10 text-center lg:text-left -transform-y-1/2 ">
                    {/* quatation mark */}
                    <img
                      src="./assets/quotation.svg"
                      alt=""
                      className="absolute right-8 w-13 lg:top-30 lg:w-[122px] lg:right-7"
                    />

                    <div className="px-0 mx-0">
                      <h2 className="text-gray-700 text-3xl">
                        {testimonial.name}
                      </h2>
                      <p className="mb-5 text-gray-500 ">{testimonial.title}</p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-start z-50 absolute gap-10 bottom-10 transform lg:transalte-y-1/1 translate-x-30 w-full ">
          <button
            onClick={prevTestimonial}
            className="  p-2 block bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="  p-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
