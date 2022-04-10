import webFunImg from '../assets/web-fund-course-1.png';
import webMainImg from '../assets/web-fund-course.png';
import dbImg from '../assets/database-course.png'
const cards = [
  {
    id: '001',
    title: 'Web designing',
    description:
      'This course will give you hands-on experience with developing web layouts,basic designing concepts, bootstrap etc. deploy your site to your gitHub pages',
      image:`${webFunImg}`,
  },
  {
    id: '002',
    title: 'DSA fundamentals',
    description:'Improve your coding skills with solving easy to hard algorithms with languages C, C++, Java, Python',
    image:`${webMainImg}`,
    
  },
  {
    id: '003',
    title: 'DBMS fundamentals',
    description:'Learn how to manage SQL/NoSQL based databases from scratch with hands-on experiments with PostgresSQL/MySQL',
      image:`${dbImg}`,

  },
];

export default cards;
