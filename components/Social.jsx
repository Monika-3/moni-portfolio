import Link from "next/link";

import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Monika-3" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/monika-s01/" },
  { icon: <FaMedium />, path: "https://medium.com/@monimska318" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@monickams2165" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}> 
    {socials.map((item,index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>;
};

export default Social;
