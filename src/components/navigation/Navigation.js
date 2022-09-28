import "./Navigation.css"
import { useState } from "react";
import homeIcon from "../assets/home-svgrepo-com.svg";
import bookmarkIcon from "../assets/bookmark-clicked.svg";
import profileIcon from "../assets/profile-user-svgrepo-com.svg";
import addIcon from "../assets/add-svgrepo-com.svg"

export default function Nav(){
    const [activePage, setActivePage] = useState("home")
    
    return (
        <nav>
            <button type="button" className={activePage === "home" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setActivePage("home")}>
                <img className="nav__button__img" src={homeIcon} alt="home icon"/>
            </button>
            <button type="button" className={activePage === "bookmark" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setActivePage("bookmark")}>
                <img className="nav__button__img" src={bookmarkIcon} alt="bookmark icon"/>
            </button>
            <button type="button" className={activePage === "add" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setActivePage("add")}>
                <img className="nav__button__img" src={addIcon} alt="add card icon"/>
            </button>
            <button type="button" className={activePage === "profile" ? "nav__button nav__button-active" : "nav__button"} onClick = {() => setActivePage("profile")}>
                <img className="nav__button__img" src={profileIcon} alt="profile icon"/>
            </button>
        </nav>
    )
}