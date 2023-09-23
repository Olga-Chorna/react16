import React, { useContext, useEffect, useId, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../context';
import classNames from 'classnames';

const NavMenu = () => {
  const { state: { isMenuOpen }, openNavMenu, closeNavMenu } = useContext(MenuContext);
  const menu = classNames(styles.container, { [styles.open]: isMenuOpen });

  // const navRef = useRef(null);
  // console.log(navRef);

  const id = useId();

  useEffect(() => {

    const handlerClick = ({ target }) => {
      // if (isMenuOpen && !document.getElementById('navMenu').contains(target)) {//bad practice!
      //   closeNavMenu();
      // }
      // if (isMenuOpen && !navRef.current.contains(target)) {//good practice
      //   closeNavMenu();
      // }
      if (isMenuOpen && !document.getElementById(id).contains(target)) {//good practice
        closeNavMenu();
      }
    }
    window.addEventListener('click', handlerClick);
    return () => {
      window.removeEventListener('click', handlerClick);
    }
  }, [isMenuOpen]);

  const enterOpen = (event) => {
    if (event.key === "Enter") {
      openNavMenu();
    }
  }
  const enterClose = (event) => {
    if (event.key === "Enter") {
      closeNavMenu();
    }
  }

  return (
    // <nav className={menu} id="navMenu">
    // <nav className={menu} ref={navRef}>
    <nav className={menu} id={id}>

      <MenuOpenIcon className={styles.openBtn} onClick={openNavMenu} tabIndex="1" onKeyDown={enterOpen} />
      <CloseIcon className={styles.closeBtn} onClick={closeNavMenu} tabIndex="2" onKeyDown={enterClose} />

      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sing Up</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/counter1">Counter1</Link>
        </li>
        <li>
          <Link to="/counter2">Counter2</Link>
        </li>
        <li>
          <Link to="/counter3">Counter3</Link>
        </li>
      </ul>

    </nav>
  );
}

export default NavMenu;
