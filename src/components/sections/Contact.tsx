import { type FormEvent, useState } from 'react';

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'Software Development',
  'Other',
];

type PopupStatus = 'success' | 'failed' | null;

const Contact = () => {
  const [popupStatus, setPopupStatus] = useState<PopupStatus>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setPopupStatus('failed');
      return;
    }

    setPopupStatus('success');
    event.currentTarget.reset();
  };

  return (
    <section
      id='contact'
      className='relative bg-black px-4 py-16 lg:px-[140px] lg:py-[80px]'
    >
      <div className='mx-auto max-w-[361px] lg:max-w-[1160px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-bold leading-tight text-white lg:text-[34px]'>
            Ready to Start? Let&apos;s Talk.
          </h2>

          <p className='mx-auto mt-4 max-w-[310px] text-[13px] leading-6 text-white/45 lg:max-w-[560px]'>
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='mx-auto mt-12 max-w-[560px]'>
          <div className='space-y-6'>
            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Name
              </label>

              <input
                name='name'
                type='text'
                placeholder='Enter your name'
                className='h-[44px] w-full rounded-[10px] border border-white/10 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>

            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Email
              </label>

              <input
                name='email'
                type='email'
                placeholder='Enter your email'
                className='h-[44px] w-full rounded-[10px] border border-white/10 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>

            <div>
              <label className='mb-2 block text-[12px] font-semibold text-white'>
                Message
              </label>

              <textarea
                name='message'
                placeholder='Enter your message'
                className='h-[110px] w-full resize-none rounded-[10px] border border-white/10 bg-transparent px-4 py-3 text-[13px] text-white outline-none placeholder:text-white/25 focus:border-[#FF623E]'
              />
            </div>
          </div>

          <div className='mt-6'>
            <p className='mb-4 text-[12px] font-semibold text-white'>
              Services
            </p>

            <div className='grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2'>
              {services.map((service, index) => (
                <label
                  key={service}
                  className='flex cursor-pointer items-center gap-3 text-[13px] text-white'
                >
                  <input
                    type='checkbox'
                    name='services'
                    value={service}
                    defaultChecked={index === 0}
                    className='hidden'
                  />

                  <span
                    className={`flex h-[16px] w-[16px] items-center justify-center rounded-[4px] border ${
                      index === 0
                        ? 'border-[#FF623E] bg-[#FF623E]'
                        : 'border-white/20 bg-transparent'
                    }`}
                  >
                    {index === 0 && (
                      <svg
                        width='10'
                        height='8'
                        viewBox='0 0 10 8'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1 4L3.5 6.5L9 1'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
                  </span>

                  {service}
                </label>
              ))}
            </div>
          </div>

          <button
            type='submit'
            className='mt-8 h-[44px] w-full rounded-full bg-[#FF623E] text-[12px] font-semibold text-white'
          >
            Send
          </button>
        </form>
      </div>

      {popupStatus && (
        <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4'>
          <div className='w-full max-w-[320px] overflow-hidden rounded-[14px] border border-white/10 bg-[#070C12] text-center lg:max-w-[380px]'>
            <div className='flex justify-center bg-[#0B1118] py-9 lg:py-10'>
              <div className='relative text-[64px] leading-none lg:text-[70px]'>
                ✉️
                <span
                  className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-[20px] font-bold text-white lg:h-9 lg:w-9 lg:text-[22px] ${
                    popupStatus === 'success' ? 'bg-green-500' : 'bg-[#FF623E]'
                  }`}
                >
                  {popupStatus === 'success' ? '✓' : '×'}
                </span>
              </div>
            </div>

            <div className='px-5 py-6 lg:px-6 lg:py-7'>
              <h3 className='text-[14px] font-bold text-white lg:text-[16px]'>
                {popupStatus === 'success'
                  ? 'Message Received!'
                  : 'Oops! Something went wrong.'}
              </h3>

              <p className='mx-auto mt-3 max-w-[250px] text-[11px] leading-[18px] text-white/55 lg:max-w-[280px] lg:text-[12px] lg:leading-[20px]'>
                {popupStatus === 'success'
                  ? "Thanks for reaching out — we'll get back to you as soon as possible."
                  : "We couldn't send your message. Please try again or check your connection."}
              </p>

              <button
                type='button'
                onClick={() => setPopupStatus(null)}
                className='mt-6 h-[40px] w-full rounded-full bg-[#FF623E] text-[12px] font-semibold text-white lg:h-[42px]'
              >
                {popupStatus === 'success' ? 'Back to Home' : 'Try Again'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
