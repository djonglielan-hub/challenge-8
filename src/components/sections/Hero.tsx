const Hero = () => {
  return (
    <section className='grid md:grid-cols-2 gap-10 pt-8 pb-0'>
      <div>
        <h1 className='text-5xl font-bold leading-tight'>
          Your Tech Partner for <br />
          <span className='text-orange-500'>Smarter Growth</span>
        </h1>

        <p className='mt-6 text-gray-600'>
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>

        <button className='bg-orange-500 text-white px-12 py-3 rounded-full mt-6'>
          Let's Talk
        </button>
      </div>

      <div>
        <img src='/hero.png' alt='hero' className='w-full' />
      </div>
    </section>
  );
};

export default Hero;
