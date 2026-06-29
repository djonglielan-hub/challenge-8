const industryTabs = ['Fintech', 'E-Commerce', 'Healthcare'];

const industries = [
  {
    category: 'Fintech',
    image: '/industry.png',
    desc: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
  },
  {
    category: 'E-Commerce',
    image: '/industry-ecommerce.png',
    desc: 'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
  },
  {
    category: 'Healthcare',
    image: '/industry-healthcare.png',
    desc: 'Empowering healthcare providers with digital solutions that improve patient care, streamline operations, and ensure secure medical workflows.',
  },
];

const Industry = () => {
  return (
    <section className='bg-black px-4 py-16 lg:px-0 lg:py-[90px]'>
      <div className='mx-auto max-w-[361px] lg:max-w-[1160px]'>
        <div className='space-y-16 lg:space-y-[90px]'>
          {industries.map((item) => (
            <div key={item.category}>
              <p className='mb-7 hidden text-[32px] font-bold text-white/10 lg:block'>
                {item.category}
              </p>

              <div className='grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16'>
                <div>
                  <h2 className='text-[26px] font-bold leading-[33px] text-white lg:text-[34px] lg:leading-tight'>
                    Built for Your Industry
                  </h2>

                  <p className='mt-4 max-w-[310px] text-[12px] leading-[20px] text-white/45 lg:max-w-[360px] lg:text-[13px] lg:leading-6'>
                    We&apos;ve helped companies across industries launch
                    smarter, faster, and more securely.
                  </p>

                  <div className='mt-7 flex flex-col items-start gap-4'>
                    {industryTabs.map((tab) => (
                      <button
                        key={tab}
                        className={`relative pl-3 text-left text-[12px] font-semibold transition lg:text-[13px] ${
                          tab === item.category ? 'text-white' : 'text-white/35'
                        }`}
                      >
                        {tab === item.category && (
                          <span className='absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-[#FF623E]' />
                        )}

                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className='max-w-[330px] text-[12px] font-medium leading-[21px] text-white/85 lg:max-w-[780px] lg:text-[15px] lg:leading-7'>
                    {item.desc}
                  </p>

                  <div className='mt-6 overflow-hidden rounded-[14px] lg:mt-8'>
                    <img
                      src={item.image}
                      alt={item.category}
                      className='h-[220px] w-full object-cover lg:h-[260px] lg:max-w-[520px]'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industry;
