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
    <section className="relative  bg-[#F1F4FF] px-6 py-20 text-center z-0">
      <div className="mx-w-sm py-10 mb-20">
        <h1 className="text-3xl font-bold py-3">Testimonials</h1>
        <p>Real stories from satisfied users, word from our valued users</p>
      </div>

      <div className="relative mx-auto min-h-[350px] w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {/* Testimonials Slider */}
        <AnimatePresence>
          <motion.div
            key={testimonials[current].id}
            className="flex items-center space-x-6"
            // initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <motion.img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className=" object-cover w-[250px] rounded shadow-lg absolute bottom-0 top-[-20] z-50 overflow-auto"
              // animate={{ scale: 1 }}
              // transition={{ duration: 0.5 }}
            />

            {/* Text Content */}
            <div className="text-center absolute w-sm top-10 right-20">
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-500 mb-5">
                {testimonials[current].title}
              </p>
              <p className="text-gray-600 italic">
                "{testimonials[current].quote}"
              </p>
            </div>
          </motion.div>
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
