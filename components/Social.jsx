import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/webcrafter011" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/manuj-chaudhari-54b7bb242/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@ManujChaudhari001" },
  { icon: <FaTwitter />, path: "https://x.com/ProgressFlex_" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link> 
        );
      })}
    </div>
  );
};

export default Social;
