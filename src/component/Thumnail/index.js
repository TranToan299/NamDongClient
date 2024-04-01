import React from "react";
import styles from "./index.module.scss";
import useLocales from "../../hooks/useLocales";
import pictureDefault from "../../assets/images/other-service-page/banner.png"

const ThumbnailComponent = (props) => {
  const { picture, date, name, content,...other } = props;
  const { t } = useLocales();
  return (
    <div className={styles.card}  {...other}>
      <div className={styles.image}>
      <img src={picture || pictureDefault.src} alt="Event" />
      </div>
      <div>{t(name)}</div>
      <p>{content}</p>
    </div>
  );
};

export default ThumbnailComponent;
