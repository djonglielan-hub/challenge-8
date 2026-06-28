const services = [
  {
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
    icon: '/Icon-web.png',
  },
  {
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: '/Icon-mobile.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces',
    icon: '/Icon-ui.png',
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: '/Icon-cloud.png',
  },
  {
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: '/Icon-software.png',
  },
  {
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
    icon: '/Icon-it.png',
  },
  {
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
    icon: '/Icon-security.png',
  },
  {
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
    icon: '/Icon-QA.png',
  },
  {
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
    icon: '/Icon-consult.png',
  },
];

const Services = () => {
  return (
    <section
      id='service'
      className='bg-black px-5 py-16 lg:px-[140px] lg:py-[80px]'
    >
      <div className='mx-auto flex max-w-[1160px] flex-col gap-12 lg:gap-[64px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            Smart IT Solutions That Grow With You
          </h2>

          <p className='mx-auto mt-4 max-w-[560px] text-[13px] leading-6 text-white/45'>
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <div className='grid gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.title}
              className='relative min-h-[130px] rounded-[14px] border border-white/10 bg-[#070C12] px-6 pb-5 pt-12'
            >
              <img
                src={service.icon}
                alt=''
                className='absolute -top-5 left-6 h-[54px] w-[54px] object-contain'
              />

              <h3 className='mt-4 text-[16px] font-bold leading-6 text-white'>
                {service.title}
              </h3>

              <p className='mt-2 text-[13px] leading-6 text-white/45'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
