const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <div className='flex items-center gap-2'>
        <img src='/logo.png' alt='logo' className='w-8 h-8' />
        <h1 className='font-bold text-xl'>Your Logo</h1>
      </div>

      <ul className='hidden md:flex gap-8'>
        <li>About</li>
        <li>Service</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>

      <button className='bg-orange-500 text-white px-12 py-3 rounded-full'>
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;
