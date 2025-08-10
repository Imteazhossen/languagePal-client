import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles (only base, no external CSS import for your styles)
import "swiper/css";
import "swiper/css/effect-cards";
import reviewImg from '../assets/countries/reviwe.jpg'

// import required modules
import { EffectCards } from "swiper/modules";

// Custom slide background colors based on your nth-child styles (pastel / light colors)
const slideBackgrounds = [
  "rgba(255, 200, 200)",  // light red
  "rgba(173, 216, 255)",  // light blue
  "rgba(144, 238, 144)",  // light green
  "rgba(255, 223, 150)",  // light orange
  "rgba(198, 230, 144)",  // light lime green
  "rgba(255, 182, 193)",  // light pink
  "rgba(182, 255, 182)",  // pale green
  "rgba(173, 216, 255)",  // light blue
  "rgba(221, 160, 221)",  // light purple
  "rgba(169, 186, 169)",  // muted green-gray
];

// Sample review data
const reviews = [
  {
    text: "LanguagePal helped me improve my Japanese skills faster than I imagined!",
    rating: 5,
    name: "Akira Tanaka",
    occupation: "Software Engineer",
  },
  {
    text: "The interactive lessons and community support make learning fun and effective.",
    rating: 4,
    name: "Maria Lopez",
    occupation: "Graphic Designer",
  },
  {
    text: "Thanks to LanguagePal, I gained confidence speaking Spanish in just months.",
    rating: 5,
    name: "John Smith",
    occupation: "Marketing Specialist",
  },
  {
    text: "Great platform with helpful tools, but I wish there were more advanced lessons.",
    rating: 3,
    name: "Lina Zhang",
    occupation: "Student",
  },
  {
    text: "The personalized feedback really sets LanguagePal apart from other apps.",
    rating: 5,
    name: "David Kim",
    occupation: "Teacher",
  },
];

const renderStars = (count) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 inline ${
          i <= count ? "text-amber-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.067 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    );
  }
  return stars;
};

export default function Reviews() {
  return (
    <div className="py-10 px-6 md:px-20 rounded-2xl my-20 mx-auto max-w-7xl">
      <div className="text-center mb-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-500 mb-2 tracking-wide">
          What Our Students Say
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Hear from some of the amazing learners who’ve grown with LanguagePal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Image */}
        <div className="h-[330px] rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            src={reviewImg}
            alt="Student reviews"
          />
        </div>

        {/* Text block */}
        <div className="bg-sky-50 h-[330px] rounded-3xl flex items-center justify-center p-6 shadow-lg">
          <h1 className="font-bold text-sky-500 text-3xl lg:text-3xl leading-snug">
            Know about what our users, find out what they say.
          </h1>
        </div>

        {/* Reviews swiper */}
        <div className="mx-auto" style={{ maxWidth: "280px", width: "100%" }}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ width: "100%", height: "320px" }}
          >
            {reviews.map(({ text, rating, name, occupation }, index) => {
              const bgColor =
                slideBackgrounds[index % slideBackgrounds.length] || "gray";

              return (
                <SwiperSlide
                  key={index}
                  style={{
                    backgroundColor: bgColor,
                    borderRadius: 18,
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "20px",
                    boxSizing: "border-box",
                    minHeight: "320px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "normal",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                      fontStyle: "italic",
                      lineHeight: 1.4,
                      color: "#fff",
                    }}
                  >
                    &quot;{text}&quot;
                  </p>
                  <div style={{ marginBottom: "1rem" }}>{renderStars(rating)}</div>
                  <div>
                    <h3
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.125rem",
                        color: "#fff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {name}
                    </h3>
                    <p style={{ color: "#f0f0f0", fontSize: "0.875rem" }}>
                      {occupation}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
