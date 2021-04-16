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
  Switch,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Radio,
  Tabs,
  Tab,
  Typography,
  Box,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Form, Pagination } from "react-bootstrap";
import {
  AlertCloseIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarnIcon,
  BinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  UploadIconWhite,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";

const InnerPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

  const [state, setState] = useState({
    checkedSwitch: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [checked, setChecked] = useState(true);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [radio, setRadio] = useState("option1");

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  const [value, setValue] = useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  interface ITabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
  }
  const TabPanel: React.FC<ITabPanelProps> = ({
    children = "",
    dir = "",
    index = "",
    value = "",
    ...other
  }: ITabPanelProps) => {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index: any) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
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
          <div className="row">
            <div className="col-md-12">
              <h3 className="innerpage-text">innerpage</h3>
            </div>

            <div className="col-md-12">
              <div className="innerpage-table-div content-box">
                <div className="table-text">
                  <div className="table-border">Table</div>
                </div>
                <div className="stats-table">
                  <TableContainer>
                    <Table
                      data-pagination="TableRowue"
                      data-page-list="[5, 10, 25, 50, 100, ALL]"
                      data-page-size="6"
                    >
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
                          <TableCell>
                            <Button
                              type="button"
                              variant="outlined"
                              className="btn-text"
                            >
                              In Progress
                            </Button>
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

                          <TableCell>
                            <Button
                              variant="outlined"
                              type="button"
                              className="btn-pending"
                            >
                              Pending
                            </Button>
                          </TableCell>
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
                          <TableCell>
                            <Button
                              variant="outlined"
                              type="button"
                              className="btn-cancelled"
                            >
                              Cancelled
                            </Button>
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
                          <TableCell>
                            <Button
                              type="button"
                              variant="outlined"
                              className="btn-text"
                            >
                              In Progress
                            </Button>
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
                          <TableCell>
                            <Button
                              variant="outlined"
                              type="button"
                              className="btn-cancelled"
                            >
                              Cancelled
                            </Button>
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
                          <TableCell>
                            <Button
                              type="button"
                              variant="outlined"
                              className="btn-text"
                            >
                              In Progress
                            </Button>
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
                          <TableCell>
                            <Button
                              type="button"
                              variant="outlined"
                              className="btn-text"
                            >
                              In Progress
                            </Button>
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
                          <TableCell>
                            <Button
                              variant="outlined"
                              type="button"
                              className="btn-pending"
                            >
                              Pending
                            </Button>
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
                          <TableCell>
                            <Button
                              type="button"
                              variant="outlined"
                              className="btn-completed"
                            >
                              Completed
                            </Button>
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
                    <div className="pagination justify-content-start">
                      <h3 className="show-text">Show</h3>
                      <div className="select-div">
                        <FormControl
                          variant="filled"
                          
                        >
                          <InputLabel id="demo-simple-select-filled-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        
                        <Form.Control
                          as="select"
                          defaultValue={6}
                          className="select-entry"
                          id="entry"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </Form.Control>
                      </div>
                      <h3 className="entry-text">Entries</h3>
                    </div>
                    <Pagination className="justify-content-end">
                      <Pagination.Item href="#">
                        <img
                          src={ChevronLeftIcon}
                          alt=""
                          className="chevron-left-img"
                        />
                      </Pagination.Item>
                      <Pagination.Item href="#">1</Pagination.Item>
                      <Pagination.Item active href="#">
                        2
                      </Pagination.Item>
                      <Pagination.Item href="#">3</Pagination.Item>
                      <Pagination.Item href="#">4</Pagination.Item>
                      <Pagination.Item href="#">5</Pagination.Item>
                      <Pagination.Item href="#">
                        <img
                          src={ChevronRightIcon}
                          alt=""
                          className="chevron-left-img"
                        />
                      </Pagination.Item>
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-div content-box">
                <div className="analytics-text">
                  <div className="analytics-border">FORM STYLE</div>
                </div>
                <Form>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="one-column-head">One Column</h3>
                    </div>
                    <div className="col-12">
                      <Form.Group>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          {" "}
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </Form.Group>
                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleTextarea"
                        >
                          Textarea
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          id="exampleTextarea"
                        ></Form.Control>
                      </FormGroup>
                    </div>
                  </div>
                </Form>

                <Form>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="two-column-head">Two Column</h3>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Disabled
                        </Form.Label>
                        <Form.Control type="text" disabled id="exampleInput" />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Focus
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="focus-input"
                          id="exampleInput"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </Form>

                <Form>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="three-column-head">Three Column</h3>
                    </div>
                    <div className="col-md-4">
                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className=" custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                    <div className="col-md-4">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                    <div className="col-md-4">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                  </div>
                </Form>

                <Form>
                  <div className="row">
                    <div className="col-12">
                      <h3 className="four-column-head">Four Column</h3>
                    </div>
                    <div className="col-md-3">
                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                    <div className="col-md-3">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                    <div className="col-md-3">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                    <div className="col-md-3">
                      <FormGroup>
                        <Form.Label
                          className="two-column-label"
                          htmlFor="exampleInput"
                        >
                          Textbox
                        </Form.Label>
                        <Form.Control type="text" id="exampleInput" />
                      </FormGroup>

                      <FormGroup>
                        <Form.Label
                          className="one-column-label"
                          htmlFor="exampleInpuTableCellropdown"
                        >
                          Dropdown
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className="custom-dropdown"
                          id="exampleformControlSelect"
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Control>
                      </FormGroup>
                    </div>
                  </div>
                </Form>

                <Form>
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="element-head">Other Elements</h3>
                    </div>

                    <div className="col-md-12">
                      <div className="file-upload">
                        <span className="form-label one-column-label">
                          File Upload:
                        </span>

                        <Form.Label htmlFor="input-file">
                          <img
                            src={UploadIconWhite}
                            alt=""
                            className="upload-white-icon"
                          />{" "}
                          Upload
                        </Form.Label>
                        <Form.Control id="input-file" type="file" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <FormGroup>
                        <Form.Label
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Check Boxes
                        </Form.Label>
                      </FormGroup>
                    </div>

                    <div className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-checkbox checkbox1">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked}
                                color="primary"
                                onChange={handleChangeCheckbox}
                              />
                            }
                            label="Option 1"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="primary" />
                            }
                            label="Option 2"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox defaultChecked color="primary" />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </div>

                    <div className="col-md-12">
                      <FormGroup>
                        <Form.Label
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Radio Buttons
                        </Form.Label>
                      </FormGroup>
                    </div>

                    <div className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-radio checkbox1">
                          <FormControlLabel
                            value="option1"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                color="primary"
                                name="option"
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
                                name="option"
                              />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </div>

                    <div className="col-md-12">
                      <div className="button-element">
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          className="primary-btn"
                        >
                          Primary
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          color="secondary"
                          className="secondary-btn"
                        >
                          Secondary
                        </Button>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.checkedSwitch}
                              onChange={handleChange}
                              name="checkedSwitch"
                              color="primary"
                            />
                          }
                          label="ON/OFF"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="alert-message">
                        {!showSuccess && (
                          <div>
                            <Button
                              variant="contained"
                              className="mb-2 btn-success"
                              onClick={() => setShowSuccess(true)}
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
                    </div>
                  </div>
                </Form>

                <div className="row">
                  <div className="col-md-12">
                    <h3 className="tab-head">Tab Style</h3>
                  </div>
                  <div className="col-md-12">
                    <Tabs
                      value={value}
                      onChange={handleChangeTab}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab label="Today's Orders" {...a11yProps(0)} />
                      <Tab label="Scheduled" {...a11yProps(1)} />
                      <Tab label="Completed" {...a11yProps(2)} />
                      <Tab label="Cancelled" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      Tab One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Tab Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Tab Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      Tab Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      Tab Five
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <p className="innerpage-copyright">
                Copyright 2021.All rights reserved.
                <span className="span-career">Careers</span>
                <span className="span-policy">Prviacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
