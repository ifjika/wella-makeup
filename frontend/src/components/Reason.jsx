import React from "react";

const Reason = () => {
  const reasons = [
    {
      id: 1,
      title: "For Your Beautiful Moments",
      description:
        "Setiap momen spesial Anda akan terlihat memukau dengan sentuhan make-up profesional.",
      image: "/img/moment.jpg",
    },
    {
      id: 2,
      title: "Makeup Wedding & All Event",
      description:
        "Dari akad nikah hingga pesta, saya siap menemani setiap event penting Anda.",
      image: "/img/wedding.jpg",
    },
    {
      id: 3,
      title: "MUA Certified",
      description:
        "Berpengalaman dan tersertifikasi untuk hasil make-up yang aman dan tahan lama.",
      image: "/img/certified.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 cursor-default bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-brand text-primary mb-4">
          Why Wella Makeup ?
        </h2>
        <div className="h-1 w-36 bg-primary mx-auto mb-12 rounded-full" />

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary transform -translate-x-1/2" />

          <div className="space-y-20">
            {reasons.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-center md:items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div
                    className={`md:w-5/12 px-4 md:px-10 text-center md:text-${
                      isEven ? "left" : "right"
                    } mb-6 md:mb-0`}
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                  </div>

                  {/* Center Index */}
                  <div className="relative z-10 w-8 h-8 bg-primary text-white font-bold flex items-center justify-center rounded-full mx-auto md:mx-0">
                    {item.id}
                  </div>

                  {/* Image */}
                  <div className="md:w-5/12 px-4 md:px-10 mt-6 md:mt-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-md shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
