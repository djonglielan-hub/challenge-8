const portfolios = [
  {
    image: '/portfolio-1.png',
    category: 'Landing Page',
    title: 'Portofolio 1',
  },
  {
    image: '/portfolio-2.png',
    category: 'Landing Page',
    title: 'Portofolio 2',
  },
  {
    image: '/portfolio-3.png',
    category: 'Landing Page',
    title: 'Portofolio 3',
  },
];

const Portfolio = () => {
  return (
    <section
      id='projects'
      className='bg-black px-5 py-16 lg:px-[140px] lg:py-[80px]'
    >
      <div className='mx-auto flex max-w-[1160px] flex-col gap-12 lg:gap-[64px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            From Vision to Launch! Projects We’re Proud Of
          </h2>

          <p className='mx-auto mt-4 max-w-[760px] text-[13px] leading-6 text-white/45'>
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
          {portfolios.map((portfolio) => (
            <article key={portfolio.title}>
              <div className='overflow-hidden rounded-[14px]'>
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className='h-[260px] w-full object-cover lg:h-[300px]'
                />
              </div>

              <p className='mt-5 text-[13px] font-medium text-[#FF623E]'>
                {portfolio.category}
              </p>

              <h3 className='mt-2 text-[17px] font-bold text-white'>
                {portfolio.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
