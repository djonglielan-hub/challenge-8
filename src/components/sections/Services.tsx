import { services } from '../../data/services';
const Services = () => {
  return (
    <section className='pt-12 pb-16 lg:py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-[36px] lg:text-4xl font-bold leading-tight'>
          Smart IT Solutions That <br />
          Grow With You
        </h2>

        <p className='text-gray-500 text-[16px] leading-[28px] mt-4'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className='max-w-[361px] lg:max-w-[1040px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6'>
        {services.map((service) => (
          <div
            key={service.id}
            className='relative bg-gray-50 border border-gray-200 rounded-2xl px-6 pt-14 pb-6 min-h-[156px] overflow-visible'
          >
            <img
              src={service.icon}
              alt={service.title}
              className='absolute -top-6 left-7 w-14 h-14 object-contain'
            />

            <h3 className='font-bold text-[20px] leading-tight mb-4'>
              {service.title}
            </h3>

            <p className='text-gray-500 text-[16px] leading-[28px]'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
