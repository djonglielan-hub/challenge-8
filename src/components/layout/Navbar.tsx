import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='flex justify-between items-center py-6'>
        <div className='flex items-center gap-2'>
          <img src='/logo.png' alt='logo' className='w-8 h-8 object-contain' />
          <h1 className='font-bold text-xl'>Your Logo</h1>
        </div>

        <ul className='hidden lg:flex gap-8 text-sm'>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>

        <button className='hidden lg:block bg-[#FF623E] text-white px-12 py-3 rounded-full text-sm'>
          Let&apos;s Talk
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className='lg:hidden text-3xl leading-none'
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className='fixed inset-0 bg-white z-50 px-6 py-8'>
          <div className='flex justify-between items-center mb-10'>
            <div className='flex items-center gap-2'>
              <img
                src='/logo.png'
                alt='logo'
                className='w-8 h-8 object-contain'
              />
              <h1 className='font-bold text-xl'>Your Logo</h1>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className='text-3xl leading-none'
            >
              ×
            </button>
          </div>

          <ul className='flex flex-col gap-8 text-[16px] mb-8'>
            <li>About</li>
            <li>Service</li>
            <li>Porfolio</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <button className='w-full bg-[#FF623E] text-white py-4 rounded-full text-sm font-semibold'>
            Let&apos;s Talk
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
