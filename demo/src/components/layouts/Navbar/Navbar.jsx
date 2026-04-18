import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png"


function Navbar() {
  return (
    <nav>
    
    <div className="container">
      <div className={styles.navInfo}>
        <div className={styles.logo}>
        <img src={logo} />
        </div>
      
      <div className={styles.sideBar}>
        <ul className={styles.links}>
          <li>Home</li>
          <li>Find job</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.register}>Register</button>
          <button className={styles.signup}>Sign up</button>
        </div>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;
