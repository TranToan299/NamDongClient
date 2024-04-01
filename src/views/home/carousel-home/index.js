import { Carousel, Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import Picture1 from "../../../assets/images/Carousel/Picture1.jpg";
import Picture2 from "../../../assets/images/Carousel/Picture2.png";
import Picture3 from "../../../assets/images/Carousel/Picture3.png";
import Picture4 from "../../../assets/images/Carousel/Picture5.jpg";
import Picture5 from "../../../assets/images/Carousel/Picture6.png";
import Picture6 from "../../../assets/images/Carousel/Picture7.png";
import useResponsive from "../../../hooks/useResponsive";
import { dispatch, useSelector } from "../../../redux/store";
import { getImages } from "../../../redux/slices/GetImagesSlice";
import { listTypeImage } from "../../../constants/app-constants";

const CarouselHomePage = () => {

  const { listImages } = useSelector((state) => state.imagesList);
  const refCarousel = useRef();
  const { isMobile, isTablet } = useResponsive();
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const listCarousel = [
    { name: `1. Dự án Nhà máy Aqua`, pic: Picture1 },
    { name: `2. Dự án Decor Aeon`, pic: Picture2 },
    { name: `3. Showroom Volkswagen`, pic: Picture3 },
    { name: `4. Virtual Showroom Aqua`, pic: Picture4 },
    { name: `5. Dự án Booth Marshall`, pic: Picture5 },
    { name: `6. Nội thất nhà Phan Thiết`, pic: Picture6 },
  ];

  console.log('listImages222', listImages)

  useEffect(()=> {
    dispatch(getImages(listTypeImage.homePage.homeBanners));
  }, [])

  return (
    <div className={styles.carousel}>
      <Carousel
        autoplaySpeed={1200}
        beforeChange={(current, next) => {
          setCurrentCarousel(next);
        }}
        ref={refCarousel}
        autoplay
        dots={!isMobile ? false : true}
      >
        {listCarousel?.map((item, index) => {
          return (
            <div key={index} className={styles.carousel__item}>
              <img src={item.pic.src} alt="carousel" />
            </div>
          );
        })}
      </Carousel>
      {!isMobile && (
        <Row
          gutter={[40, 0]}
          className={styles.pagination}
          justify="space-between"
        >
          {listCarousel?.map((item, index) => {
            return (
              <Col xs={12} sm={4} md={4} key={index}>
                <Row
                  onClick={() => {
                    refCarousel.current.goTo(index);
                  }}
                  align={"middle"}
                  className={`${styles.pagination__item} ${
                    currentCarousel === index
                      ? styles.pagination__itemActive
                      : ""
                  }`}
                >
                  <Col className={styles.pagination__item__name}>
                   {item?.name}
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default CarouselHomePage;
