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
          <h1 className="text-3xl py-3 font-onest text-[2.5rem] font-[500]">
            Testimonials
          </h1>
          <p className="font-onest">
            Real stories from satisfied users, word from our valued users
          </p>
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
                  className={`absolute transform translate-x-1/4 min-w-[350px] min-h-[500px] left-[-90px] lg:translate-x-1/3 lg:left-15 md:translate-x-1/7  md:px-1   md:left-[-50px] md:w-2xl top-55 md:pb-30 pb-40 md:min-h-85 max-w-4xl  flex flex-col md:flex-row items-center mx-auto px-0 lg:px-2 py-2 transition-all ease-in-out rounded-lg shadow-lg bg-white ${
                    index === 0
                      ? "z-30 scale-95 top-0"
                      : index === 1
                      ? "z-20 scale-90 top-0"
                      : "z-10  scale-90  "
                  }`}
                  initial={{ opacity: 100, scale: 0, y: 5 }}
                  animate={{
                    opacity: isActive ? 100 : 10,
                    scale: isActive ? 1.05 : isPrevious ? 0.99 : 0.99,
                    y: isActive ? `20px` : isPrevious ? `20px` : `20px`,
                    zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: `[-10%]`, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`lg:rounded-lg relative w-[160px] md:left-5  sm:w-[170px] md:rounded-2xl lg:w-[240px] md:w-[240px]  bottom-0 p-0 md:absolute  ${
                      index === 0
                        ? "z-30 scale-100"
                        : index === 1
                        ? "z-20 scale-100 md:scale-96 lg:w-[230px] top-[-10%] md:top-[-15%]"
                        : "z-10 scale-100 md:scale-87 lg:w-[200px]  top-[-10%] p-0"
                    }`}
                    initial={{ opacity: 100, scale: 0, y: 0 }}
                    animate={{
                      opacity: isActive ? 100 : 0,
                      scale: isActive ? 1 : isPrevious ? 0.55 : 0.55,
                      // y: isActive ? 0 : isPrevious ? 10 : 20,
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
                      className="absolute right-5 top-55 w-13 lg:top-20 lg:w-[122px] lg:right-10"
                    />

                    <div className="px-2 mx-auto text-center bottom-15 absolute md:max-w-[320px] right-0  md:right-10 md:text-left">
                      <h2 className="text-gray-700 text-3xl font-onest">
                        {testimonial.name}
                      </h2>
                      <p className="mb-5 text-gray-500 font-onest">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-400 text-sm font-onest px-2">
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
        {/* <div className="flex lg:justify-between translate-x-0  sm:translate-x-30 lg:translate-x-0 z-50 absolute lg:gap-0 gap-10  lg:bottom-[40%] bottom-10 transform lg:transalte-y-1/1 "> */}
        <button
          onClick={prevTestimonial}
          className="p-2 absolute bottom-3 lg:left-35 left-25 md:bottom-[18%] md:left-60 lg:bottom-60 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 absolute bottom-3 lg:right-40 right-25 md:bottom-[18%] md:right-60 lg:bottom-60 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Testimonial;
