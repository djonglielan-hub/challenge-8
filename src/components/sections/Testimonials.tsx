const testimonials = [
  {
    id: 1,
    name: 'John Lee',
    role: 'CTO at Innovate Corp',
    text: 'The team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    active: false,
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    text: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    active: true,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head at TechLabs',
    text: 'The collaboration was seamless from start to finish. They exceeded our expectations and helped us launch a successful project.',
    active: false,
  },
];

const Testimonials = () => {
  return (
    <section className='py-20 overflow-hidden'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>
          What Partners Say About Working With Us
        </h2>

        <p className='text-gray-500 text-sm mt-3'>
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      <div className='max-w-6xl mx-auto grid grid-cols-3 gap-6'>
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`relative border border-gray-200 rounded-2xl px-8 pt-12 pb-12 text-center bg-white ${
              item.active ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <div className='absolute -top-8 left-1/2 -translate-x-1/2 text-[#FF623E] text-7xl font-bold'>
              ”
            </div>

            <div className='text-[#FF623E] text-xl mb-4'>★ ★ ★ ★ ★</div>

            <p className='text-gray-700 text-sm leading-relaxed mb-6'>
              “{item.text}”
            </p>

            <h3 className='font-semibold text-sm'>{item.name}</h3>

            <p className='text-[#FF623E] text-sm mt-1'>{item.role}</p>

            <img
              src='/avatar.png'
              alt='avatar'
              className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white object-cover'
            />
          </div>
        ))}
      </div>

      <div className='flex justify-center gap-2 mt-14'>
        <span className='w-2 h-2 rounded-full bg-[#FF623E]'></span>
        <span className='w-2 h-2 rounded-full bg-gray-300'></span>
        <span className='w-2 h-2 rounded-full bg-gray-300'></span>
        <span className='w-2 h-2 rounded-full bg-gray-300'></span>
      </div>
    </section>
  );
};

export default Testimonials;
