import BannerPng from '../../assets/banner1.png';
import { BiPlayCircle } from 'react-icons/bi';

const Banner = ({ togglePlay }) => {
  return (
    <div className='relative py-12 sm:py-16'>
      <div className='container min-h-[620px] flex items-center'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 place-items-center'>
          {/* image section */}
          <div data-aos='fade-up' data-aos-once='false' className='relative'>
            <img
              src={BannerPng}
              alt='VR Movies'
              className='w-full max-w-[400px] drop-shadow-xl'
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 filter blur-2xl opacity-70 animate-pulse'></div>
          </div>
          {/* text content section */}
          <div className='relative lg:pr-20'>
            <div className='relative z-10 space-y-6'>
              <h1
                data-aos='fade-up'
                data-aos-delay='300'
                className='text-4xl font-bold leading-tight sm:text-5xl'
              >
                GET READY TO ENJOY
                <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-cursive'>
                  VR Movies
                </span>
                <span className='text-3xl font-normal sm:text-4xl'>
                  WITH OUR PLATFORM
                </span>
              </h1>
              <p
                data-aos='fade-up'
                data-aos-delay='500'
                className='text-lg text-gray-600'
              >
                Immerse yourself in breathtaking cinematic experiences like
                never before. Our platform brings you cutting-edge VR technology
                for unforgettable movie adventures.
              </p>
              <div className='flex items-center gap-6'>
                <button
                  data-aos='fade-up'
                  data-aos-delay='700'
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
            {/* background color blob */}
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-30 animate-blob'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
