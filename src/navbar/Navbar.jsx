import navbar from "./Navbar.module.css";

const Navbar = ({ username }) => {
  return (
    <div className={navbar.Container}>
      <div className={navbar.Logo}>
        <img src="icons/logo.svg" alt="logo" />
      </div>
      <div className={navbar.Auth}>
        <img src="icons/user.png" alt="logo" />
        <p className={navbar.Login}>username</p>
      </div>
    </div>
  );
};

export default Navbar;
