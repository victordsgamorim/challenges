import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img src="/src/assets/images/logo.svg" alt="News Logo" />
      <div className='drawer'>
        <input type="checkbox" id='menu' />
        <label htmlFor="menu"><span className='drawer__icon--open'></span></label>
        <div className='drawer__box'>

          <div className="icon-wrapper"><label htmlFor="menu"><span className='drawer__icon--close'></span></label></div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;