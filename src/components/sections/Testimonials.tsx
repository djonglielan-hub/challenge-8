const testimonials = [
  {
    quote:
      'The team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'CTO at Innovate Corp',
    active: false,
  },
  {
    quote:
      'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    active: true,
  },
  {
    quote:
      'The collaboration was seamless from start to finish. They exceeded our expectations and helped us launch a successful project.',
    name: 'Emily Chen',
    role: 'Marketing Head at TechLabs',
    active: false,
  },
];

const Testimonials = () => {
  const activeTestimonial = testimonials.find((item) => item.active);

  return (
    <section className='pt-12 pb-16 lg:py-20 text-center'>
      <div className='max-w-[361px] lg:max-w-[1160px] mx-auto'>
        <div className='mb-10'>
          <h2 className='text-[32px] lg:text-4xl font-bold leading-tight'>
            What Partners Say About <br />
            Working With Us
          </h2>

          <p className='text-gray-500 text-[16px] leading-[28px] mt-4'>
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Mobile: hanya card tengah */}
        <div className='lg:hidden'>
          <div className='relative bg-gray-50 border border-gray-200 rounded-2xl px-6 pt-12 pb-16'>
            <div className='absolute -top-5 left-7 z-20 text-[#FF623E] text-[64px] font-bold leading-none'>
              ”
            </div>

            <div className='text-[#F5B544] text-[24px] tracking-[6px] mb-8'>
              ★★★★★
            </div>

            <p className='text-[#0A0D12] text-[16px] font-medium leading-[32px]'>
              “{activeTestimonial?.quote}”
            </p>

            <h3 className='text-[#0A0D12] font-bold text-[16px] mt-9'>
              {activeTestimonial?.name}
            </h3>

            <p className='text-[#FF623E] text-[16px] mt-3'>
              {activeTestimonial?.role}
            </p>

            <img
              src='/avatar.png'
              alt='avatar'
              className='w-[64px] h-[64px] rounded-full object-cover absolute -bottom-8 left-1/2 -translate-x-1/2'
            />
          </div>

          <div className='flex justify-center gap-2 mt-14'>
            <span className='w-2 h-2 rounded-full bg-[#FF623E]'></span>
            <span className='w-2 h-2 rounded-full bg-gray-300'></span>
            <span className='w-2 h-2 rounded-full bg-gray-300'></span>
          </div>
        </div>

        {/* Desktop: tetap 3 card */}
        <div className='hidden lg:grid grid-cols-3 gap-6'>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className={`relative border border-gray-200 rounded-2xl px-8 pt-12 pb-16 ${
                item.active ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className='absolute -top-7 left-8 z-10 text-[#FF623E] text-[72px] font-bold leading-none'>
                ”
              </div>

              <div className='text-[#F5B544] text-[24px] tracking-[6px] mb-8'>
                ★★★★★
              </div>

              <p className='text-[#0A0D12] text-base leading-8'>
                “{item.quote}”
              </p>

              <h3 className='font-bold mt-8'>{item.name}</h3>

              <p className='text-[#FF623E] mt-2'>{item.role}</p>

              <img
                src='/avatar.png'
                alt='avatar'
                className='w-[64px] h-[64px] rounded-full object-cover absolute -bottom-8 left-1/2 -translate-x-1/2'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
