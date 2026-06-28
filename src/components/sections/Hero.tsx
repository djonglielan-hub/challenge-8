const Hero = () => {
  return (
    <section className='relative bg-black px-5 pb-12 pt-28 lg:px-0 lg:pb-16 lg:pt-28'>
      <div className='mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='relative z-10 text-center lg:text-left'>
          <h1 className='mx-auto max-w-[540px] text-[36px] font-bold leading-[1.12] tracking-[-1px] text-white lg:mx-0 lg:text-[54px]'>
            Your Tech Partner for{' '}
            <span className='text-[#FF623E]'>Smarter Growth</span>
          </h1>

          <p className='mx-auto mt-5 max-w-[430px] text-[15px] leading-[26px] text-white/60 lg:mx-0'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <button className='mt-8 rounded-full bg-[#FF623E] px-10 py-3 text-sm font-semibold text-white'>
            Let&apos;s Talk
          </button>
        </div>

        <div className='relative mx-auto mt-8 w-full max-w-[620px] lg:mt-0'>
          <div className='absolute inset-0 rounded-full bg-[#FF623E]/20 blur-[90px]' />

          <img
            src='/hero-dark.png'
            alt='Hero technology illustration'
            className='relative z-10 w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
