import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMysql,
  IconBrandTwitter
} from "@tabler/icons-react";
import {
  IoBriefcaseOutline,
  IoFileTrayFullOutline,
  IoHomeOutline,
  IoShapesOutline,
  IoStarOutline,
  IoTerminalOutline
} from "react-icons/io5";
import Introduce from "@components/home/introduce/Introduce.tsx";
import Skills from "@components/home/skills/Skills.tsx";
import {svgIcons} from "@constants/svg-icons.ts";


export const USER_DETAIL = {
  username: "akrv7591",
  firstname: "Abubakr",
  lastname: "Khabebulloev",
  role: "I am a fullstack Web developer currently living in Busan. I enjoy learning new technologies",
  currentLocation: "Busan, South Korea",
  socials: [{
    id: 0,
    label: "Facebook",
    icon: IconBrandFacebook,
    url: "#"
  }, {
    id: 1,
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    url: "#"
  }, {
    id: 2,
    label: "Github",
    icon: IconBrandGithub,
    url: "#"
  }, {
    id: 3,
    label: "Instagram",
    icon: IconBrandInstagram,
    url: "#"
  }, {
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

export const content = [
  {
    id: 0,
    label: "Introduce",
    icon: IoHomeOutline,
    component: Introduce
  },
  {
    id: 4,
    label: "Professional Skills",
    icon: IoShapesOutline,
    component: Skills
  },
  //  {
  //   id: 2,
  //   label: "Jobs",
  //   icon: IoBriefcaseOutline,
  //   component: Introduce
  // }, {
  //   id: 3,
  //   label: "Services",
  //   icon: IoTerminalOutline,
  //   component: Introduce
  // },
  // {
  //   id: 5,
  //   label: "Projects",
  //   icon: IoFileTrayFullOutline,
  //   component: Introduce
  // },
  // {
  //   id: 6,
  //   label: "Testimonials",
  //   icon: IoStarOutline,
  //   component: Introduce
  // }
]


const frontendLanguages = [{
  label: "Typescript",
  icon: svgIcons.Typescript,
}, {
  label: "JavaScript",
  icon: svgIcons.Javascript,
}, {
  label: "HTML 5",
  icon: svgIcons.HTML5,
}, {
  label: "CSS3",
  icon: svgIcons.CSS3,
}]

const backendLanguages = [{
  label: "Typescript",
  icon: svgIcons.Typescript,
}, {
  label: "JavaScript",
  icon: svgIcons.Javascript,
}, {
  label: "Python",
  icon: svgIcons.Python,
}]

const frontendFrameworks = [{
  label: "React",
  icon: svgIcons.React
}, {
  label: "React-Native",
  icon: svgIcons.React
}]

const backendFrameworks = [{
  label: "ExpressJS",
  icon: svgIcons.Express
}, {
  label: "NestJS",
  icon: svgIcons.Nest
}, {
  label: "Django",
  icon: svgIcons.Django
}, {
  label: "Flask",
  icon: svgIcons.Flask
}]

const developmentEnvironments = [{
  label: "Vite",
  icon: svgIcons.Vitejs
}, {
  label: "CRA",
  icon: svgIcons.CRA
}]

const uiLibraries = [{
  label: "Mantine",
  icon: svgIcons.Mantine
}, {
  label: "Ant design",
  icon: svgIcons.AntDesign
}, {
  label: "Material ui(MUI)",
  icon: svgIcons.Mui
}]

const stateManagements = [{
  label: "Zustand",
  icon: null
}, {
  label: "Mobx",
  icon: svgIcons.Mobx
}, {
  label: "Mobx-state-tree",
  icon: svgIcons.SiMobxstatetree
}]

const maps = [{
  label: "Google Maps",
  icon: svgIcons.GoogleMap
}, {
  label: "Naver Maps",
  icon: svgIcons.Naver
}, {
  label: "Kakao Maps",
  icon: svgIcons.Kakao
}, {
  label: "Mapbox Maps",
  icon: svgIcons.Mapbox
}, {
  label: "Leaflet Maps",
  icon: svgIcons.Leaflet
}]

const frontEndEtc = [{
  label: "XYFlow(Reactflow)",
  icon: null
}, {
  label: "ThreeJS",
  icon: null
}, {
  label: "GreenSocks",
  icon: null
}, {
  label: "Socket.io",
  icon: null
}]

const frontend = [{
  label: "Languages",
  items: frontendLanguages
}, {
  label: "Frameworks",
  items: frontendFrameworks
}, {
  label: "Development environments",
  items: developmentEnvironments
}, {
  label: "Ui libraries",
  items: uiLibraries
}, {
  label: "State-managements",
  items: stateManagements
}, {
  label: "Maps",
  items: maps
}, {
  label: "Etc",
  items: frontEndEtc
}]

const backendDatabases = [{
  label: "MySQL",
  icon: IconBrandMysql
}]

const backendWebservers = [{
  label: "Nginx",
  icon: null
}, {
  label: "Apache 2",
  icon: null
}, {
  label: "PM2",
  icon: null
}]

const backendAwsServices = [{
  label: "EC2",
  icon: null
}, {
  label: "S3",
  icon: null
}, {
  label: "RDS",
  icon: null
}, {
  label: "Route53",
  icon: null
}, {
  label: "S3",
  icon: null
}]

const backendGoogleCloudServices = [{
  label: "Compute",
  icon: null
}, {
  label: "OAUTH 2",
  icon: null
}, {
  label: "Firebase",
  icon: null
},]

const backendEndEtc = [{
  label: "Redis",
  icon: null
}, {
  label: "Jenkins",
  icon: null
}, {
  label: "Socket.io",
  icon: null
}, {
  label: "Ubuntu-server",
  icon: null
}]


const backend = [{
  label: "Languages",
  items: backendLanguages
}, {
  label: "Frameworks",
  items: backendFrameworks
}, {
  label: "Database",
  items: backendDatabases
}, {
  label: "Webservers",
  items: backendWebservers
}, {
  label: "Amazon Web Services",
  items: backendAwsServices
}, {
  label: "Google Cloud Computing",
  items: backendGoogleCloudServices
}, {
  label: "Etc",
  items: backendEndEtc
}]


export const skills = {
  frontend,
  backend,
}


