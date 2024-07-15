import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';

const AppStore = () => {
  return (
    <div className='container py-16 sm:py-20 sm:min-h-[400px] flex items-center'>
      <div className='max-w-2xl mx-auto space-y-8 text-center'>
        <h1
          data-aos='fade-up'
          className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'
        >
          Experience VR
          <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-cursive'>
            Anytime, Anywhere
          </span>
        </h1>
        <p
          data-aos='fade-up'
          data-aos-delay='300'
          className='text-lg text-gray-600 sm:px-20'
        >
          Download our app and immerse yourself in captivating virtual worlds.
          Available now on iOS and Android devices.
        </p>
        <div
          className='flex flex-wrap items-center justify-center gap-6'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <a
            href='#'
            className='transition-transform rounded-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          >
            <img
              src={AppStoreImg}
              alt='Download on the App Store'
              className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px]'
            />
          </a>
          <a
            href='#'
            className='transition-transform rounded-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          >
            <img
              src={PlayStoreImg}
              alt='Get it on Google Play'
              className='max-w-[150px] sm:max-w-[180px] md:max-w-[200px]'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
