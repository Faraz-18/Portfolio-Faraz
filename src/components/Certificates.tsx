import React, { useState, useEffect } from "react";

const certificates = [
  {
    id: 1,
    title: "Amazon Prompt Engineering",
    image: `${import.meta.env.BASE_URL}aws.jpg`,
  },
  {
    id: 2,
    title: "Machine Learning With Python",
    image: `${import.meta.env.BASE_URL}python-ml.jpg`,
    link: "https://freecodecamp.org/certification/hisbullah/machine-learning-with-python-v7",
  },
  {
    id: 3,
    title: "HP Effective Leadership",
    image: `${import.meta.env.BASE_URL}hp.jpg`,
  },
  {
    id: 4,
    title: "Java Programming",
    image: `${import.meta.env.BASE_URL}java.jpg`,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LACZ07MW9B4A",
  },
  {
    id: 5,
    title: "Oracle AI Fundamentals",
    image: `${import.meta.env.BASE_URL}oracle.jpg`,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6F9442B7F60CB07A0640453039BA5A1F8572F43EE4F886EE68ACE8D6FB739E54",
  },
  {
    id: 6,
    title: "Cisco Python Essentials 2",
    image: `${import.meta.env.BASE_URL}cisco-python.jpg`,
    link: "https://www.credly.com/badges/73cfbe60-9900-4a6b-8e51-324ae7404f53/linked_in?t=t1geb1",
  },
];

export function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-play every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1
      );
    }, 10000); // 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section id="certificates" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Professional <span className="text-blue-600">Certificates</span>
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          Industry-recognized certifications validating expertise in cloud
          technologies, software development, and modern frameworks.
        </p>

        <div className="relative w-full max-w-3xl mx-auto">
          {/* Certificate Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg shadow-[rgba(0,0,0,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]">
            <img
              src={certificates[currentIndex].image}
              alt={certificates[currentIndex].title}
              className="w-full max-h-[500px] object-contain transition-all duration-700 "
            />
          </div>

          {/* Title */}
          <p className="mt-4 text-lg font-semibold text-slate-700">
            {certificates[currentIndex].title}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg"
            >
              ◀ Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
export { certificates };
