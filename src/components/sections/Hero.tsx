const Hero = () => {
  return (
    <section className='relative bg-black px-4 pb-12 pt-[125px] lg:px-0 lg:pb-16 lg:pt-28'>
      <div className='mx-auto grid w-full max-w-[361px] items-center gap-[40px] lg:max-w-[1120px] lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='relative z-10 h-[240px] w-full border border-[#7B2CFF] pt-1 text-left lg:h-auto lg:w-auto lg:border-0 lg:pt-0'>
          <h1 className='max-w-[350px] text-[28px] font-bold leading-[1.12] tracking-[-1px] text-white lg:max-w-[540px] lg:text-[54px]'>
            Your Tech Partner for{' '}
            <span className='text-[#FF623E]'>Smarter Growth</span>
          </h1>

          <p className='mt-3 max-w-[330px] text-[12px] leading-[20px] text-white/80 lg:mt-5 lg:max-w-[430px] lg:text-[15px] lg:leading-[26px] lg:text-white/60'>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <button className='absolute bottom-0 left-0 h-[42px] w-full rounded-[18px] bg-[#FF623E] text-xs font-semibold text-white lg:static lg:mt-8 lg:h-auto lg:w-auto lg:rounded-full lg:px-10 lg:py-3 lg:text-sm'>
            Let&apos;s Talk
          </button>
        </div>

        <div className='relative mx-auto w-full max-w-[361px] lg:max-w-[620px]'>
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
