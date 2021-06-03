import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.scss";

const Nav = (props) => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActive(active);
  }, [active]);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={props.onTop ? styles.root : styles.rootScrolled}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.navLeft}>home</a>
        </Link>
        <div>
          <p className={styles.menu} onClick={() => handleMenu()}>
            menu
          </p>
          <ul className={styles.navRight}>
            {props.categories.map((category, index) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a
                      onClick={() => {
                        setActive(index);
                      }}
                      className={
                        index === active
                          ? styles.categoryActive
                          : styles.category
                      }
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.menuDropdown}>
          <ul>
            {props.categories.map((category, index) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a
                      onClick={() => {
                        setActive(index);
                      }}
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
