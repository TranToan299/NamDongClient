import React, { useState } from "react";
import styles from "./index.module.scss";
import Layout from "../../layouts";
import { Breadcrumb, Button, Collapse } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import useLocales from "../../hooks/useLocales";
import Banner from "../../component/Banner";
import banner1 from "../../assets/images/question-page/banner.png";
import PageWrapper from "../../hocs/page-wrapper";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
const { Panel } = Collapse;

const FrequentlyQuestion = () => {
  const { isMobile } = useResponsive();
  const [arrKey, setArrKey] = useState([]);
  const { t } = useLocales();
  const stylePanel = {
    padding: 10,
    marginBottom: 20,
  };

  return (
    <PageWrapper title={t("frequencyQuestion")}>
      <Banner
        srcBanner={banner1.src}
        title={t("frequencyQuestion")}
        breadcrumb={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link href="/">{t("home")}</Link>
            </Breadcrumb.Item>
            {isMobile ? (
              <Breadcrumb.Item>...</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>{t("supportCustomer")}</Breadcrumb.Item>
            )}

            <Breadcrumb.Item>{t("frequencyQuestion")}</Breadcrumb.Item>
          </Breadcrumb>
        }
      />
      <div className="containerCustom">
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.header__title}>{t("summaryQuestion")}</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p> */}
        </div>
        <Collapse
          
          onChange={(key) => {
            setArrKey(key);
          }}
          className={styles.panel}
          bordered={false}
          expandIconPosition="end"
          expandIcon={({ isActive }) => {
            return isActive ? (
              <div>
                <Button
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <MinusOutlined
                    style={{
                      fontSize: "20px",
                      transform: "translateX(-2px)",
                      color: "#0050B5",
                    }}
                  />
                </Button>
              </div>
            ) : (
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <PlusOutlined
                  style={{
                    fontSize: "20px",
                    marginLeft: 0,
                    transform: "translateX(-2px)",
                  }}
                />
              </Button>
            );
          }}
        >
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("1") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question1.title")}
              </div>
            }
            key="1"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <p>{t("questionPage.question1.ul")}</p>
              <ul>
                <li>{t("questionPage.question1.li1")}</li>
                <li>{t("questionPage.question1.li2")}</li>
                <li>{t("questionPage.question1.li3")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("2") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question2.title")}
              </div>
            }
            key="2"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question2.li1")}</li>
                <li>{t("questionPage.question2.li2")}</li>
                <li>{t("questionPage.question2.li3")}</li>
                <li>{t("questionPage.question2.li4")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("3") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question3.title")}
              </div>
            }
            key="3"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question3.li1")}</li>
                <li>{t("questionPage.question3.li2")}</li>
                <li>{t("questionPage.question3.li3")}</li>
                <li>{t("questionPage.question3.li4")}</li>
                <li>{t("questionPage.question3.li5")}</li>
                <li>{t("questionPage.question3.li6")}</li>
                <li>{t("questionPage.question3.li7")}</li>
                <li>{t("questionPage.question3.li8")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("4") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question4.title")}
              </div>
            }
            key="4"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question4.li1")}</li>
                <li>{t("questionPage.question4.li2")}</li>
                <li>{t("questionPage.question4.li3")}</li>
                <li>{t("questionPage.question4.li4")}</li>
                <li>{t("questionPage.question4.li5")}</li>
                <li>{t("questionPage.question4.li6")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("5") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question5.title")}
              </div>
            }
            key="5"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>
                  <p>{t("questionPage.question5.li1.title")}</p>
                  <ul className={styles.subList}>
                    <li>{t("questionPage.question5.li1.subLi1")}</li>
                    <li>{t("questionPage.question5.li1.subLi2")}</li>
                    <li>{t("questionPage.question5.li1.subLi3")}</li>
                  </ul>
                </li>
                <li>{t("questionPage.question5.li2")}</li>
                <li>{t("questionPage.question5.li3")}</li>
                <li>{t("questionPage.question5.li4")}</li>
                <li>{t("questionPage.question5.li5")}</li>
                <li>{t("questionPage.question5.li6")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("6") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question6.title")}
              </div>
            }
            key="6"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question6.li1")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("7") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question7.title")}
              </div>
            }
            key="7"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question7.li1")}</li>
                <li>{t("questionPage.question7.li2")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("8") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question8.title")}
              </div>
            }
            key="8"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question8.li1")}</li>
                <li>
                  <p>{t("questionPage.question8.li2.title")}</p>
                  <ul className={styles.subList}>
                    <li>{t("questionPage.question8.li2.subLi1")}</li>
                    <li>{t("questionPage.question8.li2.subLi2")}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("9") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question9.title")}
              </div>
            }
            key="9"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question9.li1")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("10") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question10.title")}
              </div>
            }
            key="10"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question10.li1")}</li>
                <li>{t("questionPage.question10.li2")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("11") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question11.title")}
              </div>
            }
            key="11"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>
                  <p>{t("questionPage.question11.li1.title")}</p>
                  <ul className={styles.subList}>
                    <li>{t("questionPage.question11.li1.subLi1")}</li>
                    <li>
                      <p>{t("questionPage.question11.li1.subLi2")}</p>
                      <ul className={styles.subList__desc}>
                        <li>{t("questionPage.question11.li1.desc1sub2")}</li>
                        <li>{t("questionPage.question11.li1.desc2sub2")}</li>
                        <li>{t("questionPage.question11.li1.desc3sub2")}</li>
                        <li>{t("questionPage.question11.li1.desc4sub2")}</li>
                        <li>{t("questionPage.question11.li1.desc5sub2")}</li>
                        <li>{t("questionPage.question11.li1.desc6sub2")}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("12") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question12.title")}
              </div>
            }
            key="12"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question12.li1")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-right"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("13") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question13.title")}
              </div>
            }
            key="13"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question13.li1")}</li>
                <li>{t("questionPage.question13.li2")}</li>
                <li>{t("questionPage.question13.li3")}</li>
              </ul>
            </div>
          </Panel>
          <Panel
            data-aos="fade-left"
            header={
              <div
                className={`${styles.panel__title} ${
                  arrKey.includes("14") ? styles.activePanel : ""
                }`}
              >
                <span>
                  <QuestionCircleOutlined style={{ fontSize: "24px" }} />
                </span>
                {t("questionPage.question14.title")}
              </div>
            }
            key="14"
            style={stylePanel}
          >
            <div className={styles.panel__content}>
              <ul>
                <li>{t("questionPage.question14.li1")}</li>
                <li>{t("questionPage.question14.li2")}</li>
                <li>{t("questionPage.question14.li3")}</li>
                <li>{t("questionPage.question14.li4")}</li>
                <li>{t("questionPage.question14.li5")}</li>
                <li>{t("questionPage.question14.li6")}</li>
                <li>{t("questionPage.question14.li7")}</li>
                <li>{t("questionPage.question14.li8")}</li>
              </ul>
            </div>
          </Panel>
        </Collapse>
      </div>
    </PageWrapper>
  );
};
FrequentlyQuestion.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default FrequentlyQuestion;
