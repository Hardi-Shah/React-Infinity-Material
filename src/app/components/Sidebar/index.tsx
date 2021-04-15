import { Link } from "react-router-dom";
import {
  AccountingIcon,
  ComponentsIcon,
  DashboardIocn,
  EmailsIcon,
  HelpIcon,
  ReportIcon,
  ShippingIcon,
} from "../../assets/images";

const Sidebar = () => {
  return (
    <div id="Sidebar" className="sidenav">
      <div className="sidebar-list">
        <Link to="/dashboard">
          <div className="row">
            <div className="col-2">
              <img
                src={DashboardIocn}
                alt="sidebar-logo"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Dashboard</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={ComponentsIcon}
                alt="component-logo"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Components</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={EmailsIcon} alt="email-logo" className="sidebar-logo" />
            </div>
            <div className="col-10">Emails</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={AccountingIcon}
                alt="accounting-logo"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Accounting</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={ShippingIcon}
                alt="shipping-logo"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Shipping</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img src={HelpIcon} alt="help-logo" className="sidebar-logo" />
            </div>
            <div className="col-10">Help</div>
          </div>
        </Link>
        <Link to="#">
          <div className="row">
            <div className="col-2">
              <img
                src={ReportIcon}
                alt="report-logo"
                className="sidebar-logo"
              />
            </div>
            <div className="col-10">Report</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
