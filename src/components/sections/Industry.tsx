const industries = [
  {
    name: 'Fintech',
    active: true,
  },
  {
    name: 'E-Commerce',
    active: false,
  },
  {
    name: 'Healthcare',
    active: false,
  },
];

const Industry = () => {
  return (
    <section className='py-20 max-w-5xl mx-auto'>
      <div className='mb-10'>
        <h2 className='text-[36px] lg:text-4xl font-bold leading-tight mb-5'>
          Built for Your Industry
        </h2>

        <p className='text-gray-500 text-[16px] leading-[28px] max-w-[361px]'>
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </div>

      <div className='grid md:grid-cols-[180px_1fr] gap-12 items-start'>
        <div className='space-y-6'>
          {industries.map((industry) => (
            <div
              key={industry.name}
              className={`border-l-4 pl-4 font-semibold ${
                industry.active
                  ? 'border-orange-500 text-black'
                  : 'border-gray-300 text-gray-400'
              }`}
            >
              {industry.name}
            </div>
          ))}
        </div>

        <div className='mt-10'>
          <p className='text-[#0A0D12] text-sm font-medium leading-7 mb-8'>
            We build secure, scalable, and compliant fintech solutions — from
            digital wallets to core banking systems — tailored to modern
            financial needs.
          </p>

          <img
            src='/industry.png'
            alt='industry'
            className='w-full h-[220px] object-cover rounded-2xl lg:h-[320px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
