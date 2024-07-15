import HeroPng from '../../assets/hero.png';
import { BiPlayCircle } from 'react-icons/bi';

const Hero = ({ togglePlay }) => {
  return (
    <div className='py-12 overflow-hidden duration-300 sm:py-0 dark:bg-black dark:text-white'>
      <div className='container min-h-[650px] flex relative'>
        <div className='relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center'>
          {/* hero text section */}
          <div className='relative z-30 order-2 space-y-6 sm:order-1 lg:pr-20'>
            <h1
              data-aos='fade-up'
              className='text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'
            >
              GET READY TO ENJOY
              <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-cursive'>
                VR Gaming
              </span>
              <span className='text-3xl font-normal sm:text-4xl lg:text-5xl'>
                WITH OUR PLATFORM
              </span>
            </h1>
            <p
              data-aos='fade-up'
              data-aos-delay='300'
              className='text-lg text-gray-300'
            >
              Immerse yourself in breathtaking virtual worlds and experience
              gaming like never before. Our platform brings you cutting-edge VR
              technology for unforgettable adventures.
            </p>
            <div className='flex items-center gap-6'>
              <button
                data-aos='fade-up'
                data-aos-delay='500'
                className='px-8 py-3 text-lg transition-all duration-300 rounded-full primary-btn hover:shadow-lg'
              >
                Get Started
              </button>
              <button
                data-aos='fade-up'
                data-aos-delay='700'
                onClick={togglePlay}
                className='flex items-center gap-2 text-lg transition-colors duration-300 text-primary hover:text-secondary'
              >
                <BiPlayCircle className='text-4xl' />
                See Demo
              </button>
            </div>
          </div>
          {/* image section */}
          <div
            data-aos='fade-left'
            data-aos-offset='200'
            className='relative order-1 sm:order-2'
          >
            <img
              src={HeroPng}
              alt='VR Gaming'
              className='w-full max-w-md mx-auto drop-shadow-2xl'
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 filter blur-3xl opacity-30 animate-pulse'></div>
          </div>
        </div>

        {/* Animated Blob */}
        <div className='h-[400px] w-[400px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob'></div>
      </div>
    </div>
  );
};

export default Hero;
