import { useState } from "react";
import "./ThemeCmp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.setAttribute("data-theme", themeName);
} // Get saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
// If a saved theme exists, apply it
if (savedTheme) {
  setTheme(savedTheme);
}

function ThemeCmp() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }
  return (
    <div>
      <div
        className="dropdown dropdown-top dropdown-end"
        style={{ position: "fixed", zIndex: 1 }}
      >
        <button tabIndex="0" className="btn m-1" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faStarHalfStroke} />
        </button>
        <ul
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
          style={{
            maxHeight: "800px",
            display: isDropdownVisible ? "block" : "none",
            overflowY: "scroll",
          }}
        >
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("light");
              }}
            >
              Light
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("night");
              }}
            >
              Night
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("cupcake");
              }}
            >
              Cupcake
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("black");
              }}
            >
              Black
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("coffee");
              }}
            >
              Coffee
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("corporate");
              }}
            >
              Corporate
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("retro");
              }}
            >
              Retro
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("valentine");
              }}
            >
              Valentine
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("pastel");
              }}
            >
              Pastel
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("dracula");
              }}
            >
              Dracula
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("autumn");
              }}
            >
              Autumn
            </a>
          </li>
          <li style={{ display: "block" }}>
            <a
              className="dropdown-item"
              href="/"
              onClick={(event) => {
                event.preventDefault();
                setTheme("dark");
              }}
            >
              Dark
            </a>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
}

export default ThemeCmp;
