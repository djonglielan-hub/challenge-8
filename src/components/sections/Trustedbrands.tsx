const TrustedBrands = () => {
  return (
    <section className='bg-black px-5 pt-8 lg:px-0 lg:pt-10'>
      <div className='mx-auto max-w-[1120px] text-center'>
        <p className='text-[14px] font-semibold text-white'>
          Trusted by Global Innovators & Leading Brands
        </p>

        <div className='mx-auto mt-10 flex justify-center'>
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
