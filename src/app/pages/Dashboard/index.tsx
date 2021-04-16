import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@material-ui/core";
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
          <Grid container className="admin-content">
            <Grid item xs={12} sm={6} md={6} className="col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <Grid container className="admin-div content-box">
                    <Grid item className="col-10">
                      <div className="welcome-admin">Welcome to Admin</div>
                      <div className="number-views">Number of Views</div>
                    </Grid>
                    <Grid item className="col-2 view-count">
                      102
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6} className="col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <Grid container className="admin-div content-box">
                    <Grid item className="col-10">
                      <div className="welcome-admin">Active</div>
                      <div className="number-views">Number of Contacts</div>
                    </Grid>
                    <Grid item className="col-2 view-count">
                      325
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              sm={6}
              md={6}
              xl={3}
              className="col-lg-6 col-md-6 col-sm-6 col-xl-3 "
            >
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item className="col-8">
                        <div className="stats-number total-leads-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Leads</div>
                      </Grid>
                      <Grid item className="col-4 stats-icon">
                        <img
                          src={TotalLeadsIcon}
                          alt="total-leads"
                          className="stats-img"
                        />
                      </Grid>
                    </Grid>
                    {/* <div className="row total-leads-percent"> */}
                    <Grid container className="total-leads-percent">
                      <Grid item className="col-8 percent-change">
                        % change
                      </Grid>
                      <Grid item className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              sm={6}
              md={6}
              xl={3}
              className="col-lg-6 col-md-6 col-sm-6 col-xl-3"
            >
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item className="col-8">
                        <div className="stats-number total-pending-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Pending</div>
                      </Grid>
                      <Grid item className="col-4 stats-icon">
                        <img
                          src={TotalPendingIcon}
                          alt="total-pending"
                          className="stats-img"
                        />
                      </Grid>
                    </Grid>
                    <Grid container className="total-pending-percent">
                      <Grid item className="col-8 percent-change">
                        % change
                      </Grid>
                      <Grid item className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              lg={6}
              xs={12}
              sm={6}
              md={6}
              xl={3}
              className="col-lg-6 col-md-6 col-sm-6 col-xl-3"
            >
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item className="col-8">
                        <div className="stats-number total-closed-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Closed</div>
                      </Grid>
                      <Grid item className="col-4 stats-icon">
                        <img
                          src={TotalClosedIcon}
                          alt="total-closed"
                          className="stats-img"
                        />
                      </Grid>
                    </Grid>
                    <Grid container className=" total-closed-percent">
                      <Grid item className="col-8 percent-change">
                        % change
                      </Grid>
                      <Grid item className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              lg={6}
              xs={12}
              sm={6}
              md={6}
              xl={3}
              className="col-lg-6 col-md-6 col-sm-6 col-xl-3"
            >
              <div className="card">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item className="col-8">
                        <div className="stats-number total-leads-report-color">
                          66,615k
                        </div>
                        <div className="stats-name">Total Leads</div>
                      </Grid>
                      <Grid item className="col-4 stats-icon">
                        <img
                          src={TotalLeadsReportIcon}
                          alt="total-leads-report"
                          className="stats-img"
                        />
                      </Grid>
                    </Grid>
                    <Grid container className=" total-leads-report-percent">
                      <Grid item className="col-8 percent-change">
                        % change
                      </Grid>
                      <Grid className="col-4 percent-change-graph">
                        <img
                          src={AnalysisSmallGraphIcon}
                          alt="analysis-small-graph"
                          className="analysis-small-graph"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} className="col-md-6 col-sm-12 ">
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
            </Grid>

            <Grid item xs={12} sm={12} md={6} className="col-md-6 col-sm-12 ">
              <div className="card analytic-card">
                <div className="card-body">
                  <div className="table-div content-box">
                    <div className="table-text">
                      <div className="table-border">Table</div>
                    </div>
                    <div className="stats-table">
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell scope="col">Type</TableCell>
                              <TableCell scope="col">Lead Name</TableCell>
                              <TableCell scope="col">Views</TableCell>
                              <TableCell scope="col">Favorites</TableCell>
                              <TableCell scope="col">Last visit</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            <TableRow>
                              <TableCell className="buyer">Buyer</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="buyer">Buyer</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="landlord">
                                Landlord
                              </TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="seller">Seller</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="buyer">Buyer</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="buyer">Buyer</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="buyer">Buyer</TableCell>
                              <TableCell>Denise Ann</TableCell>
                              <TableCell className="text-views">153</TableCell>
                              <TableCell className="text-favorites">
                                0
                              </TableCell>
                              <TableCell className="text-visit">
                                9:23AM
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
