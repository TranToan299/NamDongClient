import { Button, Modal } from "antd";
import React from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";
import picture from "../../assets/images/House Furniture Page/house-furniture-1.png";
import useResponsive from "../../hooks/useResponsive";

const ModalListImage = (props) => {
  const {
    isModalOpen,
    handleCancel,
    currentImageIndex = 0,
    setCurrentImageIndex,
    listImage = [picture.src],
    // option
    name = "Dự án",
  } = props;
  const { isMobile } = useResponsive();

  const handleNext = () => {
    if (currentImageIndex === listImage?.length - 1) {
      return;
    }
    setCurrentImageIndex(currentImageIndex + 1);
  };
  const handlePrev = () => {
    if (currentImageIndex === 0) {
      return;
    }
    setCurrentImageIndex(currentImageIndex - 1);
  };
  return (
    <>
      <Modal
        bodyStyle={{
          backgroundColor: "transparent",
          color: "white",
        }}
        centered={true}
        footer={null}
        className="custom-modal"
        closeIcon={<CloseOutlined style={{ color: "white" }} />}
        width={"100%"}
        maskStyle={{
          backgroundColor: "rgba(0,0,0,0.8)",
          // , opacity: 0.8
        }}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className={styles.modal}>
          <div className={styles.modal__image}>
            <img src={listImage?.[currentImageIndex]} alt="Picture detail" />
            <div className={styles.toolbar}>
              {currentImageIndex === 0 ? (
                ""
              ) : (
                <button onClick={handlePrev} className={styles.toolbar__prev}>
                  <ArrowLeftOutlined style={{ color: "white" }} />
                </button>
              )}

              {currentImageIndex === listImage?.length - 1 ? (
                ""
              ) : (
                <button onClick={handleNext} className={styles.toolbar__next}>
                  <ArrowRightOutlined style={{ color: "white" }} />
                </button>
              )}
            </div>
          </div>
          {isMobile ? (
            <div className={styles.modal__titleMobile}>
              <div>{name}</div>
              <div>{`${currentImageIndex + 1}/${listImage?.length}`}</div>
            </div>
          ) : (
            <div className={styles.modal__title}>
              <div>{name}</div>
              <div>{`${currentImageIndex + 1}/${listImage?.length}`}</div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalListImage;
