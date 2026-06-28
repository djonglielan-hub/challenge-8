const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
    open: true,
  },
  {
    question: 'How do I know if this is right for my business?',
    answer: '',
    open: false,
  },
  {
    question: 'How much does a project cost?',
    answer: '',
    open: false,
  },
  {
    question: 'How long does it take?',
    answer: '',
    open: false,
  },
  {
    question: 'Can I start with a small project first?',
    answer: '',
    open: false,
  },
];

const FAQ = () => {
  return (
    <section
      id='faq'
      className='bg-black px-5 py-16 lg:px-[120px] lg:py-[80px]'
    >
      <div className='mx-auto flex max-w-[1200px] flex-col gap-[48px]'>
        <div className='grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[1fr_320px] lg:items-center'>
          <h2 className='max-w-[360px] text-[32px] font-bold leading-[1.25] text-white lg:text-[36px]'>
            Need Help? Start
            <br />
            Here.
          </h2>

          <p className='max-w-[260px] text-[15px] leading-7 text-white/50 lg:justify-self-end'>
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-[1fr_321px] lg:items-start'>
          <div>
            {faqs.map((faq) => (
              <div key={faq.question} className='border-b border-white/10 py-5'>
                <div className='flex items-center justify-between gap-6'>
                  <h3 className='text-[18px] font-bold text-white'>
                    {faq.question}
                  </h3>

                  <span className='text-[24px] leading-none text-white'>
                    {faq.open ? '−' : '+'}
                  </span>
                </div>

                {faq.open && (
                  <p className='mt-4 max-w-[820px] text-[15px] leading-7 text-white/45'>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <aside className='w-full lg:w-[321px]'>
            <img
              src='/consultation.png'
              alt='Free consultation'
              className='w-full rounded-[22px] object-contain'
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
