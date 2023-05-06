import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4V2DV_oKpEYrfaiNEl5IP07HnewwYrkeOxg-hc3Lp2bdn318beBB6lHVVf2OQsqw3OHM&usqp=CAU"}
            alt="logo"
            width={"100%"}
          />
        </Link>
      </div>
      {/* Cart icon and count */}
      <Link to={"/addmovies"} style={{"textDecoration":"none"}}>
        <div className={styles.bx_1}>
          Add Movie
        </div>
      </Link>
    </div>
  );
}
