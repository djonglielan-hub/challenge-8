const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-black px-5 py-16 lg:px-[140px] lg:py-[80px]'
    >
      <div className='mx-auto max-w-[1160px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            Ready to Start? Let&apos;s Talk.
          </h2>

          <p className='mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-white/45'>
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        <form className='mx-auto mt-12 max-w-[560px]'>
          <div className='space-y-6'>
            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Name
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='h-[44px] w-full rounded-[10px] border border-white/10 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>

            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Email
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-[44px] w-full rounded-[10px] border border-white/10 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>

            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Message
              </label>
              <textarea
                placeholder='Enter your message'
                className='h-[110px] w-full resize-none rounded-[10px] border border-white/10 bg-transparent px-4 py-3 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>
          </div>

          <div className='mt-6'>
            <p className='mb-4 text-[12px] font-semibold text-white'>
              Services
            </p>

            <div className='grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2'>
              {services.map((service, index) => (
                <label
                  key={service}
                  className='flex cursor-pointer items-center gap-3 text-[13px] text-white'
                >
                  <span
                    className={`flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border ${
                      index === 0
                        ? 'border-[#FF623E] bg-[#FF623E]'
                        : 'border-white/20 bg-transparent'
                    }`}
                  >
                    {index === 0 && (
                      <svg
                        width='10'
                        height='8'
                        viewBox='0 0 10 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1 4L3.5 6.5L9 1'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
                  </span>

                  {service}
                </label>
              ))}
            </div>
          </div>

          <button
            type='button'
            className='mt-9 h-[42px] w-full rounded-full bg-[#FF623E] text-[13px] font-semibold text-white'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
