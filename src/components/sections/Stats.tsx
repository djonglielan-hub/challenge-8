const stats = [
  {
    number: '50+',
    label: 'Projects Delivered',
  },
  {
    number: '5+',
    label: 'Years of Experience',
  },
  {
    number: '10+',
    label: 'Industry Awards Won',
  },
  {
    number: '100%',
    label: 'Client Satisfaction Rate',
  },
];

const Stats = () => {
  return (
    <section className='pt-10 pb-20 lg:py-20 text-center'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-[28px] lg:text-4xl font-bold leading-tight'>
          End-to-End IT Solutions <br />
          That Drive Results
        </h2>

        <p className='text-gray-500 text-[16px] lg:text-base mt-6 max-w-[360px] mx-auto leading-relaxed'>
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mt-9 max-w-[380px] lg:max-w-none mx-auto'>
          {stats.map((stat) => (
            <div
              key={stat.number}
              className='w-[170px] h-[170px] lg:w-44 lg:h-44 rounded-full border border-gray-200 flex flex-col items-center justify-center mx-auto'
            >
              <h3 className='text-[#FF623E] text-[40px] lg:text-4xl font-bold leading-none'>
                {stat.number}
              </h3>

              <p className='text-[16px] lg:text-base text-gray-900 mt-5 leading-relaxed max-w-[120px]'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
