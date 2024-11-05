
//styles
import styles from "./HomePage.module.css";
import HomePageHeader from "../modules/HomePageHeader";

function HomePage() {

  return (
    <div className={styles.Container}>
      <HomePageHeader />
    </div>
  );
}

export default HomePage;
