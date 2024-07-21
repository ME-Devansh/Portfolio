export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with cross team clollaborations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently focusing on getting deep tech understanding.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Froxy",
    des: "Froxy dives into creating a forward proxy from scratch in JS using Node, that sits in between the client and the server and intercepts any requests made by the client.",
    img: "/froxy.webp",
    iconLists: ["/js.svg"],
    link: "https://github.com/ME-Devansh/Froxy",
  },
  {
    id: 2,
    title: "Stive",
    des: "Enhancing the student experience at IIITG by keeping everyone informed about internal club activities through seamless, real-time updates at their fingertips.",
    img: "/stive.webp",
    iconLists: ["/mongodb.svg", "./flutter.svg", "./dart.svg", "./swagger.svg"],
    link: "https://github.com/StiveDevs/flutter_stive",
  },
  {
    id: 3,
    title: "JobScout",
    des: "A backend application helping users to keep track of their job applications, with added solution of authentication and session management so you don't have to.",
    img: "/job-scout.webp",
    iconLists: ["/js.svg", "/mongodb.svg"],
    link: "https://github.com/ME-Devansh/Jobs-API",
  },
  {
    id: 4,
    title: "PropCore",
    des: "Making it easire for people to find property of their dreams without any hassle and optimized solutions for property management exclusively for agents.",
    img: "/real-estate.webp",
    iconLists: ["/java.svg"],
    link: "https://github.com/ME-Devansh/Real-Estate-Management-System",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer",
    organisation: "Eka Care",
    duration: "July'23 - Present",
    desc: "Solving and Optimizing solutions for doctors, creating a seamless experience for appointments and queue management.",
    className: "md:col-span-2",
    thumbnail: "/eka.svg",
  },
  {
    id: 2,
    title: "Software Devlepment Engineer - Intern",
    duration: "Jan'23 - June'23",
    desc: "Developed a configuration manager, reducing dependency on developers and moving it out to business users, decreasing the bandwidth consumed from 3 days to a few hours.",
    organisation: "Amazon",
    className: "md:col-span-2",
    thumbnail: "/amazon.svg",
  },
  {
    id: 3,
    title: "Backend Intern",
    organisation: "Eka Care",
    duration: "Oct'22 - Dec'22",
    desc: "Integrated ABDM compliant APIs for doctor professional and facility registration, allowing a smooth onboarding experience.",
    className: "md:col-span-2",
    thumbnail: "/eka.svg",
  },
  {
    id: 4,
    title: "Subject Matter Expert",
    organisation: "Chegg",
    duration: "Feb'22 - Apr'22",
    desc: "Solving and debugging issues for students across various aspects like DSA, fundamentals and designing, while learning a lot through the journey.",
    className: "md:col-span-2",
    thumbnail: "/chegg.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ME-Devansh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/me_dp_devansh",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/devansh-pant",
  },
];
