const Navbar = () => {
  return (
    <ul className="sidebar">
      <li className="block">
        <h3>CART</h3>
        <div className="cart">
          <span className="empty">No items in cart.</span>
        </div>
      </li>
      <li className="block">
        <h3>CATEGORIES</h3>
        <div className="checklist categories">
          <ul>
            <li><a href="">New Arivals</a></li>
            <li><a href="">Accesories</a></li>
            <li><a href="">bottomBags</a></li>
            <li><a href="">bottomDressed</a></li>
            <li><a href="">bottomJackets</a></li>
            <li><a href="">bottomjewelry</a></li>
            <li><a href="">bottomShoes</a></li>
            <li><a href="">bottomShirts</a></li>
            <li><a href="">bottomSweaters</a></li>
            <li><a href="">bottomT-shirts</a></li>
          </ul>
        </div>
      </li>
    </ul>
  );
};
export default Navbar;
