const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '5+', label: 'Years of Experience' },
  { number: '10+', label: 'Industry Experts' },
  { number: '100%', label: 'Client Satisfaction' },
];

const Stats = () => {
  return (
    <section className='pt-0 pb-12 text-center'>
      <h2 className='text-4xl font-bold mb-4'>
        End-to-End IT Solutions That Drive Results
      </h2>

      <p className='text-center text-gray-500 mb-8'>
        From strategy to execution, we deliver solutions that grow your
        business.
      </p>

      <div className='flex justify-center items-center gap-2 mt-10 max-w-5xl mx-auto'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-full w-44 h-44 flex flex-col justify-center items-center'
          >
            <h2 className='text-3xl font-bold text-orange-500'>
              {stat.number}
            </h2>

            <p className='text-gray-600 text-center text-sm'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
