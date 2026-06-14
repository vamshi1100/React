let Footer = () => {
  return (
    <div
      id="footer"
      className="flex justify-between items-center px-10 py-6 mt-10 bg-black text-white border-t-4 border-blue-500 shadow-xl"
    >
      <p className="text-xl font-extrabold text-blue-400">🍔 Swiggy </p>
      <p className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
        Privacy Policy
      </p>
      <p className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
        Contact Us
      </p>
    </div>
  );
};

export default Footer;