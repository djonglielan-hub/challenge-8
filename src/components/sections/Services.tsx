import { services } from '../../data/services';

const Services = () => {
  return (
    <section className='py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>
          Smart IT Solutions That Grow With You
        </h2>

        <p className='text-gray-500 mt-3'>
          We provide modern digital services for your business.
        </p>
      </div>

      <div className='max-w-[1040px] mx-auto grid grid-cols-3 gap-5'>
        {services.map((service) => (
          <div
            key={service.id}
            className='relative bg-gray-50 border border-gray-200 rounded-xl px-4 pt-12 pb-5 h-[130px] overflow-visible'
          >
            <img
              src={service.icon}
              alt={service.title}
              className='absolute -top-6 left-5 w-12 h-12 object-contain'
            />

            <h3 className='font-semibold text-sm mb-2'>{service.title}</h3>

            <p className='text-gray-500 text-xs leading-relaxed'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
