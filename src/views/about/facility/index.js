import { Button, Col, Collapse, Row } from "antd";
import React from "react";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";
import {
  ArrowRightOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ButtonCusTom from "../../../component/ButtonCustom";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../constants/router-constants";

const { Panel } = Collapse;
const stylePanel = {
  border: "1px solid #0050B5",
  padding: 10,
  marginBottom: 20,
};
const stylePanelNotMB = {
  border: "1px solid #0050B5",
  padding: 10,
  };
const Facility = () => {
  const router = useRouter();
  const { t } = useLocales();
  return (
    <div className={`containerCustom ${styles.facilityContainer}`}>
      <Row className={styles.facility}>
        <Col xs={24}>
          <div className={styles.facility__header} data-aos="fade-up">
            <div className="title">XƯỞNG SẢN XUẤT</div>
            <p>
              Chúng tôi có xưởng chính tại TPHCM, và các xưởng liên kết tại các
              khu vực miền Bắc, Trung.
            </p>
          </div>
        </Col>
        <Col xs={24}>
          <Row gutter={[30, 0]}>
            <Col xs={24} sm={24} md={24} xl={12} className={styles.panel} data-aos="fade-right">
              <Collapse
                bordered={false}
                className="collapseCustom"
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                expandIcon={({ isActive }) => {
                  return isActive ? (
                    <div>
                      <Button
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#0050B5",
                        }}
                      >
                        <MinusOutlined
                          style={{
                            color: "white",
                            marginLeft: 0,
                            transform: "translateX(-2px)",
                          }}
                        />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#0050B5",
                      }}
                    >
                      <PlusOutlined
                        style={{
                          color: "white",
                          marginLeft: 0,
                          transform: "translateX(-2px)",
                        }}
                      />
                    </Button>
                  );
                }}
              >
                <Panel
                  header={
                    <div style={{ fontSize: 22, fontWeight: 600 }}>
                      XƯỞNG 1 - TPHCM
                    </div>
                  }
                  key="1"
                  style={stylePanel}
                >
                  <div className={styles.panel__content}>
                    <p className={styles.panel__content__address}>
                      673 Quách Điêu , Ấp 4, Xã Vĩnh Lộc A, Hóc Môn
                      <br />
                      <span style={{ textDecoration: "underline" }}>
                        mailto:contact@nadobranding.com
                      </span>
                    </p>
                    <div style={{ marginTop: 20 }}>
                      <ButtonCusTom
                        onClick={() => {
                          router.push(ROUTER_PATH.contact);
                        }}
                        title={t("contact")}
                        style={{
                          width: 131,
                          height: 40,
                        }}
                      />
                    </div>
                  </div>
                </Panel>
                <Panel
                  header={
                    <div style={{ fontSize: 22, fontWeight: 600 }}>
                      XƯỞNG 2 - Đà Nẵng
                    </div>
                  }
                  key="2"
                  style={stylePanel}
                >
                  <div className={styles.panel__content}>
                    <p className={styles.panel__content__address}>
                      Cẩm Lệ, Đà Nẵng
                      <br />
                      <span style={{ textDecoration: "underline" }}>
                        mailto:contact@nadobranding.com
                      </span>
                    </p>
                    <div style={{ marginTop: 20 }}>
                      <ButtonCusTom
                        onClick={() => {
                          router.push(ROUTER_PATH.contact);
                        }}
                        title={t("contact")}
                        style={{
                          width: 131,
                          height: 40,
                        }}
                      />
                    </div>
                  </div>
                </Panel>
                <Panel
                  header={
                    <div style={{ fontSize: 22, fontWeight: 600 }}>
                      XƯỞNG 3 - Hà Nội
                    </div>
                  }
                  key="3"
                  style={stylePanelNotMB}
                >
                  <div className={styles.panel__content}>
                    <p className={styles.panel__content__address}>
                      Thanh Trì, Hà Nội
                      <br />
                      <span style={{ textDecoration: "underline" }}>
                        mailto:contact@nadobranding.com
                      </span>
                    </p>
                    <div style={{ marginTop: 20 }}>
                      <ButtonCusTom
                        onClick={() => {
                          router.push(ROUTER_PATH.contact);
                        }}
                        title={t("contact")}
                        style={{
                          width: 131,
                          height: 40,
                        }}
                      />
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </Col>
            <Col xs={24} sm={24} md={24} xl={12}>
              <div data-aos="fade-left" style={{height: "100%"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.99553364441854!2d106.69917312760873!3d10.739991102735042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa203a50c83%3A0x44c900e42c33c6b4!2zNyDEkMaw4budbmcgc-G7kSAxNCwgS2h1IMSRw7QgdGjhu4sgSGltIExhbSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1688454791044!5m2!1svi!2s"
                  width={"100%"}
                  height={295}
                  style={{ border: 0 ,height: "100%"}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Facility;
