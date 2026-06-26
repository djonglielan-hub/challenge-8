const Footer = () => {
  return (
    <footer className='pt-10 pb-12'>
      <div className='max-w-[393px] lg:max-w-[1160px] mx-auto border border-gray-200 rounded-2xl px-6 py-10 lg:px-14 lg:py-12'>
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8'>
          <div className='flex items-center gap-2'>
            <img src='/logo.png' alt='logo' className='w-8 h-8' />
            <h3 className='font-bold text-[20px]'>Your Logo</h3>
          </div>

          <h2 className='text-[32px] lg:text-4xl font-bold leading-[40px] tracking-[-1px] lg:order-1'>
            LET’S DISCUSS YOUR <br />
            IDEAS
          </h2>
        </div>

        <div className='border-t border-gray-200 my-10'></div>

        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
          <ul className='flex flex-col lg:flex-row gap-6 lg:gap-8 text-[16px]'>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <div className='flex items-center gap-4'>
            <span className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold'>
              f
            </span>
            <span className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold'>
              ◎
            </span>
            <span className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold'>
              in
            </span>
            <span className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-bold'>
              ♪
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
