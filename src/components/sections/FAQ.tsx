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
    <section className='py-20 max-w-5xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-10 items-start border-b border-gray-200 pb-8'>
        <h2 className='text-4xl font-bold leading-tight'>
          Need Help? Start <br />
          Here.
        </h2>

        <p className='text-gray-500 text-sm md:text-right'>
          Everything you need to <br />
          know — all in one place.
        </p>
      </div>

      <div className='grid md:grid-cols-[1fr_280px] gap-12 mt-8'>
        <div>
          {faqs.map((faq) => (
            <div key={faq.question} className='border-b border-gray-200 py-5'>
              <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-lg'>{faq.question}</h3>

                <span className='text-xl'>{faq.open ? '−' : '+'}</span>
              </div>

              {faq.open && (
                <p className='text-gray-500 text-sm mt-4'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <img
          src='/consultation.png'
          alt='consultation'
          className='w-[329px] h-[453px] object-contain rounded-3xl'
        />
      </div>
    </section>
  );
};

export default FAQ;
