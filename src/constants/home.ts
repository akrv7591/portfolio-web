import {
  IconBrandFacebook, IconBrandGithub, IconBrandInstagram,
  IconBrandJavascript, IconBrandLinkedin,
  IconBrandMysql,
  IconBrandNpm,
  IconBrandReact, IconBrandTwitter
} from "@tabler/icons-react";

export const USER_DETAIL = {
  username: "Abubakr Khabebulloev",
  role: "I am a fullstack Web developer currently living in Busan. I enjoy learning new technologies",
  currentLocation: "Busan, South Korea",
  socials: [{
    id: 0,
    label: "Facebook",
    icon: IconBrandFacebook,
    url: "#"
  },{
    id: 1,
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    url: "#"
  },{
    id: 2,
    label: "Github",
    icon: IconBrandGithub,
    url: "#"
  },{
    id: 3,
    label: "Instagram",
    icon: IconBrandInstagram,
    url: "#"
  },{
    id: 4,
    label: "Twitter",
    icon: IconBrandTwitter,
    url: "#"
  }],
  socialLink: {
    facebook: "",
    linkedIn: "",
    twitter: "",
    dribble: "",
    instagram: "",
    github: "",
  },
};

const languages = [{
  label: "JavaScript",
  icon: IconBrandJavascript,
}]

const frontend = [{
  label: "React",
  icon: IconBrandReact
}]

const backend = [{
  label: "NodeJs",
  icon: IconBrandNpm
}]

const db = [{
  label: "MySql",
  icon: IconBrandMysql
}]


export const stacks = [{
  languages,
  frontend,
  backend,
  db
}]