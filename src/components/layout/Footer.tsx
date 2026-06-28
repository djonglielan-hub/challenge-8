const footerLinks = ['About', 'Service', 'Projects', 'Testimonials', 'FAQ'];

const socialLinks = ['f', '◎', 'in', '♪'];

const Footer = () => {
  return (
    <footer className='bg-black px-5 pb-16 lg:px-[140px] lg:pb-[80px]'>
      <div className='mx-auto max-w-[1160px] rounded-[18px] border border-white/10 bg-[#070C12] px-8 py-8 lg:px-10 lg:py-10'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <h2 className='text-[28px] font-bold uppercase leading-[1.15] text-white lg:text-[34px]'>
            Let&apos;s Discuss
            <br />
            Your Ideas
          </h2>

          <div className='flex items-center gap-2'>
            <div className='relative h-6 w-6'>
              <span className='absolute left-0 top-1 h-4 w-4 rounded-[3px] bg-[#FF623E]' />
              <span className='absolute bottom-1 right-0 h-4 w-4 rounded-[3px] bg-[#FF623E]' />
            </div>

            <span className='text-[18px] font-bold text-white'>Your Logo</span>
          </div>
        </div>

        <div className='my-10 h-px w-full bg-white/10' />

        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
          <nav className='flex flex-wrap gap-x-8 gap-y-4'>
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className='text-[13px] text-white/70 transition hover:text-[#FF623E]'
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
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-transparent text-[13px] font-semibold text-white transition hover:border-[#FF623E] hover:text-[#FF623E]'
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
