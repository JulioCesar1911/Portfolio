/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Julio Morales",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Julio Morales Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Julio Morales",
  logo_name: "JulioMorales",
  nickname: "Julio",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1o5rmD7CbkGiq2dADDgEkOnZtBV8RGwXc/view?usp=sharing",
  portfolio_repository: "https://github.com/JulioCesar1911?tab=repositories",
  githubProfile: "https://github.com/JulioCesar1911",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/JulioCesar1911",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julio-morales-a12085157/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC1XRzSoAXIZdwJsXPire0EQ",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:jcmoralesvargas@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/JulioCe82588498",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/julio_cesar1378/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: ["⚡ Building responsive website front end using React"],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/jcmorales/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/juliomoralesv",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bergen Community College",
      subtitle: "Associates Degree in Computer Science",
      logo_path: "BCC-Seal.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - Current",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://bergen.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Mobile Applications in Android",
      subtitle: "- IDAT",
      logo_path: "idat.png",
      certificate_link:
        "https://drive.google.com/file/d/1F5dS8Ou5pTDRRI5vyyoHlpahbIkImcJQ/view?usp=sharing",
      alt_name: "Idat Technology Institute",
      color_code: "#8C151599",
    },
    {
      title: "Web Development",
      subtitle: "- IDAT",
      logo_path: "idat.png",
      certificate_link:
        "https://drive.google.com/file/d/1_Pl-6JOqOWbvC2EMIFnx2VEbQd5wkxzR/view?usp=sharing",
      alt_name: "Idat Technology Institute",
      color_code: "#00000099",
    },
    {
      title: "Responsive Design",
      subtitle: "- Platzi",
      logo_path: "platzi.png",
      certificate_link:
        "https://drive.google.com/file/d/1kArfUqWHgc7HU3ZhWuz4V2UlNHsqdEtf/view?usp=sharing",
      alt_name: "Platzi",
      color_code: "#0C9D5899",
    },
    {
      title: "Web Development",
      subtitle: "- Platzi",
      logo_path: "platzi.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ik4Mf0GDljPmWK-zb89nUtJcKRlKOQf4/view?usp=sharing",
      alt_name: "Platzi",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer Junior",
          company: "Positive Communications",
          company_url: "https://positive.agency/en/home/",
          logo_path: "positive.png",
          duration: "Feb 2019 - Aug 2019",
          location: "Lima, Peru",
          description:
            "I played a pivotal role in assisting the development team in creating and maintaining dynamic, user-friendly websites.I assisted in the design and implementation of responsive web interfaces to ensure a seamless user experience across various devices. I was responsible for debugging and troubleshooting issues to optimize website performance, functionality, and security. I also contributed to the planning and execution of quality assurance and testing procedures to identify and rectify bugs and issues. Managing version control and collaborating with team members using tools like Git and GitHub was a regular part of my work. I actively participated in team meetings, shared ideas, and contributed to project discussions. My experience as a Web Development Junior equipped me with the knowledge and skills necessary to contribute effectively to web development projects and deliver exceptional results.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Student Research",
          company: "Bergen Community College",
          company_url: "https://bergen.edu/",
          logo_path: "BCC-Seal.png",
          duration: "May 2023 - Aug 2023",
          location: "New Jersey, USA",
          description:
            "I assumed the dual role of AI Engineer Leader and Project Leader, One of the significant achievements during this project was our transition from TensorFlow to PyTorch, a decision that enhanced the project's flexibility and performance. As the AI Engineer Leader, I led the team through this transition, overseeing the migration, retraining, and optimization of the model. Through rigorous experimentation and fine-tuning, we managed to elevate the model's accuracy from an initial 60% to an impressive 91%. This internship was a transformative experience, not only in terms of my leadership skills but also in my deepening understanding of AI frameworks and their practical applications, ultimately contributing to the successful realization of a more accurate trash classification AI.",
          color: "#000000",
        },
        {
          title: "Student Research",
          company: "Bergen Community College",
          company_url: "https://bergen.edu/",
          logo_path: "BCC-Seal.png",
          duration: "Jan 2023 - Feb 2023",
          location: "New Jersey, USA",
          description:
            "I had the exciting opportunity to work on a cutting-edge project where we harnessed the power of TensorFlow to develop a classification AI system. Our primary goal was to classify various types of trash into eight distinct categories. Leveraging TensorFlow's machine learning capabilities, I actively participated in the training, fine-tuning, and optimization of the AI model. This experience allowed me to gain valuable insights into the practical applications of deep learning and image recognition, as well as the significance of sustainable waste management. It was a rewarding experience to contribute to a project with a positive environmental impact while expanding my knowledge and skills in artificial intelligence and machine learning.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Usefull Resources",
  description: "These are couple of reources I found that will help anyone",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Generative AI for Beginners",
      createdAt: "2023",
      description: "Github Repository created by Microsoft.",
      url: "https://github.com/microsoft/generative-ai-for-beginners",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "RoadMaps for Developers",
      createdAt: "2022",
      description: "Github Repository created by the Comunity.",
      url: "https://github.com/roadmapsh/next.roadmap.sh",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "VisuAlgo",
      createdAt: "2011",
      description: "Interactive website to learn Algorithms.",
      url: "https://visualgo.net/en",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Python Tutorial",
      createdAt: "2021",
      description: "Usefull website for learn python.",
      url: "https://python-course.eu/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Visual Machine Learning",
      createdAt: "2020",
      description: "Visual help to undertand Machine Learning Concepts.",
      url: "http://www.r2d3.us/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "julio.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://juliomorales.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Contact",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      //"https://www.google.com/maps/place/Bergen+Community+College/@40.9508792,-74.0907573,17z/data=!3m2!4b1!5s0x89c2fb3cb33d8fb5:0xf32cf80be3afba60!4m6!3m5!1s0x89c2fb22d77d0867:0xab02a8647ecaa119!8m2!3d40.9508752!4d-74.0881824!16zL20vMDVrZ3Qy?entry=ttu",
      "mailto:your-email@example.com?subject=Subject&body=Hello%20",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
