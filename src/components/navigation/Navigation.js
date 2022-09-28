import "./Navigation.css"
import homeIcon from "../assets/home-svgrepo-com.svg";
import bookmarkIcon from "../assets/bookmark-clicked.svg";
import profileIcon from "../assets/profile-user-svgrepo-com.svg";
import addIcon from "../assets/add-svgrepo-com.svg"

export default function Nav({setPage, page}){
    return (
        <nav>
            <button type="button" className={page === "home" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setPage("home")}>
                <img className="nav__button__img" src={homeIcon} alt="home icon"/>
            </button>
            <button type="button" className={page === "bookmark" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setPage("bookmark")}>
                <img className="nav__button__img" src={bookmarkIcon} alt="bookmark icon"/>
            </button>
            <button type="button" className={page === "add" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setPage("add")}>
                <img className="nav__button__img" src={addIcon} alt="add card icon"/>
            </button>
            <button type="button" className={page === "profile" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setPage("profile")}>
                <img className="nav__button__img" src={profileIcon} alt="profile icon"/>
            </button>
        </nav>
    )
}