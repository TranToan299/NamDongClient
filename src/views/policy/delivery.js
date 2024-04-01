import styles from "./index.module.scss";

const DeliveryPolicy = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>1. Thời gian vận chuyển hàng hóa</div>
        <table className={styles.table}>
          <thead>
            <td colSpan={2}>Khu vực</td>
            <td>Thời gian giao hàng</td>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3} className={styles.area}>
                Khu vực miền Nam
              </td>
              <td>Nội thành HCM</td>
              <td>1-2 ngày</td>
            </tr>
            <tr>
              <td>Ngoại thành HCM: Vũng Tàu, Bình Phước</td>
              <td>3-5 ngày</td>
            </tr>
            <tr>
              <td>
                Ngoại thành HCM và các tỉnh lân cận (trừ khu vực Vũng Tàu, Bình
                Phước)
              </td>
              <td>Sẽ thông báo cụ thể đến người mua hàng</td>
            </tr>
            <tr>
              <td className={styles.area}>Khu vực Miền Trung, Miền Bắc</td>
              <td>Khu vực các tỉnh/thành phố khác</td>

              <td>Sẽ thông báo cụ thể đến người mua hàng</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            Nhân viên giao nhận của Nam Đông sẽ gọi và thông báo và chốt thời
            gian giao hàng với quý khách hàng.
          </li>
          <li>
            Qúy khách hàng vui lòng sắp xếp thời gian nhận hàng theo lịch nhận
            hàng đã xác nhận với Nam Đông. Nếu quý khách hàng có việc bận đột
            xuất không thể nhận hàng theo lịch nhận hàng đã xác nhận, quý khách
            hàng vui lòng thông báo cho Nam Đông ít nhất 24 tiếng trước khi giao
            hàng. Nam Đông sẽ sắp xếp lại lịch nhận hàng tối đa là 1 lần, sau đó
            nếu quý khách hàng tiếp tục dời lịch nhận hàng Nam Đông sẽ không thể
            giao hàng và xin phép được hủy đơn hàng của quý khách hàng.
          </li>
        </ul>
        <div className={styles.title}>2. Chính sách giá:</div>
        <ul>
          <li>
            Miễn phí giao hàng & lắp đặt tại tất cả quận huyện thuộc TP. HCM,
            TP. Thủ Đức, trong vòng 3 ngày từ 9h00 đến 16h00 từ thứ 2 đến chủ
            nhật, không tính các ngày lễ, tết.
          </li>
          <li>Các khu vực khác: sẽ thông báo mức phí cho từng đơn hàng. </li>
        </ul>
        <div className={styles.title}>3. Chính sách lắp đặt:</div>
        <ul>
          <li>
            Đối với từng sản phẩm và dự án – Đội ngũ bán hàng sẽ thông báo thời
            gian lắp đặt và báo giá cho Quý khách hàng.
          </li>
        </ul>
        <div className={styles.title}>4. Lưu ý khác:</div>
        <ul>
          <li>
            Quyết định của Nam Đông là quyết định cuối cùng và có thể thay đổi
            mà không cần thông báo trước.
          </li>
        </ul>
      </div>
    </>
  );
};

export default DeliveryPolicy;
