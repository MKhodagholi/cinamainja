import coverFilm from "@/assets/img/Napoleon.webp";

import styles from "./Preview.module.css";

const description =
  "حماسه ای که به شرح ظهور و سقوط شطرنجی امپراتور فرانسه ناپلئون بناپارت و سفر بی امان او به قدرت از طریق منشور رابطه اعتیاد آور و بی ثبات او با همسرش ژو زفین می پردازد.";

const date = new Date();

const day = Intl.DateTimeFormat("fa-IR", { day: "numeric" }).format(date);
const month = Intl.DateTimeFormat("fa-IR", { month: "long" }).format(date);
const year = Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(date);

const startTime = "21";

const Preview = () => {
  return (
    <div className={styles.PreviewWrapper}>
      <div className={styles.Preview}>
        <div className={styles.ImgWrapper}>
          <img src={coverFilm} />
        </div>
        <div className={styles.PreviewText}>
          <div className={styles.Name}>
            <h3>فیلم ناپلئون</h3>
            <p>محصول سال ۲۰۲۳ آمریکا</p>
          </div>
          <hr />
          <div className={styles.Actors}>
            <h3>بازیگران: </h3>
            Joaquin Phoenix، Tahar Rahim، Vanessa Kirby
          </div>
          <hr />
          <div className={styles.Description}>
            <h3>خلاصه: </h3>
            <p>{description}</p>
          </div>
          <hr />
          <div className={styles.TimeStart}>
            <span>
              تاریخ اکران: {day} {month} {year}
            </span>{" "}
            <span>ساعت شروع: {startTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
