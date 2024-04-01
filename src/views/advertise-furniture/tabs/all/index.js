import { Col, Row, Spin } from "antd";
import _ from "lodash";
import { useRouter } from "next/router";
import React from "react";
import toucherhand from "../../../../assets/icons/flags/touch Hand.svg";
import furniture16 from "../../../../assets/images/advertise-page/furniture16.png";
import { OBJECT_TYPE } from "../../../../constants/app-constants";
import { ROUTER_PATH } from "../../../../constants/router-constants";
import { useSelector } from "../../../../redux/store";
import styles from "./index.module.scss";
import useLocales from "../../../../hooks/useLocales";
import ButtonCusTom from "../../../../component/ButtonCustom";

const TabAll = (props) => {
  const { loading, setParams, params } = props;
  const router = useRouter();
  const { t } = useLocales();
  const handleClick = (id) => {
    router.push(
      `${ROUTER_PATH.furnitureDetail}/${OBJECT_TYPE.product.type.advertisePage}/${id}`
    );
  };
  const { productList } = useSelector((state) => state.product);
  const arrayFurniture = _.chunk(productList, 16);
  console.log("🚀 ~ file: index.js:25 ~ TabAll ~ arrayFurniture:", arrayFurniture)
  const handleViewMore = () => {
    setParams({
      ...params,
      pageSize: params.pageSize + 16,
    });
  };
  return (
    <>
      {loading ? (
        <div className="center">
          <Spin />
        </div>
      ) : (
        productList?.map((item,index) => {
          const isEven = index % 2 === 0;
          return (
            <>
              <Row
                gutter={[
                  { xs: 20, xl: 20 },
                  { xs: 0, sm: 20, md: 20, xl: 20 },
                ]}
                className={styles.furniture}
              >
                <Col xs={24} sm={24} md={24} xl={6} data-aos="fade-right" className={isEven ? styles.fakeBackground: styles.fakeBlueBackground}>

                  {/* <Row
                    gutter={[
                      { xs: 20, sm: 20 },
                      { xs: 0, sm: 20 },
                    ]}
                  >
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[0]?.id);
                        }}
                        style={{
                          visibility: item[0]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[0]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[0]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[1]?.id);
                        }}
                        style={{
                          visibility: item[1]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[1]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[1]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                </Col>
                <Col xs={24} sm={24} md={24} xl={12} data-aos="fade-up">
                  <div
                    onClick={() => {
                      handleClick(item?.id);
                    }}
                    style={{
                      visibility: item?.thumbnail ? "visible" : "hidden",
                    }}
                    className={styles.furniture__item}
                  >
                    <img
                      className={styles.images__big}
                      src={item?.thumbnail || furniture16.src}
                      alt="furniture"
                    />
                    <div className={styles.furniture__item__modal}></div>
                    <div className={styles.furniture__item__modal__content}>
                      <div>{item?.name}</div>
                      <p>{t("viewMore")}</p>
                      <img src={toucherhand.src} alt="icon" />
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} xl={6} data-aos="fade-left" 
               
                className={!isEven ? styles.fakeBackground: styles.fakeBlueBackground}
                >

                  {/* <Row
                    gutter={[
                      { xs: 20, sm: 20 },
                      { xs: 0, sm: 20 },
                    ]}
                  >
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[3]?.id);
                        }}
                        style={{
                          visibility: item[3]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[3]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[3]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[4]?.id);
                        }}
                        style={{
                          visibility: item[4]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[4]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[4]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row> */}
                </Col>
              </Row>
              {/* <Row
                gutter={[
                  { xs: 20, xl: 20 },
                  { xs: 0, sm: 20, md: 20, xl: 20 },
                ]}
                className={styles.furniture}
              >
                <Col xs={24} sm={24} md={24} xl={12} data-aos='fade-right'>
                  <Row
                    gutter={[20, { xs: 0, sm: 20 }]}
                    align="middle"
                    justify="space-between"
                  >
                    <Col xs={24} sm={24} md={24} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[5]?.id);
                        }}
                        style={{
                          visibility: item[5]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          className={styles.images__big}
                          src={item[5]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[5]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={12} >
                      <div
                        onClick={() => {
                          handleClick(item[6]?.id);
                        }}
                        style={{
                          visibility: item[6]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[6]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[6]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={12}> 
                      <div
                        onClick={() => {
                          handleClick(item[7]?.id);
                        }}
                        style={{
                          visibility: item[7]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[7]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[7]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} xl={12} data-aos='fade-left'>
                  <Row gutter={[20, { xs: 0, sm: 20 }]}>
                    <Col xs={24} sm={24} md={12} xl={12}>
                      <div
                        onClick={() => {
                          handleClick(item[8]?.id);
                        }}
                        style={{
                          visibility: item[8]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[8]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[8]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={12}>
                      <div
                        onClick={() => {
                          handleClick(item[9]?.id);
                        }}
                        style={{
                          visibility: item[9]?.thumbnail ? "visible" : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[9]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[9]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[10]?.id);
                        }}
                        style={{
                          visibility: item[10]?.thumbnail
                            ? "visible"
                            : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          className={styles.images__big}
                          src={item[10]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[10]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                gutter={[
                  { xs: 20, xl: 20 },
                  { xs: 0, sm: 20, md: 20, xl: 0 },
                ]}
                className={styles.furniture}
              >
                <Col xs={24} sm={24} md={24} xl={6} data-aos='fade'>
                  <Row gutter={[20, { xs: 0, sm: 20 }]}>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[11]?.id);
                        }}
                        style={{
                          visibility: item[11]?.thumbnail
                            ? "visible"
                            : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[11]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[11]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[12]?.id);
                        }}
                        style={{
                          visibility: item[12]?.thumbnail
                            ? "visible"
                            : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[12]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[12]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} xl={12} data-aos='fade'>
                  <div
                    onClick={() => {
                      handleClick(item[13]?.id);
                    }}
                    style={{
                      visibility: item[13]?.thumbnail ? "visible" : "hidden",
                    }}
                    className={styles.furniture__item}
                  >
                    <img
                      className={styles.images__big}
                      src={item[13]?.thumbnail || furniture16.src}
                      alt="furniture"
                    />
                    <div className={styles.furniture__item__modal}></div>
                    <div className={styles.furniture__item__modal__content}>
                      <div>{item[13]?.name}</div>
                      <p>{t("viewMore")}</p>
                      <img src={toucherhand.src} alt="icon" />
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} xl={6} data-aos='fade'>
                  <Row gutter={[20, { xs: 0, md: 20 }]}>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[14]?.id);
                        }}
                        style={{
                          visibility: item[14]?.thumbnail
                            ? "visible"
                            : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[14]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[14]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} xl={24}>
                      <div
                        onClick={() => {
                          handleClick(item[15]?.id);
                        }}
                        style={{
                          visibility: item[15]?.thumbnail
                            ? "visible"
                            : "hidden",
                        }}
                        className={styles.furniture__item}
                      >
                        <img
                          src={item[15]?.thumbnail || furniture16.src}
                          alt="furniture"
                        />
                        <div className={styles.furniture__item__modal}></div>
                        <div className={styles.furniture__item__modal__content}>
                          <div>{item[15]?.name}</div>
                          <p>{t("viewMore")}</p>
                          <img src={toucherhand.src} alt="icon" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row> */}
            </>
          );
        })
      )}
      {/* <div className="center" style={{ marginTop: 20 }}>
        {productList.length >= 10 ? (
          <ButtonCusTom
            className={styles.viewMore}
            onClick={() => {
              handleViewMore();
            }}
            title={t("viewMore")}
          />
        ) : (
          ""
        )}
      </div> */}
    </>
  );
};

export default TabAll;
