import React from 'react';
import Menu from '../../components/Menu'
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: "#141414"}} >
      <Menu />

      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription={"What is Front-end? Working at the area"}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[5]}
      />

      <Footer/>

    </div>
  );
}

export default Home;
