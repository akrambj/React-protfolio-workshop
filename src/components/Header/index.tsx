import { Button, Logo } from "../UI";

export type Sections = {
  name: string;
  link: string;
};

export const sections: Sections[] = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About Me",
    link: "#",
  },
  {
    name: "Services",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Testimonials",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];
const Header = () => {
  return (
    <header className="w-full flex items-center justify-between gap-10 py-4 px-32 ">
      <Logo />
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {sections.map((section, index) => (
            <li key={index} className="text-white capitalize text-lg">
              <a href={section.link}>{section.name}</a>
            </li>
          ))}
        </ul>
        <Button>Downlaod CV</Button>
      </div>
    </header>
  );
};

export default Header;
