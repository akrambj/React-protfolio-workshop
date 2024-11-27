import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Assets = {
  facebookIcon: IconType;
  xIcon: IconType;
  instagramIcon: IconType;
  linkdineIcon: IconType;
};

export const assets: Assets = {
  facebookIcon: FaFacebook,
  xIcon: FaXTwitter,
  instagramIcon: FaInstagram,
  linkdineIcon: FaLinkedin,
};
