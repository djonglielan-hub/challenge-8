const processSteps = [
  {
    number: '1',
    title: 'Discovery & Consultation',
    desc: 'Understand Your Needs & Goals',
  },
  {
    number: '2',
    title: 'Planning & Strategy',
    desc: 'Build a Clear, Scalable Roadmap',
  },
  {
    number: '3',
    title: 'Design & Prototyping',
    desc: 'Craft UX That Converts',
  },
  {
    number: '4',
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
  },
];

const Process = () => {
  return (
    <section className='bg-black px-5 pb-24 pt-14 lg:px-0 lg:pt-16'>
      <div className='mx-auto max-w-[1120px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold text-white lg:text-[34px]'>
            Our Process
          </h2>

          <p className='mt-4 text-[13px] text-white/45'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className='relative mx-auto mt-12 max-w-[820px]'>
          <div className='absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/20 lg:block' />

          <div className='space-y-7'>
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                <div className='hidden lg:absolute lg:left-1/2 lg:z-10 lg:flex lg:h-9 lg:w-9 lg:-translate-x-1/2 lg:items-center lg:justify-center lg:rounded-full lg:bg-[#FF623E] lg:text-sm lg:font-bold lg:text-white'>
                  {step.number}
                </div>

                <div className='flex w-full items-center gap-4 lg:w-[390px]'>
                  <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF623E] text-sm font-bold text-white lg:hidden'>
                    {step.number}
                  </div>

                  <div className='w-full rounded-xl border border-white/10 bg-[#070C12] px-5 py-4 shadow-[0_0_30px_rgba(0,0,0,0.35)]'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-[14px] font-semibold text-white'>
                        {step.title}
                      </h3>

                      <svg
                        width='12'
                        height='6'
                        viewBox='0 0 12 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mt-1 shrink-0'
                      >
                        <path
                          d='M1 5L6 1L11 5'
                          stroke='#FDFDFD'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>

                    <p className='mt-2 text-[12px] leading-5 text-white/45'>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
