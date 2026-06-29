const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UI/UX design, and more.',
  },
  {
    question: 'How do I know if this is right for my business?',
    answer:
      'Book a free consult — we’ll assess your goals and recommend the right approach.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Every project is different. Let’s talk about your needs to get a tailored estimate.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Depends on scope — but we always prioritize quality and deadlines.',
  },
  {
    question: 'Can I start with a small project first?',
    answer: 'Absolutely. We often begin with MVPs or pilot projects.',
  },
];

const FAQ = () => {
  return (
    <section id='faq' className='bg-black px-4 py-14 lg:px-0 lg:py-[90px]'>
      <div className='mx-auto max-w-[361px] lg:max-w-[720px]'>
        <div className='text-left lg:text-center'>
          <h2 className='text-[28px] font-bold leading-[34px] text-white lg:text-[34px] lg:leading-tight'>
            Need Help? Start Here.
          </h2>

          <p className='mt-4 max-w-[310px] text-[12px] leading-[20px] text-white/45 lg:mx-auto lg:max-w-[560px] lg:text-[13px]'>
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className='mt-8 divide-y divide-white/10 border-y border-white/10'>
          {faqs.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className='group py-5'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4'>
                <h3 className='text-[13px] font-bold leading-[20px] text-white lg:text-[14px]'>
                  {item.question}
                </h3>

                <span className='text-[18px] font-light text-white group-open:hidden'>
                  +
                </span>

                <span className='hidden text-[18px] font-light text-white group-open:block'>
                  −
                </span>
              </summary>

              <p className='mt-3 max-w-[310px] text-[12px] leading-[20px] text-white/45 lg:max-w-[620px]'>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
