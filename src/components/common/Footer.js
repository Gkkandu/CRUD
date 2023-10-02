const Footer = () => {
    const link = "https://www.facebook.com/neeraj.maddheshiya.378";
    const target = "_blank";
    return (
        <div className="container">
            Copyright © <small>{new Date().getFullYear()}</small> Gaurav maddheshiya{" "}
            <a href={link} target={target}>
                Helpline desk
            </a>
       
        </div>
    );
};
export default Footer;