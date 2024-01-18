import {IconBrandGithub, IconBrandLinkedin, IconBrandMysql, IconBrandTwitter} from "@tabler/icons-react";
import {IoBriefcaseOutline, IoFileTrayFullOutline, IoHomeOutline, IoShapesOutline} from "react-icons/io5";
import Introduce from "@components/home/introduce/Introduce.tsx";
import Skills from "@components/home/skills/Skills.tsx";
import {svgIcons} from "@constants/svg-icons.ts";
import Careers from "@components/home/career/Careers.tsx";
import Projects from "@components/home/projects/Projects.tsx";

export const USER_DETAIL = {
  username: "akrv7591",
  firstname: "Abubakr",
  lastname: "Khabebulloev",
  role: "I am a fullstack Web developer currently living in Busan. I enjoy learning new technologies",
  currentLocation: "Busan, South Korea",
  socials: [
    {
      id: 1,
      label: "LinkedIn",
      icon: IconBrandLinkedin,
      url: "https://www.linkedin.com/in/abubakr-khabebulolev-35182b232/"
    },
    {
      id: 2,
      label: "Github",
      icon: IconBrandGithub,
      url: "https://github.com/akrv7591"
    },
    {
      id: 4,
      label: "Twitter",
      icon: IconBrandTwitter,
      url: "https://twitter.com/akrv7591"
    }
  ],
};


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


export const skills = [{
  label: "Front-end",
  items: frontend,
}, {
  label: "Back-end",
  items: backend
}]

export const jobs = [{
  label: "ZEROWEB ((주)제로웹)",
  location: "Korea, Busan",
  startDate: "2020-08-13",
  endDate: "Present",
  role: "Full-stack web developer",
  logo: svgIcons.Zeroweb,
  link: "https://zeroweb.kr/"
}]

export const careers = [{
  label: "Full-time",
  items: jobs
}]

export const professionalProjects = [{
  label: "지하철 내비게이션",
  startDate: "2022-02-01",
  endDate: "2023-05-01",
  role: "Full-stack web developer",
  images: [
    '/projects/subway-navigation/sn-0.webp',
    '/projects/subway-navigation/sn-1.webp',
    '/projects/subway-navigation/sn-2.webp',
    '/projects/subway-navigation/sn-3.webp',
    '/projects/subway-navigation/sn-4.webp',
    '/projects/subway-navigation/sn-5.webp',
    '/projects/subway-navigation/sn-6.webp',
    '/projects/subway-navigation/sn-7.webp',
    '/projects/subway-navigation/sn-8.webp',
  ],
  links: [{
    label: "Google Play",
    link: "https://play.google.com/store/apps/details?id=cloud.zeroweb.navigation.subway"
  }],
  skills: [{
    label: "NodeJS",
    icon: null
  }, {
    label: "Typescript",
    icon: svgIcons.Typescript
  }, {
    label: "React",
    icon: svgIcons.React
  }, {
    label: "MySQL",
    icon: null
  }]
}, {
  label: "심부름이 필요할때, 헬퍼잇",
  startDate: "2022-05-01",
  endDate: "2022-12-01",
  role: "Backend developer",
  images: [
    '/projects/helperit/h-0.png',
  ],
  links: [{
    label: "Helperit homepage",
    link: "https://helperit.co.kr/"
  }],
  skills: [{
    label: "NodeJS",
    icon: null
  }, {
    label: "Typescript",
    icon: svgIcons.Typescript
  }, {
    label: "MySQL",
    icon: null
  }]
}, {
  label: "스마트시티 통합플랫폼, TTA Certified",
  startDate: "2022-02-01",
  endDate: "2023-02-01",
  role: "Backend developer",
  images: [
    '/projects/tta/ta-0.png',
    '/projects/tta/ta-1.png',
    '/projects/tta/ta-2.png',
    '/projects/tta/ta-3.png',
    '/projects/tta/ta-4.png',
    '/projects/tta/ta-5.png',
  ],
  links: [],
  skills: [{
    label: "NodeJS",
    icon: null
  }, {
    label: "Typescript",
    icon: svgIcons.Typescript
  }, {
    label: "MySQL",
    icon: null
  }, {
    label: "RTSP Camera streaming",
    icon: null
  }, {
    label: "Onvif Camera controlling",
    icon: null
  }]
}, {
  label: "1등급( 소프트웨어품질인증의 최고등급)",
  startDate: "2023-03-01",
  endDate: "2023-10-01",
  role: "Backend developer",
  images: [
    '/projects/tta/ta-0.png',
    '/projects/tta/ta-1.png',
    '/projects/tta/ta-2.png',
    '/projects/tta/ta-3.png',
    '/projects/tta/ta-4.png',
    '/projects/tta/ta-5.png',
  ],
  links: [],
  skills: [{
    label: "NodeJS",
    icon: null
  }, {
    label: "Typescript",
    icon: svgIcons.Typescript
  }, {
    label: "MySQL",
    icon: null
  }, {
    label: "RTSP Camera streaming",
    icon: null
  }, {
    label: "Onvif Camera controlling",
    icon: null
  }]

}]


export const projects = [{
  label: "Professional",
  items: professionalProjects
},
//   {
//   label: "Personal",
//   items: []
// }
]


export const content = [
  {
    id: 0,
    label: "Introduce",
    icon: IoHomeOutline,
    component: Introduce
  },
  {
    id: 1,
    label: "Skills",
    icon: IoShapesOutline,
    component: Skills
  },
  {
    id: 2,
    label: "Career",
    icon: IoBriefcaseOutline,
    component: Careers
  },
  {
    id: 5,
    label: "Projects",
    icon: IoFileTrayFullOutline,
    component: Projects
  },
  // {
  //   id: 3,
  //   label: "Services",
  //   icon: IoTerminalOutline,
  //   component: Introduce
  // },
  // {
  //   id: 6,
  //   label: "Testimonials",
  //   icon: IoStarOutline,
  //   component: Introduce
  // }
]
