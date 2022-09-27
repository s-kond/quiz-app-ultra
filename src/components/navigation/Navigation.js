import "./Navigation.css"
import homeIcon from "../assets/home-svgrepo-com.svg";
import bookmarkIcon from "../assets/bookmark-clicked.svg";
import profileIcon from "../assets/profile-user-svgrepo-com.svg";

export default function Nav(){
    return (
        <nav>
            <button type="button" className="nav__button"><img className="nav__button__img" src={homeIcon} alt="home icon"/></button>
            <button type="button" className="nav__button"><img className="nav__button__img" src={bookmarkIcon} alt="home icon"/></button>
            <button type="button" className="nav__button"><img className="nav__button__img" src={profileIcon} alt="home icon"/></button>
        </nav>
    )
}