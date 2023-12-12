import cvImage from './../img/cv1.jpg';
import munamiiImage from './../img/munami.jpg';
import responsiveImage from './../img/responsiv.jpg';
import portfolioImage from './../img/portfolio.jpg';
import productListImage from './../img/images.jpg';
import trackMoneyImage from './../img/track-money.jpeg';
import assetTrackingImage from './../img/pic2-2.png';

export const myProjects = [
  {
    projectTitle: ' My Curriculum Vitae',
    category: ['css'],
    imgPath: cvImage,
    projectText:
      'This project showcases my professional background, skills, and experience in a simple and accessible format. ',
    link: 'https://github.com/nailaalissa/Naila-AlissaCV',
  },
  {
    projectTitle: 'Munamii WebPage',
    category: ['css', 'java'],
    imgPath: munamiiImage,
    projectText:
      'This project is a responsive website designed to showcase and provide information about Munamii delicious cakes and cupcakes.',
    link: 'https://github.com/nailaalissa/homwork3-miniproject',
  },
  {
    projectTitle: 'Responsive Web Page',
    category: ['css'],
    imgPath: responsiveImage,
    projectText:
      ' This responsive web page adapts its layout and design to different devices, such as desktops, laptops, tablets, and smartphones. ',
    link: 'https://nailaalissa.github.io/FooCoding/HTML-CSs/week03/',
  },
  {
    projectTitle: 'My Portfolio',
    category: ['java', 'react'],
    imgPath: portfolioImage,
    projectText:
      "This portfolio is not just a static collection of my work, it's a dynamic and interactive showcase of my skills and projects.",
    link: 'https://nailaalissa.github.io/portfolio-project/',
  },
  {
    projectTitle: 'productList Console-App',
    category: ['c'],
    imgPath: productListImage,
    projectText:
      'This console application prompts the user to enter product details, allows them to quit ',
    link: 'https://github.com/nailaalissa/productList-App',
  },
  {
    projectTitle: ' Track Money Project',
    category: ['c'],
    imgPath: trackMoneyImage,
    projectText:
      'This money tracking application allows users to manage their expenses and incomes in a simple and intuitive way.',
    link: 'https://github.com/nailaalissa/homwork3-miniproject',
  },
  {
    projectTitle: ' Asset Tracking',
    category: ['c'],
    imgPath: assetTrackingImage,
    projectText:
      'Project serves as the foundation for a comprehensive system designed to manage and monitor company assets efficiently. ',
    link: 'https://github.com/nailaalissa/homwork3-miniproject',
  },
];
