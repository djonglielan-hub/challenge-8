const TrustedBrands = () => {
  return (
    <section className='pt-6 pb-10 lg:py-16 text-center'>
      <h3 className='text-[12px] lg:text-xl font-semibold mb-6 lg:mb-8'>
        Trusted by Global Innovators & Leading Brands
      </h3>

      {/* Mobile: cuma 3 logo seperti Figma mobile */}
      <div className='flex lg:hidden items-center justify-center gap-8 opacity-70'>
        <span className='text-gray-400 tracking-[4px] text-[16px]'>STMAN</span>

        <span className='text-gray-600 font-semibold text-[24px]'>
          ◈ databricks
        </span>

        <span className='text-gray-500 text-[24px]'>♧ airbn</span>
      </div>

      {/* Desktop: pakai gambar brands lengkap seperti Figma desktop */}
      <img
        src='/brands.png'
        alt='Trusted Brands'
        className='hidden lg:block mx-auto w-full max-w-5xl opacity-60'
      />
    </section>
  );
};

export default TrustedBrands;
