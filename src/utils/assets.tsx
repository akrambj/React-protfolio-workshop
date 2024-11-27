import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Assets = {
  facebookIcon: IconType;
  xIcon: IconType;
  instagramIcon: IconType;
  linkdineIcon: IconType;
  heroImg: string;
  aboutImg: string;
};

export const assets: Assets = {
  facebookIcon: FaFacebook,
  xIcon: FaXTwitter,
  instagramIcon: FaInstagram,
  linkdineIcon: FaLinkedin,
  heroImg: "/imgs/Hero.png",
  aboutImg: "/imgs/about.png",
};
