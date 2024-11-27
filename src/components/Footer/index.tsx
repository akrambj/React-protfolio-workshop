import { IconType } from "react-icons";
import { assets } from "../../utils/assets";
import { sections } from "../Header";
import { Logo } from "../UI";

export type Link = {
  icon: IconType;
  link: string;
};

export const links: Link[] = [
  {
    icon: assets.facebookIcon,
    link: "#",
  },
  {
    icon: assets.xIcon,
    link: "#",
  },
  {
    icon: assets.instagramIcon,
    link: "#",
  },
  {
    icon: assets.linkdineIcon,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-10 items-center">
      <Logo />
      <ul className="flex items-center gap-10">
        {sections.map((section, index) => (
          <li key={index} className="text-white capitalize text-lg">
            <a href={section.link}>{section.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {links.map((link, index) => (
          <li key={index} className="text-white capitalize text-lg">
            <a href={link.link}>
              <link.icon className="text-white text-3xo" />
            </a>
          </li>
        ))}
      </ul>
      <div className="bg-black py-2 text-center w-full">
        <h4 className="text-white">
          © 2023 <span className="text-primary">FawziUiUx</span> All Rights
          Reserved , Inc.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
