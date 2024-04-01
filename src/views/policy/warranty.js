import styles from "./index.module.scss";

const WarrantyPolicy = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>1. Quy trình bảo hành</div>
        <div className={styles.title__sub}>Bước 1: Gọi thông báo bảo hành</div>
        <ul>
          <li>Hotline Nam Đông: 0979 765 648.</li>
          <li>Hoặc Liên hệ qua Fanpage:</li>
          <li>Hoặc Email: contact@nadobranding.com</li>
        </ul>
        <div className={styles.title__sub}>Bước 2: Cung cấp thông tin:</div>
        <ul>
          <li>
            Khách hàng cung cấp các thông tin cần thiết gồm:
            <ul className={styles.subList}>
              <li>Thông tin cá nhân</li>
              <li>
                Thông tin đơn hàng hoặc hóa đơn mua hàng được xuất qua email
                hoặc cả hai thông tin
              </li>
            </ul>
          </li>
          <li>
            Nhân viên chăm sóc khách hàng ghi nhận thông tin và thông báo sẽ có
            nhân viên kỹ thuật xuống kiểm tra sản phẩm.
          </li>
        </ul>
        <div className={styles.title__sub}>Bước 3:</div>
        <ul>
          <li>
            Nhân viên kỹ thuật gọi điện thông báo thời gian xuống bảo hành.
          </li>
          <li>
            Nếu lỗi đơn giản: Đội ngũ bảo hành thực hiện sửa chữa/ thay thế tại
            địa chỉ kiểm tra.
          </li>
          <li>
            Nếu lỗi phức tạp: Đội ngũ bảo hành tiếp nhận sản phẩm, chuyển cho
            xưởng và xác nhận thời gian trả sản phẩm cho khách hàng cụ thể.
          </li>
          <li>
            Nhân viên kỹ thuật kí xác nhận và gửi kèm một (01) biên bản kiểm tra
            sản phẩm cho khách hàng, đồng thời lưu giữ lại một bản đem về công
            ty.
          </li>
        </ul>
        <div className={styles.title}>2. Điều kiện bảo hành</div>
        <ul>
          <li>
            Sản phẩm phải có Phiếu bảo hành nguyên vẹn/ xác nhận thông tin bảo
            hành trên hệ thống và còn trong thời hạn bảo hành.
          </li>
          <li>Lỗi, hư hỏng được đội ngũ kỹ thuật xác định từ nhà sản xuất.</li>
          <li>
            Nam Đông bảo hành miễn phí cho các sản phẩm bị hư hỏng do lỗi chất
            liệu (không bao gồm yếu tố màu sắc do mỗi đợt sản xuất màu gỗ, vân
            gỗ và mắt gỗ có thể chênh lệch đôi chút vì đặc tính tự nhiên của
            gỗ), lỗi kỹ thuật và lỗi lắp đặt từ phía Nam Đông.
          </li>
        </ul>
        <div className={styles.title}>
          3. Sản phẩm không đủ điều kiện bảo hành
        </div>
        <div className={styles.title__sub}>
          Nam Đông không bảo hành cho các trường hợp sau:
        </div>
        <ul>
          <li>
            Thiệt hại do các trường hợp bất khả kháng (như thiên tai, lũ lụt,
            hỏa hoạn…).
          </li>
          <li>
            Qúy khách hàng tự vận chuyển hoặc sử dụng đơn vị vận chuyển ngoài,
            tự lắp đặt, sửa chữa và thay đổi kết cấu ban đầu của sản phẩm.
          </li>
          <li>
            Quý khách hàng sử dụng sản phẩm không đúng cách theo hướng dẫn sử
            dụng: để vật nặng vượt quá khả năng chịu lực của sản phẩm, sử dụng
            sản phẩm không đúng công năng như nhảy mạnh lên sản phẩm,..., để vật
            nóng trực tiếp lên sản phẩm, vệ sinh dùng hóa chất,…
          </li>
          <li>
            Sản phẩm bị gãy, vỡ, trầy xước, biến dạng cơ học do lỗi của người sử
            dụng hoặc do các tác động ngoại lực, ngoại cảnh; hoặc sản phẩm bị
            ngập nước gây nở, cong vênh; sản phẩm bị tác động của hơi nước, độ
            ẩm cao hoặc nhiệt độ cao,…
          </li>
          <li>
            Những hao mòn trong quá trình sử dụng của quý khách hàng theo thời
            gian như phai màu tự nhiên, oxy hóa của bề mặt sản phẩm, xù lông
            vải, xẹp lún,…
          </li>
          <li>
            Các sản phẩm thuộc chương trình giảm giá không còn được bán trên
            website.
          </li>
          <li>
            Sản phẩm đã được tự ý sửa chữa, thay thế phụ kiện, không phải do đội
            ngũ bảo hành của Nam Đông thực hiện.
          </li>
        </ul>
        <div className={styles.title}>4. Điều kiện bảo trì:</div>
        <ul>
          <li>
            Đối với các sản phẩm không nằm trong phạm vi bảo hành hoặc hết thời
            hạn bảo hành, Nam Đông vẫn nhận bảo trì trọn đời sản phẩm với chi
            phí hợp lý tùy theo tình trạng sản phẩm.
          </li>
        </ul>
        <div className={styles.title}>5. Lưu ý khác:</div>
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

export default WarrantyPolicy;
