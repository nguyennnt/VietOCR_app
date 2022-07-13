import {
  FaSearchLocation,
  FaPhoneAlt,
  FaMailBulk,
  FaFacebook,
} from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="section">
      <div className="footer-link-items">
        <h2 className="contact-us">Liên hệ với chúng tôi</h2>
        <div className="contact">
          <div>
            <a
              href="https://www.facebook.com/thainguyen.2711/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <p>Nguyễn Ngọc Thái Nguyên</p>
          </div>
          <div>
            <a
              href="https://www.facebook.com/thainguyen.2711/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <p>Nguyễn Đức Phương Nguyên</p>
          </div>
          <div>
            <FaSearchLocation />
            <p> Khu phố 6, phường Linh Trung, Thủ Đức </p>
          </div>
          <div>
            <FaMailBulk />
            <p> nguyennnt.uit@gmail.com </p>
          </div>
          <div>
            <FaPhoneAlt />
            <p> 037.678.4914 </p>
          </div>
        </div>
      </div>
      <div className="website-rights">© Bản quyền thuộc về UIT - 2022</div>
    </footer>
  );
};

export default Footer;
