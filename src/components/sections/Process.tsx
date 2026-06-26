const processSteps = [
  {
    number: '1',
    title: 'Discovery & Consultation',
    desc: 'Understand Your Needs & Goals',
    side: 'left',
  },
  {
    number: '2',
    title: 'Planning & Strategy',
    desc: 'Build a Clear, Scalable Roadmap',
    side: 'right',
  },
  {
    number: '3',
    title: 'Design & Prototyping',
    desc: 'Craft UX That Converts',
    side: 'left',
  },
  {
    number: '4',
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
    side: 'right',
  },
  {
    number: '5',
    title: 'Testing & Optimization',
    desc: 'Ensure Quality at Every Step',
    side: 'left',
  },
  {
    number: '6',
    title: 'Launch & Growth',
    desc: 'Scale, Measure & Improve Continuously',
    side: 'right',
  },
];

const Process = () => {
  return (
    <section className='py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>Our Process</h2>
        <p className='text-gray-500 mt-3'>
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <div className='relative max-w-5xl mx-auto'>
        <div className='absolute left-1/2 top-0 h-full w-px bg-gray-200'></div>

        <div className='space-y-8'>
          {processSteps.map((step) => (
            <div
              key={step.number}
              className='relative grid grid-cols-2 gap-20 items-center'
            >
              {step.side === 'left' ? (
                <>
                  <div className='bg-gray-50 border rounded-2xl p-6'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h3 className='font-semibold'>{step.title}</h3>
                        <p className='text-gray-500 text-sm mt-2'>
                          {step.desc}
                        </p>
                      </div>

                      <span className='text-gray-500 text-lg'>⌃</span>
                    </div>
                  </div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className='bg-gray-50 border rounded-2xl p-6'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h3 className='font-semibold'>{step.title}</h3>
                        <p className='text-gray-500 text-sm mt-2'>
                          {step.desc}
                        </p>
                      </div>

                      <span className='text-gray-500 text-lg'>⌃</span>
                    </div>
                  </div>
                </>
              )}

              <div className='absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold'>
                {step.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
