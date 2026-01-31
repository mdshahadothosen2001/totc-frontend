import type { JSX } from "react";
import { CourseDetailTemplate } from "../../template/CourseDetails";

const courseDetailData = {
  header: {
    navItems: [
      { label: "Home", href: "#" },
      { label: "Courses", href: "#", isActive: true },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "About Us", href: "#" },
    ],
    user: {
      name: "Lina",
      avatarUrl: "/src/assets/lina-square.png",
    },
  },
  hero: {
    backgroundImage: "/src/assets/team-meeting.png",
    tabs: ["Overview", "Curriculum", "Instructor", "Reviews"],
  },
  pricing: {
    backgroundImage: "/src/assets/team-meeting.png",
    price: {
      current: "$49.65",
      original: "$99.99",
    },
    discount: "50% Off",
    timeLeft: "11 hour left at this price",
    features: [
      { icon: "/src/assets/guarantee.png", text: "Money Back Guarantee" },
      { icon: "/src/assets/device.png", text: "Access on all devices" },
      { icon: "/src/assets/completion.png", text: "Certification of completion" },
      { icon: "/src/assets/growth.png", text: "32 Moduls" },
    ],
    trainingDescription:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    socialIcons: [
      {
        src: "/src/assets/social/twitter.png",
        alt: "Twitter",
      },
      {
        src: "/src/assets/social/facebook.png",
        alt: "Facebook",
      },
      {
        src: "/src/assets/social/youtube.png",
        alt: "Youtube",
      },
      {
        src: "/src/assets/social/instagram.png",
        alt: "Instagram",
      },
      {
        src: "/src/assets/social/telegram.png",
        alt: "Telegram",
      },
      {
        src: "/src/assets/social/whatsapp.png",
        alt: "Whatsapp",
      },
    ],
  },
  courses: [
    {
      image: "/src/assets/laptop-meeting.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      category: "Design",
      duration: "3 Month",
      author: {
        name: "Lina",
        avatarUrl: "/src/assets/lina-square.png",
      },
      price: {
        current: "$80",
        original: "$100",
      },
    },
    {
      image: "/src/assets/laptop-coding.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      category: "Design",
      duration: "3 Month",
      author: {
        name: "Lina",
        avatarUrl: "/src/assets/lina-square.png",
      },
      price: {
        current: "$80",
        original: "$100",
      },
    },
    {
      image: "/src/assets/laptop-white.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      category: "Design",
      duration: "3 Month",
      author: {
        name: "Lina",
        avatarUrl: "/src/assets/lina-square.png",
      },
      price: {
        current: "$80",
        original: "$100",
      },
    },
    {
      image: "/src/assets/laptop-meeting.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      category: "Design",
      duration: "3 Month",
      author: {
        name: "Lina",
        avatarUrl: "/src/assets/lina-square.png",
      },
      price: {
        current: "$80",
        original: "$100",
      },
    },
  ],
  articlePreview: {
    author: {
      name: "Lina",
      avatarUrl: "/src/assets/lina-square.png",
    },
    preview:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    duration: "3 Month",
  },
  ratings: {
    overallRating: "4 out of 5",
    ratingLabel: "Top Raiting",
    ratings: [
      { stars: "5 Stars", percentage: 77 },
      { stars: "4 Stars", percentage: 77 },
      { stars: "3 Stars", percentage: 77 },
      { stars: "2 Stars", percentage: 77 },
      { stars: "1 Stars", percentage: 77 },
    ],
  },
  classroomFeatures: {
    title: "Everything you can do in a physical classroom, you can do with TOTC",
    description:
      "TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.",
    image:
      "/src/assets/classroom.png",
  },
  offers: [
    {
      image: "/src/assets/hashi.png",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC's school management software helps traditional and online schools manage scheduling,",
      percentage: "50%",
    },
    {
      image: "/src/assets/hashi.png",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC's school management software helps traditional and online schools manage scheduling,",
      percentage: "50%",
    },
    {
      image: "/src/assets/hashi.png",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC's school management software helps traditional and online schools manage scheduling,",
      percentage: "50%",
    },
  ],
  footer: {
    links: [
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
};

const CourseDetail = (): JSX.Element => {
  return <CourseDetailTemplate {...courseDetailData} />;
};

export default CourseDetail;
