const processSteps = [
  {
    number: 1,
    title: 'Discovery & Consultation',
    desc: 'Understand Your Needs & Goals',
    side: 'left',
  },
  {
    number: 2,
    title: 'Planning & Strategy',
    desc: 'Build a Clear, Scalable Roadmap',
    side: 'right',
  },
  {
    number: 3,
    title: 'Design & Prototyping',
    desc: 'Craft UX That Converts',
    side: 'left',
  },
  {
    number: 4,
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
    side: 'right',
  },
  {
    number: 5,
    title: 'Testing & Optimization',
    desc: 'Ensure Quality at Every Step',
    side: 'left',
  },
  {
    number: 6,
    title: 'Launch & Growth',
    desc: 'Scale, Measure & Improve Continuously',
    side: 'right',
  },
];

const Process = () => {
  return (
    <section className='pt-16 pb-20 lg:py-20'>
      <div className='text-center mb-10'>
        <h2 className='text-[36px] lg:text-4xl font-bold'>Our Process</h2>

        <p className='mt-4 text-[14px] leading-[28px] text-gray-500 max-w-[393px] mx-auto'>
          <span className='lg:hidden whitespace-nowrap'>
            Clear steps. Smart execution. Results you can count
          </span>
          <br className='lg:hidden' />
          <span className='lg:hidden'>on.</span>

          <span className='hidden lg:inline'>
            Clear steps. Smart execution. Results you can count on.
          </span>
        </p>
      </div>

      <div className='relative max-w-[393px] lg:max-w-5xl mx-auto'>
        <div className='absolute left-6 lg:left-1/2 top-12 bottom-[130px] lg:bottom-12 w-px bg-gray-200'></div>

        <div className='space-y-6 lg:space-y-10'>
          {processSteps.map((step) => (
            <div
              key={step.number}
              className='relative lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center'
            >
              <div className='absolute left-0 top-7 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 bg-[#FF623E] text-white rounded-full flex items-center justify-center font-bold z-10'>
                {step.number}
              </div>

              {step.side === 'left' ? (
                <>
                  <div className='ml-16 lg:ml-0 lg:pr-10'>
                    <div className='bg-gray-50 border border-gray-300 rounded-2xl px-5 py-6 min-h-[112px] flex justify-between gap-4'>
                      <div>
                        <h3 className='font-bold text-[20px] leading-tight'>
                          {step.title}
                        </h3>

                        <p className='text-gray-500 text-[16px] leading-relaxed mt-4'>
                          {step.desc}
                        </p>
                      </div>

                      <span className='text-xl leading-none'>⌃</span>
                    </div>
                  </div>

                  <div className='hidden lg:block'></div>
                </>
              ) : (
                <>
                  <div className='hidden lg:block'></div>

                  <div className='ml-16 lg:ml-0 lg:pl-10'>
                    <div className='bg-gray-50 border border-gray-300 rounded-2xl px-5 py-6 min-h-[112px] flex justify-between gap-4'>
                      <div>
                        <h3 className='font-bold text-[20px] leading-tight'>
                          {step.title}
                        </h3>

                        <p className='text-gray-500 text-[16px] leading-relaxed mt-4'>
                          {step.desc}
                        </p>
                      </div>

                      <span className='text-xl leading-none'>⌃</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
