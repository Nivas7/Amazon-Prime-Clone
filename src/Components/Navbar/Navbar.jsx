import {  useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine} from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import './Navbar.css';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Navbar = () => {

	const [isUsrOpen, setUsrIsOpen] = useState(false);
	const [isHomeOpen, setHomeIsOpen] = useState(false);
	const [isStoreOpen, setStoreIsOpen] = useState(false);
	const [isLangOpen, setLangIsOpen] = useState(false);


	const homedrop = ["All", "Movies", "TV Show"];
	const storedrop = ["All", "Rent", "Channels"]
	const langdrop = ["English", "Tamil"]
	const userdrop = ["Sign in", "Help", "Watch Anywhere"];


	return (
		<section className="navbar-container">
		<nav className="navbar wrapper">
			<div>
				<Link to='/'>
					<img src="/src/assets/Logo-min.png" alt="logo" id="logo"/>
				</Link>
			</div>
			<ul className="nav-list">
			<li className={isHomeOpen ? "drop-down active nav-list-item" : "drop-down nav-list-item"} onMouseEnter={() => setHomeIsOpen(true)} onMouseLeave={() => setHomeIsOpen(false)}>
				<Link className="link">
					Home
				</Link>
				<RiArrowDropDownLine className="icons"/>
				{isHomeOpen && (
					<DropdownMenu drop={homedrop} />
				)}
			</li>
			<li  className={isStoreOpen ? "drop-down active nav-list-item" : "drop-down nav-list-item"} onMouseEnter={() => setStoreIsOpen(true)} onMouseLeave={() => setStoreIsOpen(false)} >
				<Link className="link" >
					Store
				</Link>
				<RiArrowDropDownLine className="icons"/>
				{isStoreOpen && (
					<DropdownMenu drop={storedrop} />
				)}
			</li>
			<li className="nav-list-item">
				<Link className="link" >
					Live TV
				</Link>
			</li>
			<li className="nav-list-item">
				<Link className="link" >
					Categories
				</Link>
			</li>
			<li>
				<AiOutlineSearch className="icons not left" />
			</li>
			<li>
			<Link className="link">Try for Free</Link>
			</li>
			<li  className={isLangOpen ? "drop-down active nav-list-item" : "drop-down nav-list-item"} onMouseEnter={() => setLangIsOpen(true)} onMouseLeave={() => setLangIsOpen(false)}>
				<Link className="link">
					EN
				</Link>
				<RiArrowDropDownLine className="icons" />
				{isLangOpen && (
					<DropdownMenu drop={langdrop} />
				)}
			</li>
				<li  className={isUsrOpen ? "drop-down active" : "drop-down"} onMouseEnter={() => setUsrIsOpen(true)} onMouseLeave={() => setUsrIsOpen(false)}>
					<CgProfile className="icons not" />
					{isUsrOpen && (
						<DropdownMenu drop={userdrop} />
					)}
				</li>
						</ul>
		</nav>
		</section>
	);
}
 
export default Navbar;