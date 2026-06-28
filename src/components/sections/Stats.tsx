const stats = [
  {
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    value: '5+',
    label: 'Years of Experience',
  },
  {
    value: '10+',
    label: 'Industry Awards Won',
  },
  {
    value: '100%',
    label: 'Client Satisfaction Rate',
  },
];

const Stats = () => {
  return (
    <section className='bg-black px-5 pt-10 lg:px-0 lg:pt-12'>
      <div className='mx-auto max-w-[1160px] text-center'>
        <h2 className='mx-auto max-w-[900px] text-[30px] font-bold leading-tight text-white lg:text-[42px]'>
          End-to-End IT Solutions That Drive Results
        </h2>

        <p className='mx-auto mt-5 max-w-[760px] text-[18px] leading-7 text-white/45'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className='mt-10 grid grid-cols-2 justify-items-center gap-5 lg:flex lg:h-[275px] lg:justify-center lg:gap-5'>
          {stats.map((item) => (
            <div
              key={item.value}
              className='flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-[#070C12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] lg:h-[275px] lg:w-[275px]'
            >
              <h3 className='text-[30px] font-bold text-[#FF623E] lg:text-[52px]'>
                {item.value}
              </h3>

              <p className='mt-3 max-w-[200px] text-center text-[12px] leading-5 text-white lg:mt-5 lg:text-[24px] lg:leading-8'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
