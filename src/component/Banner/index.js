import React, { useState } from "react";
import styles from "./index.module.scss";
import banner1 from "../../assets/images/banner/banner1.png";
import { Breadcrumb } from "antd";
import Image from "next/image";

const Banner = (props) => {
  const { srcBanner, breadcrumb, title } = props;
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.banner__content__title}>{title}</div>
        <div className={styles.banner__content__breadcrumb}>
          {breadcrumb}
        </div>
      </div>

      <Image
        src={srcBanner || banner1.src}
        alt="banner"
        fill
        priority="eager"
        placeholder="blur"
        blurDataURL={srcBanner || banner1.src}
        className={loaded ? `${styles.banner__image} unblur` : styles.banner__image}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
};

export default Banner;
