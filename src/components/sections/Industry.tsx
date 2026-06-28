const industries = ['Fintech', 'E-Commerce', 'Healthcare'];

const Industry = () => {
  return (
    <section className='bg-black px-5 py-16 lg:px-[140px] lg:py-[80px]'>
      <div className='mx-auto flex max-w-[1160px] flex-col gap-12 lg:gap-[64px]'>
        <div>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            Built for Your Industry
          </h2>

          <p className='mt-4 max-w-[760px] text-[13px] leading-6 text-white/45'>
            We&apos;ve helped companies across industries launch smarter,
            faster, and more securely.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-10'>
          <div className='flex gap-6 lg:flex-col lg:gap-8'>
            {industries.map((industry, index) => (
              <button
                key={industry}
                className={`relative text-left text-[16px] font-semibold transition ${
                  index === 0 ? 'text-white' : 'text-white/35'
                }`}
              >
                {index === 0 && (
                  <span className='absolute -left-3 top-1/2 hidden h-5 w-[2px] -translate-y-1/2 rounded-full bg-[#FF623E] lg:block' />
                )}

                {industry}
              </button>
            ))}
          </div>

          <div>
            <p className='max-w-[780px] text-[15px] leading-7 text-white/85'>
              We build secure, scalable, and compliant fintech solutions — from
              digital wallets to core banking systems — tailored to modern
              financial needs.
            </p>

            <div className='mt-6 overflow-hidden rounded-[14px]'>
              <img
                src='/industry.png'
                alt='Fintech industry'
                className='h-[260px] w-full object-cover lg:h-[340px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
