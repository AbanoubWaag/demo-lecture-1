import styles from "./hero-section.module.css"
import hero from "../../../assets/Card.png"



function HeroSection() {
  return (
    <>
      <div className={`row ${styles.hero}`}>
        <div className="col-12 col-md-5 d-flex flex-column justify-content-evenly">
            <h1 className={styles.title}>The <span className={styles.span}>#1</span> Job Board for Hiring or Find your next job in <span className={styles.span}>Egypt</span></h1>
            <p className={styles.desc}>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
        </div>

        <div className="col-12 col-md-2"></div>

        <div className="col-12 col-md-5">
            <img src={hero} alt="card photo" />
        </div>
      </div>
    </>
  )
}

export default HeroSection;



