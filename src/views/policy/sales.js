import styles from "./index.module.scss";

const SalesPolicy = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>1. Đối với sản phẩm có sẵn</div>
        <ul>
          <li>
            Quý khách vui lòng thanh toán 50% giá trị đơn hàng sau khi chọn sản
            phẩm và xác nhận đơn hàng qua website cũng như xác nhận thông tin +
            đơn hàng với nhân viên bán hàng qua điện thoại/ hoặc email.
          </li>
          <li>
            Quý khách hàng vui lòng thanh toán tiếp 50% giá trị còn lại của đơn
            hàng kèm theo phí vận chuyển (nếu có) ngay khi nhận hàng.{" "}
          </li>
          <li>
            Trong trường hợp quý khách hàng không thanh toán ngay phần giá trị
            còn lại của đơn hàng khi nhận hàng, Nam Đông sẽ thu hồi số sản phẩm
            tương ứng với số tiền chưa thanh toán và quý khách hàng vui lòng
            thanh toán phí giao hàng cho Nam Đông là 300,000đ cho các khu vực
            miễn phí giao hàng.
          </li>
          <li>
            Nam Đông sẽ tiến hành thực hiện giao hàng ngay sau khi nhận tiền
            thanh toán đợt 1 của Khách hàng cho đơn hàng đã được xác nhận.{" "}
          </li>
          <li>Thời gian giao hàng phụ thuộc vào địa điểm nhận hàng.</li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          2. Đối với sản phẩm thiết kế theo yêu cầu
        </div>
        <ul>
          <li>
            Quý khách vui lòng thanh toán cọc 30% giá trị đơn hàng thiết kế sau
            khi xác nhận đơn hàng qua website hoặc với nhân viên bán hàng qua
            điện thoại/ hoặc email.
          </li>
          <li>Sau khi nhận cọc, Nam Đông tiến hành sản xuất, giao hàng.</li>
          <li>
            Tùy thuộc vào dự án mà nhân viên bán hàng sẽ thông báo thời gian sản
            xuất, giao hàng cụ thể đến Quý khách hàng qua điện thoại/ hoặc
            email.
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>3. Lưu ý khác:</div>
        <div className={styles.title__sub}>a. Phí phát sinh khác:</div>
        <ul>
          <li>
            Các loại phí phát sinh theo quy định của ban quản lý tại địa điểm
            nhận hàng liên quan đến việc giao hàng bằng xe tải, sử dụng thang
            máy giao hàng,… quý khách hàng vui lòng thanh toán trực tiếp với ban
            quản lý tại địa điểm nhận hàng của khách hàng.
          </li>
        </ul>
        <div className={styles.title__sub}>b. Hóa đơn:</div>
        <ul>
          <li>
            Tất cả các sản phẩm, sau khi hoàn thành thanh toán và giao hàng 100%
            sẽ có hóa đơn bán hàng, thể hiện cụ thể loại sản phẩm và giá bán.
          </li>
          <li>
            Nếu quý khách hàng có nhu cầu xuất hóa đơn vui lòng thông báo cho
            Nam Đông ngay lúc đặt hàng. Hóa đơn đã xuất không thể chỉnh sửa hoặc
            hủy và xuất lại. Sau thời điểm đặt hàng 24 tiếng Nam Đông sẽ không
            nhận xuất hóa đơn. Hóa đơn xuất theo yêu cầu của quý khách hàng sẽ
            được gửi đến quý khách hàng trong vòng 7 ngày kể từ ngày giao hàng
            thành công, không tính thứ 7, chủ nhật và các ngày lễ, tết.
          </li>
        </ul>
        <div className={styles.title__sub}>c. Hủy đơn hàng và lưu kho:</div>
        <ul>
          <li>
            Sau 24 tiếng kể từ khi đơn hàng được xác nhận, quý khách hàng không
            thể thay đổi hoặc hủy đơn hàng sau khi đơn hàng đã được đóng gói và
            chuyển qua bộ phận vận chuyển.
          </li>
          <li>
            Thời gian lưu kho cho 1 đơn hàng tối đa là 30 ngày kể từ ngày đặt
            hàng. Qúy khách hàng có nhu cầu lưu kho trên 7 ngày vui lòng thanh
            toán trước 100% giá trị đơn hàng. Nếu quý khách hàng hủy đơn hàng,
            quý khách hàng vui lòng thanh toán phí lưu kho cho Nam Đông là 10%
            giá trị đơn hàng.
          </li>
          <li>
            Quyết định của Nam Đông là quyết định cuối cùng và có thể thay đổi
            mà không cần thông báo trước.
          </li>
        </ul>
        <div className={styles.title}>Lưu ý bảo quản:</div>
        <ul>
          <li>
            Trong 6 tuần đầu tiên, sản phẩm gỗ sẽ hấp thụ ánh sáng, thay đổi
            tone màu của gỗ, cần giữ bề mặt gỗ tránh bị tác động bởi các vật thể
            bất kỳ, tránh tạo thành các vết bám bề mặt gỗ vĩnh viễn.
          </li>
          <li>
            Vệ sinh bề mặt gỗ bằng khăn ẩm, sau đó dùng vải khô vệ sinh lần cuối
            để bảo đảm độ bền của gỗ.
          </li>
        </ul>
      </div>
    </>
  );
};

export default SalesPolicy;
