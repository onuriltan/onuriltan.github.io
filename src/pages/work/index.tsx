import styles from "./index.module.css";
import Config from "@/config";
import Image from "next/image";

const Freelance = () => {
  return (
    <>
      <main className={styles.main}>
        {Config.corporate.map((item) => {
          return (
            <a
              key={JSON.stringify(item)}
              className={styles.container}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_container}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
              <div>
                <p className={styles.title}>{item.title}</p>
                <p>{item.description}</p>
              </div>
              <div className={styles.left}>
                <p className={styles.title}>Technologies</p>
                <ul className={styles.list}>
                  {item.technologies.map((item) => {
                    return <li key={JSON.stringify(item)}>{item}</li>;
                  })}
                </ul>
              </div>
            </a>
          );
        })}
        {Config.freelance.map((item) => {
          return (
            <a
              key={JSON.stringify(item)}
              className={styles.container}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.image_container}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
              <div>
                <p className={styles.title}>{item.title}</p>
                <p>{item.description}</p>
              </div>
              <div className={styles.left}>
                <p className={styles.title}>Technologies</p>
                <ul className={styles.list}>
                  {item.technologies.map((item) => {
                    return <li key={JSON.stringify(item)}>{item}</li>;
                  })}
                </ul>
              </div>
            </a>
          );
        })}
      </main>
    </>
  );
};

export default Freelance;