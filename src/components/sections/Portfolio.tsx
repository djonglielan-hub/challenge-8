const portfolios = [
  {
    image: '/portfolio-1.png',
    category: 'Landing Page',
    title: 'Portfolio 1',
  },
  {
    image: '/portfolio-2.png',
    category: 'Landing Page',
    title: 'Portfolio 2',
  },
  {
    image: '/portfolio-3.png',
    category: 'Landing Page',
    title: 'Portfolio 3',
  },
];

const Portfolio = () => {
  return (
    <section className='pt-12 pb-16 lg:py-20'>
      <div className='max-w-[361px] lg:max-w-[1160px] mx-auto'>
        <div className='mb-10 text-left lg:text-center'>
          <h2 className='text-[36px] lg:text-4xl font-bold leading-tight'>
            From Vision to Launch! <br />
            Projects We’re Proud Of
          </h2>

          <p className='text-gray-500 text-[16px] leading-[28px] mt-4 lg:max-w-3xl lg:mx-auto'>
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6'>
          {portfolios.map((portfolio) => (
            <div key={portfolio.title}>
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className='w-full h-[420px] lg:h-[373px] object-cover rounded-2xl'
              />

              <p className='text-[#FF623E] text-[16px] mt-4'>
                {portfolio.category}
              </p>

              <h3 className='text-[24px] font-bold mt-2'>{portfolio.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
