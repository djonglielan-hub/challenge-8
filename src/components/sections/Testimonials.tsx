const testimonials = [
  {
    text: 'A game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'Founder at Innovate Corp',
  },
  {
    text: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
  },
  {
    text: 'Their expertise helped us launch faster with a cleaner and more reliable product.',
    name: 'Emily Chen',
    role: 'Head of Product at Nexora',
  },
];

const Testimonials = () => {
  const activeTestimonial = testimonials[1];

  return (
    <section className='bg-black px-4 py-12 lg:px-0 lg:py-[80px]'>
      <div className='mx-auto max-w-[361px] text-center lg:max-w-[1160px]'>
        <h2 className='mx-auto max-w-[330px] text-[26px] font-bold leading-[33px] text-white lg:max-w-[720px] lg:text-[42px] lg:leading-tight'>
          What Partners Say About Working With Us
        </h2>

        <p className='mx-auto mt-4 max-w-[300px] text-[12px] leading-[20px] text-white/45 lg:max-w-none lg:text-[14px]'>
          Trusted voices. Real experiences. Proven results.
        </p>

        <div className='relative mx-auto mt-9 max-w-[330px] lg:hidden'>
          <div className='absolute left-5 top-[-22px] z-20 text-[72px] font-bold leading-none text-[#FF623E]'>
            ”
          </div>

          <div className='rounded-[14px] border border-white/10 bg-[#070C12] px-6 pb-7 pt-10 shadow-[0_0_30px_rgba(0,0,0,0.35)]'>
            <div className='text-[18px] tracking-[3px] text-[#FFB12B]'>
              ★★★★★
            </div>

            <p className='mx-auto mt-5 max-w-[260px] text-[12px] font-medium leading-[22px] text-white'>
              “{activeTestimonial.text}”
            </p>

            <h3 className='mt-6 text-[12px] font-semibold text-white'>
              {activeTestimonial.name}
            </h3>

            <p className='mt-2 text-[11px] font-semibold text-[#FF623E]'>
              {activeTestimonial.role}
            </p>

            <img
              src='/avatar.png'
              alt={activeTestimonial.name}
              className='mx-auto mt-5 h-[48px] w-[48px] rounded-full object-cover'
            />
          </div>

          <div className='mt-5 flex items-center justify-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#FF623E]' />
            <span className='h-2 w-2 rounded-full bg-white/20' />
            <span className='h-2 w-2 rounded-full bg-white/20' />
          </div>
        </div>

        <div className='mt-12 hidden grid-cols-3 gap-6 lg:grid'>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className='rounded-[18px] border border-white/10 bg-[#070C12] px-8 py-10 text-center'
            >
              <div className='text-[20px] tracking-[4px] text-[#FFB12B]'>
                ★★★★★
              </div>

              <p className='mt-6 text-[14px] leading-7 text-white/80'>
                “{item.text}”
              </p>

              <h3 className='mt-8 text-[14px] font-semibold text-white'>
                {item.name}
              </h3>

              <p className='mt-2 text-[13px] font-semibold text-[#FF623E]'>
                {item.role}
              </p>

              <img
                src='/avatar.png'
                alt={item.name}
                className='mx-auto mt-6 h-[52px] w-[52px] rounded-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
