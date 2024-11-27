import { links } from "../../components/Footer";
import { Button } from "../../components/UI";
import { assets } from "../../utils/assets";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-32">
      <div className="w-1/2  h-full flex flex-col justify-center gap-10">
        <div className="flex flex-col gap-2 text-white">
          <h5 className="text-lg font-medium">Hi I am </h5>
          <h3 className="text-primary font-semibold text-xl">Akram Bedjaoui</h3>
          <h1 className="text-7xl font-bold">UI & UX</h1>
          <h1 className="text-7xl font-bold text-center">Designer </h1>
        </div>
        <div className="text-white flex flex-col gap-4">
          <p className="w-[60%]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-7">
        <img src={assets.heroImg} className="w-[70%]" alt="profile" />
        <ul className="flex items-center gap-3">
          {links.map((link, index) => (
            <li key={index} className="text-white capitalize text-2xl">
              <a href={link.link}>
                <link.icon className="text-white text-3xo" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
