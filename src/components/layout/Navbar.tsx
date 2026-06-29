import { useEffect, useState } from 'react';

const navLinks = ['About', 'Service', 'Projects', 'Testimonials', 'FAQ'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-300 lg:px-0 ${
          isScrolled
            ? 'bg-white/95 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-black py-6'
        }`}
      >
        <div className='mx-auto flex max-w-[361px] items-center justify-between lg:max-w-[1120px]'>
          <a href='#' className='flex items-center gap-2'>
            <div className='relative h-5 w-5 lg:h-6 lg:w-6'>
              <span className='absolute left-0 top-1 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
              <span className='absolute bottom-0 right-0 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
            </div>

            <span
              className={`text-[14px] font-bold lg:text-[16px] ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Your Logo
            </span>
          </a>

          <nav className='hidden items-center gap-9 lg:flex'>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-xs font-medium transition hover:text-[#FF623E] ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          <button className='hidden rounded-full bg-[#FF623E] px-8 py-2.5 text-xs font-semibold text-white lg:block'>
            Let&apos;s Talk
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className='flex flex-col gap-1.5 lg:hidden'
          >
            <span
              className={`h-[2px] w-5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
            <span
              className={`h-[2px] w-5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
            <span
              className={`h-[2px] w-5 ${isScrolled ? 'bg-black' : 'bg-white'}`}
            />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className='fixed inset-0 z-[999] bg-white px-4 pt-6 lg:hidden'>
          <div className='mx-auto max-w-[361px]'>
            <div className='flex items-center justify-between'>
              <a href='#' className='flex items-center gap-2'>
                <div className='relative h-5 w-5'>
                  <span className='absolute left-0 top-1 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
                  <span className='absolute bottom-0 right-0 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
                </div>

                <span className='text-[14px] font-bold text-black'>
                  Your Logo
                </span>
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className='text-[22px] leading-none text-black'
              >
                ×
              </button>
            </div>

            <nav className='mt-8 flex flex-col gap-5'>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className='text-[12px] font-medium text-black'
                >
                  {link}
                </a>
              ))}
            </nav>

            <button className='mt-8 h-[42px] w-full rounded-full bg-[#FF623E] text-[12px] font-semibold text-white'>
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
