import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="Detail">
        <ul className="Product">
          <li className="footer-pro">Product</li>
         <li><a href="#" className="footer-more">Performance Management</a></li>
         <li><a href="#" className="footer-more">Attendance Management </a> </li>
         <li><a href="#" className="footer-more">Leave Management</a> </li>
         <li><a href="#" className="footer-more">Payroll Software</a> </li>
         <li><a href="#" className="footer-more">HR Software</a> </li>
        </ul>

        <ul className="Product">
          <li className="footer-pro">HR & Payroll Administration </li>
         <li><a href="#" className="footer-more"> What is Payroll?</a> </li>
         <li><a href="#" className="footer-more"> What is Statutory Compliance?</a> </li>
         <li><a href="#" className="footer-more">Guide to Leave Management </a> </li>
         <li><a href="#" className="footer-more"> Guide to Attendance Management</a> </li>
         <li><a href="#" className="footer-more"> Guide to Performance Management</a> </li>
        </ul>

        <ul className="Product">
          <li className="footer-pro">Resources </li>
         <li><a href="#" className="footer-more">Podcasts </a> </li>
         <li><a href="#" className="footer-more">Webinars </a> </li>
         <li><a href="#" className="footer-more"> Templates</a> </li>
         <li><a href="#" className="footer-more"> Guides</a> </li>
         <li><a href="#" className="footer-more">Blogs </a> </li>
        </ul>

        <ul className="Product">
          <li className="footer-pro">Company </li>
         <li><a href="#" className="footer-more">Guide to Attendance Management</a> </li>
         <li><a href="#" className="footer-more">Guide to Leave Management</a> </li>
         <li><a href="#" className="footer-more">greytHR Customers</a> </li>
         <li><a href="#" className="footer-more">Blogs</a> </li>
         <li><a href="#" className="footer-more">What is HRMS?</a> </li>
        </ul>

        <ul className="Product">
          <li className="footer-pro">greytHR Customers </li>
         <li><a href="#" className="footer-more">Videos</a> </li>
         <li><a href="#" className="footer-more">Login</a> </li>
         <li><a href="#" className="footer-more">Company</a> </li>
         <li><a href="#" className="footer-more">Templates</a> </li>
          <li ><a href="" className="footer-more">Guides</a> </li>
        </ul>
      </div>
      <div className="Media">
        <div className="foot-name">
          <div className="">© 2025 Greytip Software Pvt. Ltd.</div>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
        </div>
        <div className="foot-country">
          <div className="open-cou"></div>
        </div>
        <div className="foot-media"></div>
      </div>
    </footer>
  );
};

export default Footer;
