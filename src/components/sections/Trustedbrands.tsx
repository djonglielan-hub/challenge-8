const TrustedBrands = () => {
  return (
    <section className='bg-black px-4 pt-6 lg:px-0 lg:pt-10'>
      <div className='mx-auto max-w-[361px] text-center lg:max-w-[1120px]'>
        <p className='text-[12px] font-semibold leading-[18px] text-white lg:text-[14px]'>
          Trusted by Global Innovators & Leading Brands
        </p>

        {/* Mobile brands */}
        <div className='mt-7 flex items-center justify-between px-3 text-white/40 lg:hidden'>
          <span className='text-[11px] tracking-[3px]'>STMAN</span>

          <span className='text-[16px] font-semibold tracking-[-1px]'>
            databricks
          </span>

          <span className='text-[16px] font-semibold tracking-[-1px]'>
            airbnb
          </span>
        </div>

        {/* Desktop brands */}
        <div className='mx-auto mt-10 hidden justify-center lg:flex'>
          <img
            src='/brands.png'
            alt='Trusted brands'
            className='w-full max-w-[900px] object-contain opacity-45 grayscale brightness-150'
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
