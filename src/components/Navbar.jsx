import Logo from "../assets/Logo.png";

const Navbar = () => {
  const menu = ["Home", "Fitur", "Blog", "FAQ", "Kontak"];
  
  return (
    <div className="container max-w-6xl mx-auto flex flex-row pt-12 items-center space-x-36 text-base">
      <div>
        <img alt="logo" src={Logo} className="w-36" />
      </div>
      <div className="flex-1 font-normal">
        <ul className="flex flex-row space-x-10">
          {menu.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
      <div className="space-x-7 font-medium">
        <button className="border border-green-400 text-green-400 py-2 px-7 rounded-full">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default Navbar;