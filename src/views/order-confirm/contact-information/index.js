import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Col, Form, Input, Row } from "antd";
import useLocales from "../../../hooks/useLocales";
import TextArea from "antd/lib/input/TextArea";
import ButtonCusTom from "../../../component/ButtonCustom";
import useResponsive from "../../../hooks/useResponsive";
import { useRouter } from "next/router";
import { ROUTER_PATH } from "../../../constants/router-constants";
import { dispatch, useSelector } from "../../../redux/store";
import { notificationCustom } from "../../../utils/notification";
import { postOrder, resetCart } from "../../../redux/slices/ProductSlice";
import { OBJECT_TYPE } from "../../../constants/app-constants";

const ContactInformation = () => {
  const { t } = useLocales();
  const [form] = Form.useForm();
  const router = useRouter();
  const { isMobile } = useResponsive();
  const [disable, setDisabled] = useState(true);
  const { cartProduct } = useSelector((state) => state.product);

  const onFinish = async (values) => {
    console.log(cartProduct);
    console.log(cartProduct.length);
    if (cartProduct.length === 0) {
      notificationCustom("error", t("emptyCart"));
    } else {
      const submitValues = [
        {
          id: 0,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          address: values.address,
          note: values.note,
          productList: cartProduct?.map((item, index) => {
            return {
              product_id: cartProduct[index].id,
              qty: cartProduct[index].quantity,
            };
          }),
        },
      ];
      await dispatch(
        postOrder({
          submitValues,
          navigate: () => {
            router.push(ROUTER_PATH.storeGeneral);
          },
        })
      );
      await dispatch(resetCart());
    }
  };

  return (
    <div className={styles.contact}>
      <Form form={form} name="form-contact" onFinish={onFinish}>
        <h5 xs={24} sm={24} md={24} xl={24} className={styles.contact__title}>
          {t("contactInfor")}
        </h5>
        <Row
          gutter={[
            { md: 0, xl: 40 },
            { xs: 20, md: 20, xl: 0 },
          ]}
        >
          <Col xs={24} sm={24} md={24} xl={12}>
            <Row gutter={[30, 20]} justify="space-between">
              <Col xs={24} xl={12}>
                <div className={styles.contact__label}>{t("fullName")}</div>
                <Form.Item
                  name="fullName"
                  rules={[
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
                    {
                      required: true,
                      message: t("validate.emailRequired"),
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
                <div className={styles.contact__label}>
                  {t("addressContact")}
                </div>

                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: t("validate.addressContactRequired"),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    className={styles.contact__input}
                    placeholder={t("addressContact")}
                  />
                </Form.Item>
              </Col>
              {isMobile ? (
                ""
              ) : (
                <Col xs={24}>
                  <Row gutter={[30, 20]}>
                    <Col>
                      <ButtonCusTom
                        onClick={() => {
                          router.push(ROUTER_PATH.storeGeneral);
                        }}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                        }}
                        title={t("continueShopping")}
                      />
                    </Col>
                    <Col>
                      <ButtonCusTom htmlType="submit" title={t("contact")} />
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} xl={12}>
            <div className={styles.contact__label}>{t("note")}</div>
            <Form.Item name="note">
              <TextArea
                placeholder={t("anyInfo")}
                style={{ height: isMobile ? "220px" : "285px" }}
              />
            </Form.Item>
          </Col>
          {isMobile ? (
            <Col xs={24}>
              <Row gutter={[10, 20]}>
                <Col xs={12}>
                  <ButtonCusTom
                    onClick={() => {
                      router.push(ROUTER_PATH.storeGeneral);
                    }}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      width: "100%",
                    }}
                    title={t("continueShopping")}
                  />
                </Col>
                <Col xs={12}>
                  <ButtonCusTom
                    htmlType="submit"
                    style={{
                      width: "100%",
                    }}
                    title={t("contact")}
                  />
                </Col>
              </Row>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Form>
    </div>
  );
};

export default ContactInformation;
