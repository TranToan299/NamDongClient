import { Button } from "antd";
import React from "react";

const ButtonCusTom = (props) => {
  const { title, icon, style, onClick, className, ...other } = props;
  return (
    <>
      {icon ? (
        <Button
          {...other}
          className={className}
          onClick={onClick}
          style={{
            display: "flex",
            borderColor: "#0050B5",
            backgroundColor: style?.backgroundColor || "#0050B5",
            color: style?.color || "white",
            width: style?.width || 260,
            height: style?.height || 60,
            justifyContent: "space-between",
            alignItems: "center",
             fontWeight: 400,
              fontSize: "18px",
            ...style,
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "5px",
              fontWeight: 400,
              fontSize: "18px",
              width: "100%",
              ...style,
            }}
          > */}
            <p style={{
              marginLeft: "5px",
            }}>
              {title}
              </p>
            <div style={{ marginRight: "5px" }}>{icon}</div>
          {/* </div> */}
        </Button>
      ) : (
        <Button
          {...other}
          className={className}
          onClick={onClick}
          style={{
            borderColor: "#0050B5",
            display: "flex",
            backgroundColor: style?.backgroundColor || "#0050B5",
            color: style?.color || "white",
            width: style?.width || 164,
            height: style?.height || 40,
            fontWeight: 400,
            fontSize: style?.fontSize || "14px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default ButtonCusTom;
