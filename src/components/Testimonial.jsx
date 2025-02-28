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
    <section className="relative bg-[#F1F4FF] px-5 py-20 sm:py-15">
      <div className="max-w-sm py-5 mb-20 mx-auto text-center">
        <h1 className="text-3xl font-bold py-3">Testimonials</h1>
        <p>Real stories from satisfied users, word from our valued users</p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 lg:min-h-[600px] ">
        {/* Testimonials Slider */}
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;
            const isPrevious = (current + 1) % testimonials.length === index;

            return (
              <motion.div
                key={index}
                className={`lg:min-w-3xl lg:min-h-1xl mt-0 absolute max-hight-[350px] left-1/2 mb-20 z-0 transform lg:-translate-x-1/2 sm:-translate-x-1/1 transition-all ease-out rounded-lg shadow-lg bg-white  lg:pl-5 lg:pb-90  md:w-96 ${
                  index === 0
                    ? "z-30 scale-100 transition-all ease-in duration-400 top-10"
                    : index === 1
                    ? "z-20 scale-96 top-25 transition-all ease-in duration-400"
                    : "z-10 scale-90 top-30 transition-all ease-in duration-400"
                }`}
                initial={{ opacity: 100, scale: 0.1, y: 40 }}
                animate={{
                  opacity: isActive ? 100 : 1,
                  scale: isActive ? 1.1 : isPrevious ? 0.9 : 0.95,
                  y: isActive ? 0 : isPrevious ? 10 : 20,
                  zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                }}
                exit={{ opacity: 0, scale: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`rounded-lg lg:w-[250px] bottom-0 p-0 absolute sm:w-9 ${
                    index === 0
                      ? "z-30 scale-100"
                      : index === 1
                      ? "z-20 scale-95 b-0 lg:w-[220px] top-[-11%]"
                      : "z-10 scale-85 lg:w-[200px]  top-[-8%] p-0"
                  }`}
                />
                <div className="absolute top-20 max-w-md p-5 transfom left-1/3 ml-10 -transform-y-1/2">
                  <h2 className="text-gray-700 text-3xl">{testimonial.name}</h2>
                  <p className="mb-5 text-gray-500 ">{testimonial.title}</p>
                  <p className="text-gray-400 text-sm">{testimonial.quote}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-30 top-60 p-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-30 top-60 p-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-500"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
