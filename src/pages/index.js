import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/5-1.jpg'),
    thumbnail: require('../assets/images/thumbs/5-1.jpg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/5-2.jpg'),
    thumbnail: require('../assets/images/thumbs/5-2.jpg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/5-3.jpg'),
    thumbnail: require('../assets/images/thumbs/5-3.jpg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/5-4.jpg'),
    thumbnail: require('../assets/images/thumbs/5-4.jpg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/5-5.jpg'),
    thumbnail: require('../assets/images/thumbs/5-5.jpg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/7-1.jpeg'),
    thumbnail: require('../assets/images/thumbs/7-1.jpeg'),
    title: 'Lomography Color Neg 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/7-2.jpeg'),
    thumbnail: require('../assets/images/thumbs/7-2.jpeg'),
    title: 'Lomography Color Neg 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/7-3.jpeg'),
    thumbnail: require('../assets/images/thumbs/7-3.jpeg'),
    title: 'Lomography Color Neg 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/7-4.jpeg'),
    thumbnail: require('../assets/images/thumbs/7-4.jpeg'),
    title: 'Lomography Color Neg 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/7-5.jpeg'),
    thumbnail: require('../assets/images/thumbs/7-5.jpeg'),
    title: 'Lomography Color Neg 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-1.jpg'),
    thumbnail: require('../assets/images/thumbs/9-1.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-2.jpg'),
    thumbnail: require('../assets/images/thumbs/9-2.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-3.jpg'),
    thumbnail: require('../assets/images/thumbs/9-3.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-4.jpg'),
    thumbnail: require('../assets/images/thumbs/9-4.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-5.jpg'),
    thumbnail: require('../assets/images/thumbs/9-5.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-6.jpg'),
    thumbnail: require('../assets/images/thumbs/9-6.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/9-7.jpg'),
    thumbnail: require('../assets/images/thumbs/9-7.jpg'),
    title: 'Fujifilm Provia 400X',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/10-1.jpeg'),
    thumbnail: require('../assets/images/thumbs/10-1.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/10-2.jpeg'),
    thumbnail: require('../assets/images/thumbs/10-2.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/10-3.jpeg'),
    thumbnail: require('../assets/images/thumbs/10-3.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/12-1.jpeg'),
    thumbnail: require('../assets/images/thumbs/12-1.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/12-2.jpeg'),
    thumbnail: require('../assets/images/thumbs/12-2.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/12-3.jpeg'),
    thumbnail: require('../assets/images/thumbs/12-3.jpeg'),
    title: 'Kodak Colorplus 200',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/13-1.jpg'),
    thumbnail: require('../assets/images/thumbs/13-1.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/13-2.jpg'),
    thumbnail: require('../assets/images/thumbs/13-2.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/13-3.jpg'),
    thumbnail: require('../assets/images/thumbs/13-3.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/13-4.jpg'),
    thumbnail: require('../assets/images/thumbs/13-4.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/13-5.jpg'),
    thumbnail: require('../assets/images/thumbs/13-5.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/13-6.jpg'),
    thumbnail: require('../assets/images/thumbs/13-6.jpg'),
    title: 'Unknown',
    desc: '-',
  },
  {
    src: require('../assets/images/fulls/14-1.jpg'),
    thumbnail: require('../assets/images/thumbs/14-1.jpg'),
    title: 'Kodak Ultramax 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/14-2.jpg'),
    thumbnail: require('../assets/images/thumbs/14-2.jpg'),
    title: 'Kodak Ultramax 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/14-3.jpg'),
    thumbnail: require('../assets/images/thumbs/14-3.jpg'),
    title: 'Kodak Ultramax 400',
    desc: '📸🎞',
  },  
  {
    src: require('../assets/images/fulls/15-1.jpg'),
    thumbnail: require('../assets/images/thumbs/15-1.jpg'),
    title: 'Fujifilm Superia Premium 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/15-2.jpg'),
    thumbnail: require('../assets/images/thumbs/15-2.jpg'),
    title: 'Fujifilm Superia Premium 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/15-3.jpg'),
    thumbnail: require('../assets/images/thumbs/15-3.jpg'),
    title: 'Fujifilm Superia Premium 400',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/18-1.jpg'),
    thumbnail: require('../assets/images/thumbs/18-1.jpg'),
    title: 'Kodak Portra 160',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/18-2.jpg'),
    thumbnail: require('../assets/images/thumbs/18-2.jpg'),
    title: 'Kodak Portra 160',
    desc: '📸🎞',
  },
  {
    src: require('../assets/images/fulls/18-3.jpg'),
    thumbnail: require('../assets/images/thumbs/18-3.jpg'),
    title: 'Kodak Portra 160',
    desc: '📸🎞',
  },
];

let shuffled = img_set
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

const IndexPage = () => (
  <Layout>
    <Gallery images={shuffled} />
  </Layout>
);

export default IndexPage;
