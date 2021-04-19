import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Radio,
  MenuItem,
  FormLabel,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import {
  AlertCloseIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarnIcon,
  BinIcon,
  EditIcon,
  UploadIconWhite,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import DefaultSwitch from "../../components/Switch";
import DefaultTabs from "../../components/Tabs";
import DefaultSelect from "../../components/Select";

const InnerPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

  const [checked, setChecked] = useState(true);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [radio, setRadio] = useState("option1");

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  const [select, setSelect] = useState("6");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

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
          <Grid container>
            <Grid item md={12} className="col-md-12">
              <h3 className="innerpage-text">innerpage</h3>
            </Grid>

            <Grid item md={12} className="col-md-12">
              <div className="innerpage-table-div content-box">
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
                          <TableCell scope="col" className="status-head">
                            Status
                          </TableCell>
                          <TableCell scope="col">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-text">
                            In progress
                          </TableCell>
                          <TableCell className="">
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>

                          <TableCell className="btn-pending">Pending</TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="landlord">Landlord</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-cancelled">
                            Cancelled
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="seller">Seller</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-text">
                            In Progress
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-cancelled">
                            Cancelled
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-text">
                            In Progress
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-text">
                            In Progress
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-pending">Pending</TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="buyer">Buyer</TableCell>
                          <TableCell>Denise Ann</TableCell>
                          <TableCell className="text-views">153</TableCell>
                          <TableCell className="text-favorites">0</TableCell>
                          <TableCell className="text-visit">9:23AM</TableCell>
                          <TableCell className="btn-completed">
                            Completed
                          </TableCell>
                          <TableCell>
                            <img className="edit-img" src={EditIcon} alt="" />
                            <img className="edit-img" src={BinIcon} alt="" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <div className="main-pagination">
                    <div className="records-entry">
                      <span>
                        <h2 className="pt-3">Show</h2>
                      </span>
                      <span className="select-div">
                        <FormControl variant="filled">
                          <Select
                            id="entry"
                            value={select}
                            className="select-entry"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                          </Select>
                        </FormControl>
                      </span>
                      <span>
                        <h3 className="pt-3">Entries</h3>
                      </span>
                    </div>

                    <Pagination
                      count={5}
                      color="primary"
                      className="pagination-nav"
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item md={12} className="col-md-12">
              <div className="form-div content-box">
                <div className="analytics-text">
                  <div className="analytics-border">FORM STYLE</div>
                </div>
                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="one-column-head">One Column</h3>
                    </Grid>
                    <Grid item xs={12} className="col-12">
                      <FormGroup>
                        <TextField
                          type="text"
                          variant="filled"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>
                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          className="form-textarea"
                          id="exampleTextarea"
                          type="textarea"
                          label="Textarea"
                          variant="filled"
                        ></TextField>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="two-column-head">Two Column</h3>
                    </Grid>
                    <Grid item md={6} className="col-md-6">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          label="Disabled"
                          id="exampleInput"
                          disabled
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} className="col-md-6">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Focus"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="three-column-head">Three Column</h3>
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="four-column-head">Four Column</h3>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item md={12} className="col-md-12">
                      <h3 className="element-head">Other Elements</h3>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="file-upload">
                        <span className="form-label one-column-label">
                          File Upload:
                        </span>

                        <FormLabel htmlFor="input-file">
                          <img
                            src={UploadIconWhite}
                            alt=""
                            className="upload-white-icon"
                          />{" "}
                          Upload
                        </FormLabel>
                        <TextField id="input-file" type="file" />
                      </div>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <FormLabel
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Check Boxes
                        </FormLabel>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-checkbox checkbox1">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked}
                                color="primary"
                                disableRipple={true}
                                onChange={handleChangeCheckbox}
                              />
                            }
                            label="Option 1"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                color="primary"
                                disableRipple={true}
                              />
                            }
                            label="Option 2"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                color="primary"
                                disableRipple={true}
                              />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <FormLabel
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Radio Buttons
                        </FormLabel>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-radio checkbox1">
                          <FormControlLabel
                            value="option1"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                color="primary"
                                name="option"
                                disableRipple={true}
                                checked={radio === "option1"}
                              />
                            }
                            label="Option 1"
                          />
                          <FormControlLabel
                            value="option2"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                color="primary"
                                checked={radio === "option2"}
                                name="option"
                                disableRipple={true}
                              />
                            }
                            label="Option 2"
                          />
                          <FormControlLabel
                            value="option3"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                checked={radio === "option3"}
                                color="primary"
                                disableRipple={true}
                                name="option"
                              />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="button-element">
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          className="primary-btn"
                          disableRipple={true}
                        >
                          Primary
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          color="default"
                          className="secondary-btn"
                          disableRipple={true}
                        >
                          Secondary
                        </Button>
                        <DefaultSwitch leftlabel="OFF" rightlabel="ON" />
                      </div>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="alert-message">
                        {!showSuccess && (
                          <div>
                            <Button
                              variant="contained"
                              className="mb-2 btn-success"
                              onClick={() => setShowSuccess(true)}
                              disableRipple={true}
                            >
                              Show Success Alert
                            </Button>
                          </div>
                        )}
                        {showSuccess && (
                          <Alert icon={false} className="alert-success">
                            <img
                              className="alert-icon"
                              src={AlertSuccessIcon}
                              alt=""
                            />
                            <span className="alert-success-text">
                              This is a success message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              onClick={() => setShowSuccess(false)}
                              alt=""
                            />
                          </Alert>
                        )}

                        {!showInfo && (
                          <div>
                            <Button
                              variant="contained"
                              className="btn-info mb-2"
                              onClick={() => setShowInfo(true)}
                              disableRipple={true}
                            >
                              Show Info Alert
                            </Button>
                          </div>
                        )}
                        {showInfo && (
                          <Alert icon={false} className="alert alert-info">
                            <img
                              className="alert-icon"
                              src={AlertInfoIcon}
                              alt=""
                            />
                            <span className="alert-info-text">
                              This is an info message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowInfo(false)}
                            />
                          </Alert>
                        )}

                        {!showWarning && (
                          <div>
                            <Button
                              variant="contained"
                              className=" btn-warning mb-2"
                              onClick={() => setShowWarning(true)}
                              disableRipple={true}
                            >
                              Show Warning Alert
                            </Button>
                          </div>
                        )}
                        {showWarning && (
                          <Alert icon={false} className="alert alert-warning">
                            <img
                              className="alert-icon"
                              src={AlertWarnIcon}
                              alt=""
                            />
                            <span className="alert-warn-text">
                              This is an alert message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowWarning(false)}
                            />
                          </Alert>
                        )}

                        {!showDanger && (
                          <div>
                            <Button
                              variant="contained"
                              className="btn-danger mb-2"
                              onClick={() => setShowDanger(true)}
                              disableRipple={true}
                            >
                              Show Danger Alert
                            </Button>
                          </div>
                        )}
                        {showDanger && (
                          <Alert
                            icon={false}
                            className="alert alert-danger"
                            role="alert"
                          >
                            <img
                              className="alert-icon"
                              src={AlertDangerIcon}
                              alt=""
                            />
                            <span className="alert-danger-text">
                              This is an error message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowDanger(false)}
                            />
                          </Alert>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </form>

                <Grid container>
                  <Grid item md={12} className="col-md-12">
                    <h3 className="tab-head">Tab Style</h3>
                  </Grid>
                  <Grid item md={12} className="col-md-12">
                    <DefaultTabs />
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item md={12} className="col-md-12">
              <p className="innerpage-copyright">
                Copyright 2021.All rights reserved.
                <span className="span-career">Careers</span>
                <span className="span-policy">Prviacy Policy</span>
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
