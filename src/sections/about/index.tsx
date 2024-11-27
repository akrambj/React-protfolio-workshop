import Skills from "../../components/About/Skills";
import { assets } from "../../utils/assets";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen px-32 text-white">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-7">
        <img src={assets.aboutImg} className="w-[70%]" alt="profile" />
      </div>
      <div className="w-1/2  h-full flex flex-col justify-center gap-7">
        <h2 className="text-5xl font-bold">About Me</h2>
        <p className="w-[60%]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default About;
