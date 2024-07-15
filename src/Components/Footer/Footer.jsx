import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';

const FooterLinks = [
  { id: 1, title: 'Home', link: '/#' },
  {
    id: 2,
    title: 'About',
    link: '/#about',
  },
  {
    id: 3,
    title: 'Contact',
    link: '/#contact',
  },
  {
    id: 4,
    title: 'Blog',
    link: '/#blog',
  },
];
const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
        <div data-aos='fade' className='container'>
          <div className='grid py-4 md:grid-cols-3'>
            {/* company Details */}
            <div className='px-4 py-8'>
              <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
                Metaverse
              </h1>
              <p className='text-sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
              </p>
              <br />

              {/* contact section */}
              <div>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Rourkela, Odisha</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>

              {/* social handle */}
              <div className='flex items-center gap-3 mt-6'>
                <a href='#'>
                  <FaFacebook className='text-3xl duration-300 hover:text-primary' />
                </a>
                <a href='#'>
                  <FaInstagram className='text-3xl duration-300 hover:text-primary' />
                </a>
                <a href='#'>
                  <FaLinkedin className='text-3xl duration-300 hover:text-primary' />
                </a>
              </div>
            </div>

            {/* Footer Links section */}
            <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
              <div>
                <div className='px-4 py-8'>
                  <h1 className='mb-3 text-xl font-bold '>Quick Links</h1>
                  <ul className='space-y-3'>
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className='duration-300 hover:translate-x-1 '
                      >
                        <a
                          href={link.link}
                          className='cursor-pointer hover:text-primary'
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='px-4 py-8'>
                  <h1 className='mb-3 text-xl font-bold '>Quick Links</h1>
                  <ul className='space-y-3'>
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className='duration-300 hover:translate-x-1 '
                      >
                        <a
                          href={link.link}
                          className='cursor-pointer hover:text-primary'
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className='px-4 py-8'>
                  <h1 className='mb-3 text-xl font-bold '>Location</h1>
                  <ul className='space-y-3'>
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className='duration-300 hover:translate-x-1 '
                      >
                        <a
                          href={link.link}
                          className='cursor-pointer hover:text-primary'
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
