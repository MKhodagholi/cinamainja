import styles from "./Cinema.module.css";

const src = "https://namavid.upera.tv/2941545-11-720.mp4?ref=rgtZ";

const Cinema = () => {
  return (
    <div className={styles.Cinema}>
      <video controls className={styles.Video} autoPlay muted>
        <source src={src} />
      </video>
    </div>
  );
};

export default Cinema;
