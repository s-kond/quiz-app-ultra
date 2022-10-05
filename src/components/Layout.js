import Header from "./header/Header";
import "../App.css";
import { NavBar } from "./navigation/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="App">
      <Outlet />
      </main>
      <NavBar />
    </>
  );
}
