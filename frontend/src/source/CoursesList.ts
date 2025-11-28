import { TbFileTypeSql } from "react-icons/tb";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import next from "../images/next.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";

export const courses = [
  {
    id: 1,
    title: "Next level NextJS",
    description:
      "Learn NextJS from the very basics to advanced patterns while building real-world projects.",
    timeItem: "15h",
    img: next,
    stack: [
      { id: 1, icon: TbFileTypeSql },
      {
        id: 2,
        icon: FaJs,
      },
      {
        id: 3,
        icon: FaReact,
      },

      {
        id: 3,
        icon: SiTypescript,
      },
    ],
  },
  {
    id: 2,
    title: "ReactJS Ultra for Beginners",
    description:
      "ReactJS Ultra will take you from beginner to advanced in ReactJS, focusing on building real-world projects.",
    timeItem: "12h",
    img: react,
    stack: [
      {
        id: 1,
        icon: FaReact,
      },
      {
        id: 2,
        icon: FaJs,
      },

      {
        id: 3,
        icon: SiTypescript,
      },
    ],
  },
  {
    id: 3,
    title: "Tailwind CSS Crash Course",
    description:
      "Master Tailwind CSS quickly by building practical projects and learning best practices.",
    timeItem: "1h 2m",
    img: tailwind,
    stack: [
      {
        id: 1,
        icon: SiTypescript,
      },
    ],
  },
];
