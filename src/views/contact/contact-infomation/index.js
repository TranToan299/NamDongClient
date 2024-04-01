import { Button, Col, Form, Input, Row, Upload } from "antd";
import { useState } from "react";
import zalo from "../../../assets/icons/flags/zalo1.svg";
import facebook from "../../../assets/icons/iconSvg/facebookWhite.svg";
import insta from "../../../assets/icons/iconSvg/instagramWhite.svg";
import logo from "../../../assets/icons/iconSvg/logoContact.svg";
import useLocales from "../../../hooks/useLocales";
import styles from "./index.module.scss";

import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ROUTER_PATH } from "../../../constants/router-constants";
import useResponsive from "../../../hooks/useResponsive";
import { postContact } from "../../../redux/slices/ContactSlice";
import Utils from "../../../utils/utils";
const ContactInformationSection = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { isMobile } = useResponsive();
  const [arrFile, setArrFile] = useState([]);

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    let listImage;
    if (arrFile) {
      const promises = [];
      arrFile.forEach(async (item) => {
        promises.push(Utils.uploadFile(item?.originFileObj, "images"));
      });
      listImage = await Promise.all(promises);
    }

    const submitValues = {
      ...values,
      note: values.note ?? "",
      attach_url: listImage?.join(","),
    };

    await dispatch(
      postContact({
        data: submitValues,
        navigate: () => {
          router.push(ROUTER_PATH.store);
        },
      })
    );
  };
  const normFile = (e) => {
    setArrFile(e.fileList);
  };
  const { t } = useLocales();
  // validate
  const validateInput = (_, value) => {
    if (/\d/.test(value)) {
      return Promise.reject(t("validate.fullNameInValid"));
    }
    return Promise.resolve();
  };
  return (
    <Form form={form} name="form-contact" onFinish={onFinish}>
      <div className={styles.contact}>
        <Row
          gutter={[
            { md: 0, xl: 60 },
            { xs: 30, md: 30, xl: 0 },
          ]}
        >
          <Col xs={24} sm={24} md={24} xl={12} data-aos="fade-right">
            <div className={styles.header}>
              <div className={styles.header__title}>
                {t("contactInformation")}
              </div>
              <div className={styles.header__subtitle}>
                {t("sendInformation")}
              </div>
              <p>
                Quý Khách Hàng có nhu cầu cần tư vấn, vui lòng để lại thông tin
                như bên dưới, chúng tôi sẽ liên hệ ngay:
              </p>
            </div>
            <Row gutter={[30, 20]} justify="space-between">
              <Col xs={24} xl={12}>
                <div className={styles.contact__label}>{t("fullName")}</div>
                <Form.Item
                  name="fullName"
                  rules={[
                    { validator: validateInput },
                    { required: true, message: t("validate.fullNameRequired") },
                  ]}
                >
                  <Input
                    size="large"
                    className={styles.contact__input}
                    placeholder={t("fullName")}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} xl={12}>
                <div className={styles.contact__label}>{t("phoneNumber")}</div>

                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: t("validate.phoneNumberRequired"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className={styles.contact__input}
                    placeholder={t("phoneNumber")}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <div className={styles.contact__label}>
                  {t("emailCustomer")}
                </div>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: t("validate.emailInValid"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className={styles.contact__input}
                    placeholder="abc@gmail.com"
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <div className={styles.contact__label}>{t("content")}</div>
                <Form.Item name="note">
                  <TextArea
                    style={{ height: isMobile ? 230 : 80, resize: "none" }}
                    placeholder={t("anyInfo")}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Row gutter={[0, 20]} justify="space-between">
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="attach_url"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      style={{ width: "100%" }}
                    >
                      <Upload
                        beforeUpload={() => false}
                        response={false}
                        className="uploadMobile"
                        name="file"
                        status="done"
                      >
                        <Button className={styles.button__upload}>
                          <UploadOutlined />
                          Upload File (pdf, jpg.....)
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Button
                      htmlType="submit"
                      className={styles.button__sendRequest}
                    >
                      {t("sendRequest")}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} xl={12} data-aos="fade-left">
            <div className={styles.companyContact}>
              <div className={styles.companyContact__image}>
                <img src={logo.src} alt="Logo" />
              </div>
              <div className={styles.companyContact__text}>
                <div className={styles.phone}>
                  <div className={styles.phone__title}>Hotline</div>
                  <div className={styles.phone__content}>
                    <PhoneOutlined
                      style={{ fontSize: "24px", transform: "rotate(90deg)" }}
                    />
                    <a href="tel:0979765648">0979765648</a>
                  </div>
                </div>
                <div className={styles.address}>
                  <div className={styles.address__title}>{t("address")}</div>
                  <div className={styles.address__content}>
                    <EnvironmentOutlined style={{ fontSize: "24px" }} />
                    <p>Số 7, đường 14, HimLam, P. Tân Hưng, Quận 7, TPHCM</p>
                  </div>
                </div>
                <div className={styles.email}>
                  <div className={styles.email__title}>{t("email")}</div>
                  <div className={styles.email__content}>
                    <MailOutlined style={{ fontSize: "24px" }} />
                    <a href="mailto:contact@nadobranding.com" target="blank">
                      contact@nadobranding.com
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <span className={styles.follow}>Follow us</span>
                <Link href="#" className={styles.socialMedia__item}>
                  <img src={facebook.src} alt="facebook" />
                </Link>
                <Link href="#" className={styles.socialMedia__item}>
                  <img src={insta.src} alt="instagram" />
                </Link>
                <Link href="#" className={styles.socialMedia__itemlast}>
                  <img src={zalo.src} alt="zalo" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.map} data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.99553364441854!2d106.69917312760873!3d10.739991102735042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa203a50c83%3A0x44c900e42c33c6b4!2zNyDEkMaw4budbmcgc-G7kSAxNCwgS2h1IMSRw7QgdGjhu4sgSGltIExhbSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1688454791044!5m2!1svi!2s"
            width={"100%"}
            height={isMobile ? 220 : 450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Form>
  );
};

export default ContactInformationSection;
