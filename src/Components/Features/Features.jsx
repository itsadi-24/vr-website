import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const FeaturesData = [
  {
    name: 'Immersive Experiences',
    icon: (
      <FaCameraRetro className='text-6xl duration-300 text-primary group-hover:text-white' />
    ),
    link: '#',
    description:
      'Dive into breathtaking virtual worlds with our cutting-edge VR technology.',
    aosDelay: '300',
  },
  {
    name: 'Secure Platform',
    icon: (
      <GiNotebook className='text-6xl duration-300 text-primary group-hover:text-white' />
    ),
    link: '#',
    description:
      'Enjoy peace of mind with our robust security measures and safe transactions.',
    aosDelay: '500',
  },
  {
    name: 'Endless Possibilities',
    icon: (
      <SlNote className='text-6xl duration-500 text-primary group-hover:text-white' />
    ),
    link: '#',
    description:
      'Explore a vast array of VR content, from games to educational experiences.',
    aosDelay: '700',
  },
];

const Features = () => {
  return (
    <div className='container py-16 sm:py-20'>
      <div>
        <h1
          data-aos='fade-up'
          className='mb-16 text-4xl font-bold text-center sm:text-5xl'
        >
          Why Choose
          <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-cursive'>
            Our VR Platform
          </span>
        </h1>

        {/* card section */}
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {FeaturesData.map((data, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}
              className='text-center group space-y-6 p-6 sm:p-8 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white rounded-xl duration-300 transform hover:-translate-y-2'
            >
              <div className='grid place-items-center'>{data.icon}</div>
              <h2 className='text-2xl font-semibold'>{data.name}</h2>
              <p className='text-gray-300 group-hover:text-gray-100'>
                {data.description}
              </p>
              <a
                href={data.link}
                className='inline-block px-4 py-2 text-lg font-semibold transition-all duration-300 border rounded-full text-primary group-hover:text-white border-primary group-hover:border-white hover:bg-white hover:text-primary'
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
