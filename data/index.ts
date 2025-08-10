import { Github, Linkedin } from 'lucide-react';

import cw from '@/public/projects-imgs/cw.webp';
import ecommerce from '@/public/projects-imgs/e-commerce.webp';
import lukaskadela from '@/public/projects-imgs/lukaskadela.webp';
import retrocech from '@/public/projects-imgs/retrocech.webp';

const data = {
  home: {
    name: 'Aga Kadela',
    description:
      'I Fix, Optimize & Build #Next_js & #React Apps - Powered by #AI', // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: '#contact',
  },
  sidebar: {
    links: [
      {
        name: 'github',
        link: 'https://github.com/NailethR/',
        icon: Github,
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/naileth-rangel-36911498/',
        icon: Linkedin,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: 'Coder Woman Platform',
        description:
          'Platform to sell online courses, helping empower women in tech by making coding education accessible.\n\n Technologies Used: Next.js, React.js, CSS, Stripe API.',
        image: cw,
        previewLink: 'https://coderwoman.com',
      },
      {
        id: 2,
        title: 'RetroCech Website',
        description:
          'A professional and visually appealing website that captures the vintage style of the business while ensuring smooth performance and easy navigation. \n\n Technologies Used: Next.js, Tailwind CSS, React.js.',
        image: retrocech,
        previewLink: 'https://retrocech.com',
      },
      {
        id: 3,
        title: 'E-commerce Platform',
        description:
          'Worked on one of a biggest e-commerce platform in Poland, as part of a Scrum team for 1.5 years, focusing on checkout and payment workflows. \n\n Technologies Used: Next.js, React.js, Tailwind CSS, Stripe API.',
        image: ecommerce,
        previewLink: 'https://x-kom.pl',
      },
      {
        id: 4,
        title: 'Personal Portfolio Website',
        description:
          'A reliable and polished website that makes it easy for the expert to share their skills and impress potential clients or employers. \n\n Technologies Used: Next.js, React.js, CSS.',
        image: lukaskadela,
        previewLink: 'https://lukaskadela.com',
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: 'html',
        src: '/skills/html.svg'
      },
      {
        id: 2,
        name: 'css',
        src: '/skills/css.svg'
      },
      {
        id: 3,
        name: 'javascript',
        src: '/skills/javascript.svg'
      },
      {
        id: 4,
        name: 'php',
        src: '/skills/typescript.svg'
      },
      {
        id: 5,
        name: 'angular',
        src: '/skills/react.svg'
      },
      {
        id: 6,
        name: 'laravel',
        src: '/skills/tailwind.svg'
      },
      {
        id: 7,
        name: '',
        src: '/skills/git.svg'
      },
      {
        id: 11,
        name: 'docker',
        src: '/skills/docker.svg'
      },
      {
        id: 12,
        name: 'figma',
        src: '/skills/figma.svg'
      },
      {
        id: 13,
        name: 'firebase',
        src: '/skills/firebase.svg'
      }
    ],
  },
  contact: {
    email: 'aga.kadela.dev@gmail.com',
    name: 'Aga Kadela',
  },
};

export default data;
