import { useEffect, useState } from "react";
import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => {
  const [onTop, setOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    window.scrollY !== 0 ? setOnTop(false) : setOnTop(true);
  };
  return (
    <div className="layout">
      <Nav categories={categories} onTop={onTop} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
