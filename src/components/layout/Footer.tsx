const footerLinks = ['About', 'Service', 'Projects', 'Testimonials', 'FAQ'];

const socialLinks = ['f', '◎', 'in', '♪'];

const Footer = () => {
  return (
    <footer className='bg-black px-4 pb-6 pt-6 lg:px-[140px] lg:pb-[80px]'>
      <div className='mx-auto max-w-[361px] rounded-[18px] border border-white/10 bg-[#070C12] px-5 py-6 lg:max-w-[1160px] lg:px-10 lg:py-10'>
        <div className='flex items-center gap-2'>
          <div className='relative h-5 w-5 lg:h-6 lg:w-6'>
            <span className='absolute left-0 top-1 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
            <span className='absolute bottom-0 right-0 h-3.5 w-3.5 rounded-[3px] bg-[#FF623E]' />
          </div>

          <span className='text-[14px] font-bold text-white lg:text-[18px]'>
            Your Logo
          </span>
        </div>

        <h2 className='mt-7 text-[24px] font-bold uppercase leading-[31px] text-white lg:text-[34px]'>
          Let&apos;s Discuss
          <br />
          Your Ideas
        </h2>

        <div className='my-8 h-px w-full bg-white/10' />

        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
          <nav className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className='text-[12px] text-white/70 transition hover:text-[#FF623E] lg:text-[13px]'
              >
                {link}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-3'>
            {socialLinks.map((social) => (
              <a
                key={social}
                href='#'
                className='flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-transparent text-[12px] font-semibold text-white transition hover:border-[#FF623E] hover:text-[#FF623E] lg:h-9 lg:w-9 lg:text-[13px]'
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
