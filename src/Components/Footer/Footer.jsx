import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

const FooterLinks = [
  { id: 1, title: 'Home', link: '/#' },
  { id: 2, title: 'About', link: '/#about' },
  { id: 3, title: 'Contact', link: '/#contact' },
  { id: 4, title: 'Blog', link: '/#blog' },
];

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-zinc-900 mt-14 rounded-t-3xl'>
      <div data-aos='fade' className='container px-4 py-12 mx-auto'>
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Company Details */}
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold font-cursive text-primary'>
              Metaverse
            </h1>
            <p className='text-sm text-gray-600 dark:text-gray-300'>
              Exploring the digital frontier, one pixel at a time. Join us on
              this exciting journey into the Metaverse!
            </p>
            {/* Contact section */}
            <div className='space-y-2'>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-200'>
                <FaLocationArrow className='transition duration-300 text-primary hover:text-blue-500 hover:scale-110' />
                <p>India, Earth 🌏</p>
              </div>
              <div className='flex items-center gap-3 text-gray-700 dark:text-gray-200'>
                <FaMobileAlt className='transition duration-300 text-primary hover:text-blue-500 hover:scale-110' />
                <p>+91 123456789</p>
              </div>
            </div>
            {/* Social handles */}
            <div className='flex items-center gap-4 mt-6'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/itsadi-24'
                className='text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-500'
              >
                <FaGithub className='text-3xl transition duration-300 hover:text-blue-500 hover:scale-110' />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/adi-prasan-khuntia-3944072a5/'
                className='text-gray-700 transition-colors dark:text-gray-200 hover:text-blue-500'
              >
                <FaLinkedin className='text-3xl transition duration-300 hover:text-blue-500 hover:scale-110' />
              </a>
            </div>
          </div>

          {/* Footer Links section */}
          <div className='grid col-span-2 gap-8 sm:grid-cols-3'>
            {['Quick Links', 'Resources', 'Community'].map((section, index) => (
              <div key={index}>
                <h2 className='mb-4 text-2xl font-semibold font-cursive text-primary'>
                  {section}
                </h2>
                <ul className='space-y-2'>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className='transition-transform hover:translate-x-2'
                    >
                      <a
                        href={link.link}
                        className='text-gray-600 transition-colors dark:text-gray-300 hover:text-blue-500 hover:underline hover:decoration-blue-500 hover:decoration-dotted'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='text-2xl text-center text-blue-500 cursor-pointer font-cursive dark:text-primary hover:underline'>
          <a
            href='https://www.linkedin.com/in/adi-prasan-khuntia-3944072a5/'
            target='_blank'
            rel='noreferrer'
          >
            <p> Made with 💖 by Adi</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
