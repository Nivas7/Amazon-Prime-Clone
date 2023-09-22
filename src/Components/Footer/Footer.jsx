import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-main">
          <img src="/src/assets/web_footer_logo.png" alt="" />
          <p>
            <span>
              <a>Terms and Privacy Notice</a>
            </span>
            <span>
              <a>Send us feedback</a>
            </span>
            <span>
              <a>Help</a>
            </span>
          </p>
          <p>
            <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;