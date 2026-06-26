const Contact = () => {
  return (
    <section className='py-20'>
      <div className='max-w-xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-bold'>
            Ready to Start? Let&apos;s Talk.
          </h2>

          <p className='text-gray-500 text-sm mt-3'>
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        <form className='space-y-6'>
          <div>
            <label className='block text-sm font-semibold mb-2'>Name</label>

            <input
              type='text'
              placeholder='Enter your name'
              className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold mb-2'>Email</label>

            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold mb-2'>Message</label>

            <textarea
              placeholder='Enter your message'
              rows={5}
              className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none resize-none'
            ></textarea>
          </div>

          <div>
            <label className='block text-sm font-semibold mb-4'>Services</label>

            <div className='grid grid-cols-2 gap-y-4 text-sm'>
              <label className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  defaultChecked
                  className='accent-[#FF623E]'
                />
                Web Development
              </label>

              <label className='flex items-center gap-3'>
                <input type='checkbox' className='accent-[#FF623E]' />
                Cloud Solutions
              </label>

              <label className='flex items-center gap-3'>
                <input type='checkbox' className='accent-[#FF623E]' />
                Mobile App Development
              </label>

              <label className='flex items-center gap-3'>
                <input type='checkbox' className='accent-[#FF623E]' />
                Software Development
              </label>

              <label className='flex items-center gap-3'>
                <input type='checkbox' className='accent-[#FF623E]' />
                UI/UX Design
              </label>

              <label className='flex items-center gap-3'>
                <input type='checkbox' className='accent-[#FF623E]' />
                Other
              </label>
            </div>
          </div>

          <button
            type='submit'
            className='w-full bg-[#FF623E] text-white py-3 rounded-full text-sm font-semibold'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
