import styles from "./index.module.scss";

const ReturnPolicy = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>1. Thời gian đổi – trả hàng</div>

        <ul>
          <li>
            Khi Quý khách hàng nhận sản phẩm, vui lòng đồng kiểm cùng đội ngũ
            giao hàng, nếu có bất kì lỗi/ không đúng với yêu cầu đặt hàng, Quý
            khách hàng thông báo và xác nhận lỗi vào Biên bản giao nhận hàng hóa
            để được đổi hàng.
          </li>
          <li>
            Trong 24 giờ kể từ thời gian ký nhận hàng hóa, nếu sản phẩm có phát
            sinh lỗi từ nhà sản xuất, Nam Đông sẽ tiến hành sửa chữa/thay thế
            sản phẩm mới cho Quý khách hàng, tùy thuộc vào mức độ lỗi.
          </li>
        </ul>
        <div className={styles.title}>2. Điều kiện đổi – trả hàng</div>
        <ul>
          <li>
            Sản phẩm có lỗi sản xuất (không bao gồm yếu tố màu sắc do mỗi đợt
            sản xuất màu gỗ, vân gỗ và mắt gỗ có thể chênh lệch đôi chút vì đặc
            tính tự nhiên của gỗ).
          </li>
          <li>
            Sản phẩm không đúng thông số kỹ thuật/mẫu mã như được công bố.
          </li>
          <li>
            Sản phẩm không đúng với yêu cầu đặt hàng từ Quý khách hàng. (Mẫu mã/
            Loại gỗ/ Thiết kế).
          </li>
        </ul>
        <div className={styles.title}>3. Chi phí đổi – trả hàng</div>
        <ul>
          <li>
            Trong trường hợp được quy định tại mục Điều kiện đổi – trả hàng, và
            trong thời gian quy định, Quý khách hàng sẽ được đổi trả hoàn toàn
            miễn phí.
          </li>
        </ul>
        <div className={styles.title__sub}>3.1 Đối với sản phẩm có sẵn</div>
        <ul>
          <li>
            Trong trường hợp sản phẩm được giao KHÔNG ĐÚNG yêu cầu đặt hàng (màu
            sắc, mẫu mã, kích thước), khách hàng sẽ được đổi hàng miễn phí.
          </li>
          <li>
            Trong trường hợp sản phẩm được giao ĐÚNG yêu cầu đặt hàng, nhưng
            thông số kỹ thuật không tương thích với không gian sống của Quý
            khách hàng, Nam Đông hỗ trợ đổi sản phẩm khác bằng giá trị hoặc có
            giá trị cao hơn sản phẩm đã giao Quý khách hàng vui lòng chịu chi
            phí vận chuyển, bốc xếp và lắp đặt.
          </li>
          <li>
            Trong trường hợp khách hàng đặt mua Online hoặc tại cửa hàng, đã cọc
            tiền nhưng chưa nhận hàng:
            <ul className={styles.subList}>
              <li>
                Trước khi giao hàng, khách yêu cầu đổi qua sản phẩm khác: Nếu
                sản phẩm có sẵn tại kho, cửa hàng ; quý khách hàng sẽ được hỗ
                trợ đổi hàng theo yêu cầu, quý khách hàng mọi chi phí phát sinh
                (nếu có).
              </li>
              <li>
                Trước khi goa hàng, khách yêu cầu hủy đơn hàng , Nam Đông sẽ
                khấu trừ 25% tổng giá trị đơn hàng và hoàn phần còn lại cho
                khách hàng.
              </li>
              <li>
                Trong ngày giao hàng, khi nhân viên Nam Đông đang đi giao hàng,
                quý khách hàng yêu cầu hủy đơn hàng , không nhận sẽ không được
                hoàn lại tiền sản phẩm. (bao gồm cả tiền cọc, tiền thanh toán
                50% hay 100%).
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.title__sub}>
          3.2 Đối với sản phẩm thiết kế theo yêu cầu
        </div>
        <ul>
          <li>Nam Đông không áp dụng chính sách đổi, trả hàng.</li>
          <li>
            Trường hợp khách hàng đặt cọc sản xuất theo yêu cầu, Quý khách hàng
            yêu cầu hủy đơn, sẽ không được hoàn lại cọc.
          </li>
        </ul>
        <div className={styles.title}>4. Lưu ý khác:</div>
        <ul>
          <li>
            Sau 24 giờ tính từ thời điểm giao hàng thành công, Nam Đông sẽ áp
            dụng sang chính sách bảo hành cho các sản phẩm bị hư hỏng do lỗi
            chất liệu, lỗi kỹ thuật và lỗi lắp đặt từ phía Nam Đông, không áp
            dụng đổi sang sản phẩm khác.
          </li>
          <li>
            Sản phẩm được mua trong thời gian khuyến mãi và không áp dụng chính
            sách đổi/trả sản phẩm.
          </li>
          <li>
            Các sản phẩm được quy định cụ thể không cho phép đổi/trả hàng.
          </li>
          <li>
            Quyết định của Nam Đông là quyết định cuối cùng và có thể thay đổi
            mà không cần thông báo trước.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReturnPolicy;
