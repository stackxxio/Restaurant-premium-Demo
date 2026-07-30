import React from 'react';
import LenisProvider from './components/LenisProvider';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import FilmGrain from './components/FilmGrain';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ManifestoSeparator from './sections/ManifestoSeparator';
import AutoScrollShowcase from './sections/AutoScrollShowcase';
import BrandStory from './sections/BrandStory';
import MasterChef from './sections/MasterChef';
import SignatureDishes from './sections/SignatureDishes';
import SignatureExperience from './sections/SignatureExperience';
import ImmersiveGallery from './sections/ImmersiveGallery';
import LocationExperience from './sections/LocationExperience';
import PrivateDining from './sections/PrivateDining';
import ReservationExperience from './sections/ReservationExperience';
import Footer from './components/Footer';

function App() {
  return (
    <LenisProvider>
      <FilmGrain />
      <AudioPlayer />
      <CustomCursor />
      <Preloader />
      <Navbar />
      <main>
        <Hero />                  {/* 1. DARK */}
        <ManifestoSeparator />    {/* 2. LIGHT */}
        <AutoScrollShowcase />    {/* 3. DARK */}
        <BrandStory />            {/* 4. LIGHT */}
        <MasterChef />            {/* 5. DARK */}
        <SignatureDishes />       {/* 6. LIGHT */}
        <SignatureExperience />   {/* 7. DARK */}
        <ImmersiveGallery />      {/* 8. LIGHT */}
        <LocationExperience />    {/* 9. DARK */}
        <PrivateDining />         {/* 10. LIGHT */}
        <ReservationExperience /> {/* 11. DARK */}
      </main>
      <Footer />                  {/* 12. DARK */}
    </LenisProvider>
  );
}

export default App;
