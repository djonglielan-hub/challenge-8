const Footer = () => {
  return (
    <footer className='py-16'>
      <div className='max-w-5xl mx-auto border border-gray-200 rounded-2xl p-10'>
        <div className='flex justify-between items-start'>
          <h2 className='text-4xl font-bold leading-tight'>
            LET&apos;S DISCUSS <br />
            YOUR IDEAS
          </h2>

          <div className='flex items-center gap-2'>
            <img
              src='/logo.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
            <span className='font-bold text-xl'>Your Logo</span>
          </div>
        </div>

        <hr className='my-10 border-gray-200' />

        <div className='flex justify-between items-center'>
          <ul className='flex gap-8 text-sm'>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <div className='flex gap-3'>
            <div className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-semibold'>
              f
            </div>

            <div className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-semibold'>
              ◎
            </div>

            <div className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-semibold'>
              in
            </div>

            <div className='w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center font-semibold'>
              ♪
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
