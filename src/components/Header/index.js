import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="mobile-logout"
      />
    </div>

    <div className="list-item-container-mobile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="mobile-options"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
        className="mobile-options"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="mobile-options"
      />
    </div>

    <ul className="list-item-container-desktop">
      <li className="item">Home</li>
      <li className="item">Products</li>
      <li className="item">Cart</li>
      <button className="logout-btn" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
