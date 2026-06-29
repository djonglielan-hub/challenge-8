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
    <section className='bg-black px-4 pt-10 lg:px-0 lg:pt-12'>
      <div className='mx-auto max-w-[361px] text-center lg:max-w-[1160px]'>
        <h2 className='mx-auto max-w-[330px] text-[24px] font-bold leading-[31px] text-white lg:max-w-[900px] lg:text-[42px] lg:leading-tight'>
          End-to-End IT Solutions That Drive Results
        </h2>

        <p className='mx-auto mt-4 max-w-[310px] text-[13px] leading-[22px] text-white/45 lg:mt-5 lg:max-w-[760px] lg:text-[18px] lg:leading-7'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className='mx-auto mt-8 grid max-w-[286px] grid-cols-2 justify-items-center gap-x-2 gap-y-3 lg:mt-10 lg:flex lg:h-[275px] lg:max-w-none lg:justify-center lg:gap-5'>
          {stats.map((item) => (
            <div
              key={item.value}
              className='flex h-[135px] w-[135px] flex-col items-center justify-center rounded-full bg-[#070C12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] lg:h-[275px] lg:w-[275px]'
            >
              <h3 className='text-[26px] font-bold text-[#FF623E] lg:text-[52px]'>
                {item.value}
              </h3>

              <p className='mt-2 max-w-[100px] text-center text-[10px] font-medium leading-[15px] text-white lg:mt-5 lg:max-w-[200px] lg:text-[24px] lg:leading-8'>
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
