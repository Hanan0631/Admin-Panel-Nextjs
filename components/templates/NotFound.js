//next
import Link from "next/link";

//styles
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <img src="/pageNotFound.jpg" />
      <div>
        <p>صفحه مورد نظر پیدا نشد</p>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NotFound;