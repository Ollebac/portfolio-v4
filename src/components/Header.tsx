import '../scss/header.scss';

const Header = () => {
  return (
    <div className='header_container'>
      <header className='header_content'>
        <h1 className='header_name'>
          Ian <br className='header_break' />
          Cabello
        </h1>
        <h2 className='header_subtext'>
          Front-End Web <br />
          Developer
        </h2>
        <a href='#contact'>
          <button className='header_button'>SEE MY WORK &#9816;</button>
        </a>
      </header>
      <div className='header_images'>
        <div className='header_img_bg header_img_bg1'>
          <img src='images/header_img1.png' alt='Header Image - Laptop' className='header_img' />
        </div>
        <div className='header_img_bg header_img_bg2 '>
          <img src='images/header_img2.png' alt='Header Image - Keyboard' className='header_img' />
        </div>
        <div className='header_img_bg header_img_bg3 '>
          <img src='images/header_img3.png' alt='Header Image - Code' className='header_img' />
        </div>
      </div>
    </div>
  );
};

export default Header;
