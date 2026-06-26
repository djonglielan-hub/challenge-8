interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full'>
      {children}
    </button>
  );
};

export default Button;
