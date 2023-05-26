import '../scss/nav.scss';

const Navbar = () => {
  return (
    <nav className='nav_container'>
      <a href='mailto:me@ollebac.dev' className='email'>
        ME@OLLEBAC.DEV
      </a>
      <ul className='nav_items_container'>
        <li className='nav_item'>
          <a href='#projects'>PROJECTS</a>
        </li>
        <li className='nav_item'>
          <a href='#about'>ABOUT</a>
        </li>
        <li className='nav_item'>
          <a href='#contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
