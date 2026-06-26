const portfolios = [
  {
    id: 1,
    image: '/portfolio-1.png',
    category: 'Landing Page',
    title: 'Portfolio 1',
  },
  {
    id: 2,
    image: '/portfolio-2.png',
    category: 'Landing Page',
    title: 'Portfolio 2',
  },
  {
    id: 3,
    image: '/portfolio-3.png',
    category: 'Landing Page',
    title: 'Portfolio 3',
  },
];

const Portfolio = () => {
  return (
    <section className='py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>
          From Vision to Launch! Projects We’re Proud Of
        </h2>

        <p className='text-gray-500 text-sm mt-3'>
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      <div className='max-w-5xl mx-auto grid grid-cols-3 gap-6'>
        {portfolios.map((portfolio) => (
          <div key={portfolio.id}>
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className='w-full h-[260px] object-cover rounded-2xl'
            />

            <p className='text-orange-500 text-sm mt-4'>{portfolio.category}</p>

            <h3 className='font-semibold text-lg mt-1'>{portfolio.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
