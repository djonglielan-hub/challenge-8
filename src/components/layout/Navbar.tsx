const Navbar = () => {
  return (
    <header className='absolute left-0 top-0 z-30 w-full'>
      <div className='mx-auto flex max-w-[1120px] items-center justify-between px-5 py-5 lg:px-0'>
        <div className='flex items-center gap-2'>
          <div className='h-5 w-5 rounded-md bg-orange-500' />
          <span className='text-sm font-semibold text-white'>Your Logo</span>
        </div>

        <nav className='hidden items-center gap-9 text-xs text-white/80 lg:flex'>
          <a href='#about' className='hover:text-orange-500'>
            About
          </a>
          <a href='#service' className='hover:text-orange-500'>
            Service
          </a>
          <a href='#projects' className='hover:text-orange-500'>
            Projects
          </a>
          <a href='#testimonials' className='hover:text-orange-500'>
            Testimonials
          </a>
          <a href='#faq' className='hover:text-orange-500'>
            FAQ
          </a>
        </nav>

        <button className='hidden rounded-full bg-orange-500 px-8 py-2.5 text-xs font-semibold text-white lg:block'>
          Let’s Talk
        </button>

        <button className='flex flex-col gap-1.5 lg:hidden'>
          <span className='h-[2px] w-5 bg-white' />
          <span className='h-[2px] w-5 bg-white' />
          <span className='h-[2px] w-5 bg-white' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
