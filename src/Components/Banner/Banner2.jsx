import BannerPng from '../../assets/banner2.png';
import { BiPlayCircle } from 'react-icons/bi';

const Banner2 = ({ togglePlay }) => {
  return (
    <div className='relative py-12 sm:py-16'>
      <div className='container min-h-[620px] flex items-center'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 place-items-center'>
          {/* text content section */}
          <div className='relative order-2 sm:order-1 lg:pr-20'>
            <div className='relative z-10 space-y-6'>
              <h1
                data-aos='fade-up'
                data-aos-delay='300'
                className='text-4xl font-bold leading-tight sm:text-5xl'
              >
                EXPERIENCE THE FUTURE
                <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-cursive'>
                  Virtual Reality
                </span>
                <span className='text-3xl font-normal sm:text-4xl'>
                  LIKE NEVER BEFORE
                </span>
              </h1>
              <p
                data-aos='fade-up'
                data-aos-delay='500'
                className='text-lg text-gray-600'
              >
                Step into a world where imagination meets reality. Our
                cutting-edge VR platform offers immersive experiences that will
                transport you to new dimensions of entertainment and discovery.
              </p>
              <div className='flex items-center gap-6'>
                <button
                  data-aos='fade-up'
                  data-aos-delay='700'
                  className='px-8 py-3 text-lg transition-all duration-300 rounded-full primary-btn hover:shadow-lg'
                >
                  Explore Now
                </button>
                <button
                  data-aos='fade-up'
                  data-aos-delay='900'
                  onClick={togglePlay}
                  className='flex items-center gap-2 text-lg transition-colors duration-300 text-primary hover:text-secondary'
                >
                  <BiPlayCircle className='text-4xl' />
                  Watch Preview
                </button>
              </div>
            </div>
            {/* background color blob */}
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-30 animate-blob'></div>
          </div>

          {/* image section */}
          <div data-aos='fade-up' className='relative order-1 sm:order-2'>
            <img
              src={BannerPng}
              alt='VR Experience'
              className='w-full max-w-[400px] drop-shadow-xl'
            />
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 filter blur-2xl opacity-70 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
