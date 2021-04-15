import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ChevronDownGreyIcon,
  LogoIcon,
  MenuIcon,
  NameLogoHIcon,
  NotificationBellIcon,
  UserImage01Icon,
  UserImage02Icon,
  UserImage03Icon,
  UserImage04Icon,
  UserImage05Icon,
  UserProfileIcon,
  UserProfileLogoutIcon,
  UserProfilePasswordIcon,
  UserProfileSettingIcon,
} from "../../assets/images";

const Header = () => {
  function toggleNav() {
    document.getElementById("Sidebar")!.classList.toggle("sidenav-toggle");
    document.getElementById("main")!.classList.toggle("main-toggle");
    document
      .getElementById("overlay")!
      .classList.toggle("display-block-toggle");
  }
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="horizontal-logo-div">
        <img src={NameLogoHIcon} alt="namelogoH" className="horizontal-logo" />
      </div>
      <span>
        <img src={LogoIcon} alt="logo" className="horizontal-logo-mobile" />
      </span>
      <Link className="navbar-brand d-flex w-50 mr-auto" to="#">
        <span id="openNav" className="toggle-nav" onClick={() => toggleNav()}>
          <img src={MenuIcon} alt="menu" className="menu-logo" />
        </span>
      </Link>
      <div className="navbar-collapse w-100" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto navbar-user-details">
          <Dropdown>
            <Dropdown.Toggle
              as="li"
              id="notification-icon"
              className="nav-item bell-icon"
            >
              <img
                src={NotificationBellIcon}
                alt="notification-bell"
                className="bell-logo"
              />
              <span className="badge notification-badge">3</span>
            </Dropdown.Toggle>
            <Dropdown.Menu
              as="ul"
              className=" notifications"
              role="menu"
              aria-labelledby="dropdownMenu"
            >
              <div className="notification-heading">Notifications</div>
              <ul>
                <li className="row">
                  <div className="col-2">
                    <img
                      src={UserImage01Icon}
                      alt="user-01"
                      className="founder-logo"
                    />
                  </div>
                  <div className="col-10">
                    <div className="notification-message">
                      Suzzeth Bungaos tagged you and 18 others in a post
                    </div>
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
                  <div className="col-2">
                    <img
                      src={UserImage02Icon}
                      alt="user-02"
                      className="founder-logo"
                    />
                  </div>
                  <div className="col-10">
                    <div className="notification-message">
                      Suzzeth Bungaos tagged you and 18 others in a post
                    </div>
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
                  <div className="col-2">
                    <img
                      src={UserImage03Icon}
                      alt="user-03"
                      className="founder-logo"
                    />
                  </div>
                  <div className="col-10">
                    <div className="notification-message">
                      Suzzeth Bungaos tagged you and 18 others in a post
                    </div>
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
                  <div className="col-2">
                    <img
                      src={UserImage04Icon}
                      alt="user-04"
                      className="founder-logo"
                    />
                  </div>
                  <div className="col-10">
                    <div className="notification-message">
                      Suzzeth Bungaos tagged you and 18 others in a post
                    </div>
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
              </ul>
              <li className="view-all">
                Show All
                <span>
                  <img
                    src={ChevronDownGreyIcon}
                    alt="chevron-down-grey"
                    className="chevron-down-logo"
                  />
                </span>
              </li>
            </Dropdown.Menu>
          </Dropdown>

          <li className="nav-item">
            <img
              src={UserImage05Icon}
              alt="user-05"
              className="user-profile-logo"
            />
          </li>
          <li className="nav-item nav-item-mobile">
            <div className="founder-name">John Doe</div>
            <Dropdown>
              <Dropdown.Toggle as="span" className="founder-dropdown">
                <Link className="founder-dropdown " to="#">
                  Founder of app
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu as="span">
                <div className="row">
                  <Link className="dropdown-item user-dropdown" to="#">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Profile</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="#">
                    <div className="col-2">
                      <img
                        src={UserProfileSettingIcon}
                        alt="user-profile-seting"
                      />
                    </div>
                    <div className="col-10">Settings</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="#">
                    <div className="col-2">
                      <img
                        src={UserProfilePasswordIcon}
                        alt="user-profile-password"
                      />
                    </div>
                    <div className="col-10">Change Password</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="/">
                    <div className="col-2">
                      <img
                        src={UserProfileLogoutIcon}
                        alt="user-profile-logout"
                      />
                    </div>
                    <div className="col-10">Logout</div>
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
