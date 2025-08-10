import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen  p-8 md:p-16 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-extrabold mb-8 text-emerald-500 tracking-wide">
          About LanguagePal
        </h1>

        {/* Introduction */}
        <p className="text-emerald-700 mb-12 leading-relaxed max-w-3xl">
          LanguagePal is dedicated to bridging cultures and empowering learners worldwide to master new languages through innovative technology and community support.
        </p>

        {/* Sections container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Mission"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-3 text-emerald-700">Our Mission</h2>
            <p>
              To provide a user-friendly platform that motivates and supports learners to achieve language fluency with personalized tools and engaging content.
            </p>
          </section>

          {/* Vision */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Vision"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-3 text-emerald-700">Our Vision</h2>
            <p>
              To become the most trusted global language learning community, fostering cross-cultural understanding and communication.
            </p>
          </section>

          {/* Goals */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80"
              alt="Goals"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-3 text-emerald-700">Our Goals</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop innovative, AI-powered language learning tools.</li>
              <li>Build an engaged and supportive learner community.</li>
              <li>Expand course offerings to cover diverse languages and cultures.</li>
              <li>Ensure accessibility and affordability for all learners worldwide.</li>
            </ul>
          </section>

          {/* Achievements */}
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtU2yn7IsORE4O8pO7I_z3x18TuIUQqGQHLQ&s"
              alt="Achievements"
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-3 text-emerald-700">Achievements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Over 50,000 active users worldwide.</li>
              <li>Supported learning in 15+ languages.</li>
              <li>Partnered with top linguistic experts.</li>
              <li>Featured in multiple educational tech magazines.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
