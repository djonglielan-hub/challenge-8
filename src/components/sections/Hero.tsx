const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 pb-0'>
      <div>
        <h1 className='text-[36px] lg:text-5xl font-bold leading-tight'>
          Your Tech Partner for <br />
          <span className='text-[#FF623E]'>Smarter Growth</span>
        </h1>

        <p className='mt-3 max-w-[361px] text-[16px] leading-[24px] text-gray-700'>
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>

        <button className='bg-[#FF623E] text-white w-full lg:w-auto lg:px-12 py-3 rounded-full mt-6 text-sm'>
          Let&apos;s Talk
        </button>
      </div>

      <div className='mt-6 lg:mt-0'>
        <img
          src='/hero.png'
          alt='hero'
          className='w-full rounded-none object-contain'
        />
      </div>
    </section>
  );
};

export default Hero;
