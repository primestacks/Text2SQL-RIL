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
    image: "./assets/testimonial-one.svg",
    name: "Becky Nelson",
    title: "Cloud Engineer",
    quote:
      "This tool has transformed how we access our data. It's like having a data expert on hand 24/7. We saved hours each week by asking simple questions instead of writing complex queries",
  },
  {
    id: 3,
    image: "./assets/testimonial-one.svg",
    name: "Becky Nelson",
    title: "Cloud Engineer",
    quote:
      "This tool has transformed how we access our data. It's like having a data expert on hand 24/7. We saved hours each week by asking simple questions instead of writing complex queries",
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
    <section className="relative  bg-[#F1F4FF] px-5 py-20 sm:py-15min-h-screen">
      <div className="max-w-sm py-5 mb-20 mx-auto text-center">
        <h1 className="text-3xl font-bold py-3">Testimonials</h1>
        <p>Real stories from satisfied users, word from our valued users</p>
      </div>

      <div className="relative w-full  h-[450px]  ">
        {/* Testimonials Slider */}
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const isActive = index === current;
            const isPrevious = (current + 1) % testimonials.length === index;

            return (
              <motion.div
                key={index}
                className={`lg:min-w-3xl lg:min-h-[450px] absolute left-1/2 transform -translate-x-1/2 transition-all duration-400 rounded-lg shadow-lg bg-white p-6  md:w-96 ${
                  index === 0
                    ? "z-30 scale-100"
                    : index === 1
                    ? "z-20 scale-100 top-12"
                    : "z-10 scale-90 top-24"
                }`}
                initial={{ opacity: 50, scale: 0.9, y: 50 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1.1 : isPrevious ? 0.95 : 0.9,
                  y: isActive ? 0 : isPrevious ? 10 : 20,
                  zIndex: isActive ? 30 : isPrevious ? 20 : 10,
                }}
                exit={{ opacity: 0, scale: 0, y: 30 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="absolute bottom-0 p-0 mb-4"
                />
                <p className="text-gray-700 text-lg font-medium">
                  {testimonial.quote}
                </p>
                <p className="mt-4 text-gray-500 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-6 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-6 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}

export default Testimonial;
