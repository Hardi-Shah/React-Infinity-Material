import { Table } from "react-bootstrap";
import {
  AnalysisSmallGraphIcon,
  AnalyticsGraphIcon,
  TotalClosedIcon,
  TotalLeadsIcon,
  TotalLeadsReportIcon,
  TotalPendingIcon,
} from "../../assets/images";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  function toggleOverlay() {
    document
      .getElementById("overlay")!
      .classList.toggle("display-block-toggle");
    document.getElementById("Sidebar")!.classList.toggle("sidenav-toggle");
    document.getElementById("main")!.classList.toggle("main-toggle");
  }
  return (
    <div className="wrapper">
      <div id="overlay" onClick={() => toggleOverlay()}></div>
      <Header />
      <Sidebar />
      <div id="main">
        <div className="dashboard-content">
          <div className="row admin-content">
            <div className="col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="row admin-div content-box">
                    <div className="col-10">
                      <div className="welcome-admin">Welcome to Admin</div>
                      <div className="number-views">Number of Views</div>
                    </div>
                    <div className="col-2 view-count">102</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="row admin-div content-box">
                    <div className="col-10">
                      <div className="welcome-admin">Active</div>
                      <div className="number-views">Number of Contacts</div>
                    </div>
                    <div className="col-2 view-count">325</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-8">
                        <div className="stats-number total-leads-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Leads</div>
                      </div>
                      <div className="col-4 stats-icon">
                        <img
                          src={TotalLeadsIcon}
                          alt="total-leads"
                          className="stats-img"
                        />
                      </div>
                    </div>
                    <div className="row total-leads-percent">
                      <div className="col-8 percent-change">% change</div>
                      <div className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-8">
                        <div className="stats-number total-pending-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Pending</div>
                      </div>
                      <div className="col-4 stats-icon">
                        <img
                          src={TotalPendingIcon}
                          alt="total-pending"
                          className="stats-img"
                        />
                      </div>
                    </div>
                    <div className="row total-pending-percent">
                      <div className="col-8 percent-change">% change</div>
                      <div className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-8">
                        <div className="stats-number total-closed-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Closed</div>
                      </div>
                      <div className="col-4 stats-icon">
                        <img
                          src={TotalClosedIcon}
                          alt="total-closed"
                          className="stats-img"
                        />
                      </div>
                    </div>
                    <div className="row total-closed-percent">
                      <div className="col-8 percent-change">% change</div>
                      <div className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-8">
                        <div className="stats-number total-leads-report-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Leads</div>
                      </div>
                      <div className="col-4 stats-icon">
                        <img
                          src={TotalLeadsReportIcon}
                          alt="total-leads-report"
                          className="stats-img"
                        />
                      </div>
                    </div>
                    <div className="row total-leads-report-percent">
                      <div className="col-8 percent-change">% change</div>
                      <div className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="card analytic-card">
                <div className="card-body">
                  <div className="analytics-div content-box">
                    <div className="analytics-text">
                      <div className="analytics-border">Analytics</div>
                    </div>
                    <div className="analytics-image">
                      <img
                        className="analytic-img"
                        src={AnalyticsGraphIcon}
                        alt="analytics-graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="card analytic-card">
                <div className="card-body">
                  <div className="table-div content-box">
                    <div className="table-text">
                      <div className="table-border">Table</div>
                    </div>
                    <div className="table-responsive stats-table">
                      <Table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Lead Name</th>
                            <th scope="col">Views</th>
                            <th scope="col">Favorites</th>
                            <th scope="col">Last visit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="buyer">Buyer</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="buyer">Buyer</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="landlord">Landlord</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="seller">Seller</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="buyer">Buyer</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="buyer">Buyer</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                          <tr>
                            <td className="buyer">Buyer</td>
                            <td>Denise Ann</td>
                            <td className="text-views">153</td>
                            <td className="text-favorites">0</td>
                            <td className="text-visit">9:23AM</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
