import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useAppSelector } from "../redux/hooks";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ setShowCart }) => {

  // functions for handling menu section in react

  const [menu, setMenu] = useState(false);
  
  const {user, loginWithRedirect, logout,isAuthenticated } = useAuth0();
  

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
 


  // redux logic 
  const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <header className="fixed z-10 w-full ">
      <section>
        {/* desktop menu section  */}
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold cursor-pointer text-ExtraDarkColor">
                StyleNestle
              </h1>
            </Link>
          </div>

          {/* nav elements */}
          <nav className="flex-row items-center hidden gap-8 text-lg font-semibold lg:flex text-ExtraDarkColor">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            >
              Home
            </Link>
            <Link
              to="shop"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            >
              Shop
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            >
              Features
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            >
              Products
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            >
              Review
            </Link>
            {isAuthenticated && <h3 className="text-green-500 border shadow-sm border-m-violet-500 ">{user.name}</h3>}
           {isAuthenticated ?(
              <Link
              to="login"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Log Out
            </Link>) :(
               <Link
               to="login"
               spy={true}
               smooth={true}
               duration={500}
               className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
               onClick={() => loginWithRedirect()}
             >
               Login
             </Link>
              
           )}



          </nav>

          {/* nav icons */}
          <div className="flex items-center gap-5">
            {/* <FaUser size={25} className=" text-DarkColor" /> */}
            {isAuthenticated && <h3> {user.image}</h3>}
            <div className="relative text-DarkColor">
              <FaShoppingCart
                size={25}
                className="cursor-pointer "
                onClick={() => setShowCart(true)}
              />
              <div className=" absolute top-[-15px] right-[-10px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>

          {/* menu icon */}
          <div className="flex items-center lg:hidden">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <RiMenu2Line size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* mobile menu section */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-SecondaryColor text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-DarkColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="shop"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-DarkColor"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-DarkColor"
            onClick={closeMenu}
          >
            Features
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="transition duration-300 ease-in-out cursor-pointer hover:text-DarkColor"
            onClick={closeMenu}
          >
            Review
          </Link>
          {isAuthenticated ?(
              <Link
              to="login"
              spy={true}
              smooth={true}
              duration={500}
              className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Log Out
            </Link>) :(
               <Link
               to="login"
               spy={true}
               smooth={true}
               duration={500}
               className="transition duration-300 ease-in-out cursor-pointer hover:text-black"
               onClick={() => loginWithRedirect()}
             >
               Login
             </Link>
              
           )}
          
        </div>
      </section>
    </header>
  );
};


export default Navbar;
