const testimonials = [
  {
    name: 'John Lee',
    role: 'Founder at Innovate Corp',
    text: 'A game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    active: false,
  },
  {
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    text: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    active: true,
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Head at TechNova',
    text: 'The collaboration was seamless. Their expertise truly exceeded expectations and helped us complete a successful project.',
    active: false,
  },
];

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='bg-black px-5 py-16 lg:px-[140px] lg:py-[80px]'
    >
      <div className='mx-auto flex max-w-[1160px] flex-col gap-14 lg:gap-[80px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            What Partners Say About Working With Us
          </h2>

          <p className='mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-white/45'>
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <div className='relative flex items-center justify-center'>
          <div className='absolute left-0 hidden h-full w-[240px] bg-gradient-to-r from-black to-transparent lg:block' />
          <div className='absolute right-0 hidden h-full w-[240px] bg-gradient-to-l from-black to-transparent lg:block' />

          <div className='grid w-full gap-5 lg:grid-cols-3'>
            {testimonials.map((item) => (
              <article
                key={item.name}
                className={`relative rounded-[14px] border border-white/10 bg-[#070C12] px-8 pb-8 pt-12 text-center ${
                  item.active
                    ? 'opacity-100'
                    : 'opacity-25 blur-[0.4px] lg:scale-95'
                }`}
              >
                <div className='absolute -top-9 left-8 text-[82px] font-bold leading-none text-[#FF623E]'>
                  ”
                </div>

                <div className='mb-5 flex justify-center gap-1 text-[18px] text-[#FFC247]'>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className='mx-auto max-w-[360px] text-[14px] font-medium leading-7 text-white'>
                  “{item.text}”
                </p>

                <h3 className='mt-6 text-[15px] font-semibold text-white'>
                  {item.name}
                </h3>

                <p className='mt-2 text-[14px] text-[#FF623E]'>{item.role}</p>

                <div className='mx-auto mt-7 h-[54px] w-[54px] overflow-hidden rounded-full border border-white/10'>
                  <img
                    src='/avatar.png'
                    alt={item.name}
                    className='h-full w-full object-cover'
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='flex justify-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-[#FF623E]' />
          <span className='h-2 w-2 rounded-full bg-white/20' />
          <span className='h-2 w-2 rounded-full bg-white/20' />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
