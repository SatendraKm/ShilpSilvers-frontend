const Footer = () => {
  return (
    <div className=" bg-white text-slate-600 flex justify-evenly  ">
      <div className="m-8 ">
        <ul className="company-items">
          <h2 className=" font-bold">COMPANY</h2>
          <li className="p-2">About us</li>
          <li className="p-2">Team</li>
          <li className="p-2">Careers</li>
          <li className="p-2">Blog</li>
          <li className="p-2">Corporate</li>
          <li className="p-2">Instamart</li>
          <li className="p-2">Genie</li>
        </ul>
      </div>
      <div className="m-8">
        <ul className="contact-items">
          <h2 className="font-bold">CONTACT</h2>
          <li className="p-2">Help & Support</li>
          <li className="p-2">Partner with us</li>
        </ul>
      </div>
      <div className="m-8">
        <ul className="legal-items">
          <h2 className="font-bold">LEGAL</h2>
          <li className="p-2">Terms & Conditions</li>
          <li className="p-2">Refund & Cancellation</li>
          <li className="p-2">Privacy Policy</li>
          <li className="p-2">Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
