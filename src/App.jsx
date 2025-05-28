import React, { useState, useEffect } from "react";
import { init, send } from "@emailjs/browser";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [thankYouMessage, setThankYouMessage] = useState("");

  // Initialize EmailJS with public key
  useEffect(() => {
    init("7rXHYuZqnWefw5UV-");
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      "service_uipi0t1",
      "template_y0k7adw",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }
    )
      .then(
        (response) => {
          setThankYouMessage("Thank you for your message! We will get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  // Apply dark mode globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Mock data for services
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your unique emotional and psychological needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-teal-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.964 0m11.964 0A9 9 0 1112 21a9 9 0 019.964-9.275z"
          />
        </svg>
      ),
    },
    {
      title: "Couples Counseling",
      description:
        "Strengthen relationships through guided communication and mutual understanding.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-teal-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      title: "Anxiety & Depression Management",
      description:
        "Specialized programs designed to help you cope with stress, anxiety, and depressive symptoms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-teal-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
    },
    {
      title: "Mindfulness & Meditation",
      description:
        "Learn techniques to stay present and reduce daily stressors through guided mindfulness practices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-teal-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 16.418c-1.929.65-3.995.98-6.082.98-.417 0-.826-.014-1.228-.04 1.494 1.083 3.397 1.82 5.463 2.097.66.09.828-.445.24-1.025-1.33-1.33-2.66-2.66-3.99-3.99-.17-.17-.34-.35-.5-.53l.04-.04c1.083-1.083 2.547-1.753 4.123-1.877.33-.026.66-.04.99-.04 1.66 0 3.16.5 4.38 1.31l.46.31c.16.11.33.21.49.32 1.08 1.08 2.16 2.16 3.24 3.24.17.17.34.34.5.51-.66 1.49-1.95 2.61-3.58 2.98-.38.09-.77.14-1.16.14-1.16 0-2.23-.37-3.13-1.01-.47-.34-.97-.72-1.48-1.11zm-3.713-8.418c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm10 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"
          />
        </svg>
      ),
    },

    
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Alex R.",
      role: "Teacher",
      quote:
        "I felt truly heard during my sessions. The team made me feel safe and supported every step of the way.",
    },
    {
      name: "Jordan M.",
      role: "Entrepreneur",
      quote:
        "The therapy sessions helped me regain clarity and peace of mind. I’m grateful for this space.",
    },
    {
      name: "Taylor L.",
      role: "Student",
      quote:
        "Online counseling was a game-changer for me. Flexible and incredibly helpful support system.",
    },
  ];

  // Events Data
  const events = [
    {
      title: "Mindful Living Workshop",
      date: "June 15, 2025",
      location: "Online",
      description:
        "Join us for an interactive workshop on mindful living techniques that can be applied in everyday life.",
      registrationLink: "#",
    },
    {
      title: "Healing Through Art Therapy",
      date: "July 10, 2025",
      location: "Restart Clinic Office",
      description:
        "Explore how art can be used as a powerful tool for emotional healing and self-expression.",
      registrationLink: "#",
    },
    {
      title: "Support Group: Anxiety & You",
      date: "August 3, 2025",
      location: "Online",
      description:
        "Join others navigating similar challenges in a safe, guided support group led by experienced therapists.",
      registrationLink: "#",
    },
    {
      title: "Introduction to Cognitive Behavioral Therapy",
      date: "September 14, 2025",
      location: "Online",
      description:
        "Understand the fundamentals of CBT and how it can help manage thoughts, emotions, and behaviors.",
      registrationLink: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        darkMode ? "bg-slate-900 text-white" : "bg-teal-50 text-gray-800"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 shadow-md backdrop-blur-sm transition-colors duration-300 ${
          darkMode ? "bg-slate-800/90" : "bg-white/90"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            {/* Remove the SVG icon below */}
            <span className="text-xl font-bold">Restart</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "about", "testimonials", "contact","events", "intake"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize hover:text-teal-500 transition-all duration-300 ${
                  activeTab === tab ? "text-teal-500 font-semibold" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 p-6 z-50 transform transition-transform duration-300 ease-in-out bg-white dark:bg-slate-800 shadow-lg text-gray-800 dark:text-white ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="mt-12 flex flex-col space-y-6 text-lg">
          {[
            "home",
            "services",
            "about",
            "testimonials",
            "events",
            "contact",
            "intake",
          ].map((link) => (
            <button
              key={link}
              onClick={() => {
                setActiveTab(link);
                setMenuOpen(false);
              }}
              className="capitalize hover:text-teal-500 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8 flex space-x-4 justify-center">
          {/* Replace the map function with individual social media links */}
          <a
            href="https://www.linkedin.com/in/rahi-shah1801/"
            className="opacity-75 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/restart.psych?igsh=MTMwbTRicjZtZTJ2aw=="
            className="opacity-75 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        {activeTab === "home" && (
          <section
            className={`py-16 md:py-24 relative overflow-hidden ${
              darkMode
                ? "bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900"
                : "bg-gradient-to-r from-cyan-50 to-blue-50"
            } animate-fadeIn`}
          >
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
              {/* Text Block */}
              <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 animate-slideLeft">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Restart Your Journey to Mental Wellness
                </h1>
                <p className="text-lg mb-8 max-w-lg">
                At Restart , we offer personalized mental health care designed for your unique journey. Our experienced team provides compassionate support to help you heal, grow, and move forward with strength and confidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActiveTab("services")}
                    className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md transform hover:scale-105"
                  >
                    Explore Services
                  </button>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-6 py-3 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                      darkMode
                        ? "border-slate-600 hover:bg-slate-700"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
              {/* Image Block */}
              <div className="md:w-1/2 flex justify-center order-1 md:order-2 animate-slideRight">
                <img
                  src="/img3.jpeg"
                  alt="Mental Health Illustration"
                  className="rounded-lg shadow-xl w-full max-w-md transform scale-110 transition-transform hover:scale-110 duration-300"
                />
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="max-w-2xl mx-auto text-lg">
                We provide a wide range of mental health services tailored to meet your individual needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                    darkMode ? "bg-slate-800" : "bg-white"
                  } animate-popIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-teal-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === "about" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="max-w-2xl mx-auto text-lg">
                Learn more about our mission, values, and the dedicated team behind Restart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slideLeft">
                <img
                  src="/img5.png"
                  alt="Clinic Interior"
                  className="rounded-lg shadow-lg w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="animate-slideRight">
              <h3 className="text-2xl font-bold mb-4">Found in Growth</h3>
            <p className="mb-2">
            I'm an eternal learner — always curious, always growing. Therapy, to me, isn't just about healing; it's about evolving together.
            </p>
            <p className="mb-2">
            As a counselling psychologist, I know taking the first step can be hard — but it’s also incredibly brave. Therapy is your space to restart, rediscover yourself, and feel better. Don’t let fear or others’ opinions stop you.
            </p>
            <p className="mb-2">
            I hold a M.A. in Psychology and a Post Graduate Diploma in Rehabilitation Psychology. My areas of focus include self-esteem, relationships, anxiety, depression, academic/work stress, and personal growth. I believe in a compassionate, holistic approach that empowers you to find clarity and strength.
            </p>
            <p className="mb-2">
            <strong>Counseling Psychologist at Aarambh Mental Wellness | Founder, Restart</strong>
            </p>
            <p>
            Follow me on Instagram <strong>@restart.psych</strong> for insights and updates. I’m also conducting sessions of <strong>Listening Circles</strong> — a shared space for open expression and collective healing.
            </p>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {activeTab === "testimonials" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto text-lg mb-8">
                Real stories from people whose lives have been positively impacted by our services.
              </p>
              <p className="text-sm italic opacity-75">
                *Names have been changed to protect patient confidentiality.*
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md ${
                    darkMode ? "bg-slate-800" : "bg-white"
                  } transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm opacity-75">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="max-w-2xl mx-auto text-lg mb-8">
                Join us for community-driven mental wellness events designed to educate, heal, and connect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                    darkMode ? "bg-slate-800" : "bg-white"
                  } animate-popIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm opacity-75 mb-2">📅 {event.date}</p>
                  <p className="text-sm opacity-75 mb-4">📍 {event.location}</p>
                  <p className="mb-4">{event.description}</p>
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Intake Form Section */}
        {activeTab === "intake" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Intake Form</h2>
              <p className="max-w-2xl mx-auto text-lg">
                Before coming to your session, please fill out the form below.
              </p>
            </div>

            <div className="flex justify-center">
              <iframe
                width="640px"
                height="480px"
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHgiidBUMjFYSDZDR1lSUkswUE1FMkZYUEhKODZBNC4u&embed=true "
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen
              ></iframe>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="max-w-2xl mx-auto text-lg">
                Ready to start your journey toward better mental health? Reach out to us today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-slideLeft">
            {thankYouMessage ? (
              <p className="text-center text-green-600 font-semibold">{thankYouMessage}</p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-slate-800 border-slate-700 focus:border-teal-500"
                        : "bg-white border-gray-300 focus:border-teal-500"
                    } focus:outline-none focus:ring-1 focus:ring-teal-500`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-slate-800 border-slate-700 focus:border-teal-500"
                        : "bg-white border-gray-300 focus:border-teal-500"
                    } focus:outline-none focus:ring-1 focus:ring-teal-500`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-slate-800 border-slate-700 focus:border-teal-500"
                        : "bg-white border-gray-300 focus:border-teal-500"
                    } focus:outline-none focus:ring-1 focus:ring-teal-500`}
                    placeholder="Tell us how we can assist you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors transform hover:scale-105 duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
              </div>
              <div className="animate-slideRight">
                <img
                  src="/img6.png"
                  alt="Contact Illustration"
                  className="rounded-lg shadow-lg w-full object-cover h-full"
                />
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer - Always at Bottom */}
      <footer
        className={`py-6 text-center ${
          darkMode ? "bg-slate-900 text-gray-400" : "bg-slate-800 text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-4">
            {/* Replace the map function with individual social media links */}
            <a
              href="https://www.linkedin.com/in/rahi-shah1801/"
              className="opacity-75 hover:opacity-100 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/restart.psych?igsh=MTMwbTRicjZtZTJ2aw=="
              className="opacity-75 hover:opacity-100 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p>© 2025 Restart. All rights reserved.</p>
          <p> Designed by @MS</p>
        </div>
      </footer>
    </div>
  );
}
