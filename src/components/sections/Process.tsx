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
  {
    number: '5',
    title: 'Testing & Optimization',
    desc: 'Ensure Quality at Every Step',
  },
  {
    number: '6',
    title: 'Launch & Growth',
    desc: 'Scale, Measure & Improve Continuously',
  },
];

const Process = () => {
  return (
    <section className='bg-black px-4 pb-20 pt-16 lg:px-0 lg:pb-[120px] lg:pt-[90px]'>
      <div className='mx-auto max-w-[361px] lg:max-w-[1120px]'>
        {/* Title */}
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            Our Process
          </h2>

          <p className='mx-auto mt-4 max-w-[280px] text-[12px] leading-[20px] text-white/45 lg:max-w-none lg:text-[13px]'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Process Timeline */}
        <div className='relative mx-auto mt-8 flex max-w-[330px] flex-col gap-4 lg:mt-16 lg:max-w-[1120px] lg:gap-0'>
          {/* Desktop center line */}
          <div className='absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 lg:block' />

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-center gap-4 lg:min-h-[128px] lg:gap-0 ${
                index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
              }`}
            >
              {/* Mobile number */}
              <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF623E] text-[12px] font-bold text-white lg:hidden'>
                {step.number}
              </div>

              {/* Desktop number */}
              <div className='absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF623E] text-[14px] font-bold text-white lg:flex'>
                {step.number}
              </div>

              {/* Card */}
              <div className='flex min-h-[62px] flex-1 items-center justify-between rounded-xl border border-white/10 bg-[#070C12] px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.35)] lg:min-h-[80px] lg:w-[420px] lg:flex-none lg:px-6'>
                <div>
                  <h3 className='text-[12px] font-bold text-white lg:text-[16px]'>
                    {step.title}
                  </h3>

                  <p className='mt-2 text-[10px] leading-[15px] text-white/45 lg:hidden'>
                    {step.desc}
                  </p>
                </div>

                <svg
                  width='12'
                  height='6'
                  viewBox='0 0 12 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-3 shrink-0'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
