import { useState } from 'react';

const menuItems = ['About', 'Service', 'Portfolio', 'Testimonials', 'FAQ'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='py-5'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src='/logo.png' alt='logo' className='w-8 h-8 object-contain' />

          <h1 className='font-bold text-lg'>Your Logo</h1>
        </div>

        <ul className='hidden lg:flex gap-8 text-sm'>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button className='hidden lg:block bg-[#FF623E] text-white px-12 py-3 rounded-full text-sm'>
          Let&apos;s Talk
        </button>

        <button
          type='button'
          onClick={() => setIsOpen(true)}
          className='lg:hidden text-2xl'
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className='fixed inset-0 bg-white z-50 px-6 py-6 lg:hidden'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img
                src='/logo.png'
                alt='logo'
                className='w-8 h-8 object-contain'
              />

              <h1 className='font-bold text-lg'>Your Logo</h1>
            </div>

            <button
              type='button'
              onClick={() => setIsOpen(false)}
              className='text-3xl'
            >
              ×
            </button>
          </div>

          <ul className='mt-10 space-y-7 text-sm'>
            {menuItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button className='w-full bg-[#FF623E] text-white py-3 rounded-full text-sm mt-8'>
            Let&apos;s Talk
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
