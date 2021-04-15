import { useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Pagination,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
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

const InnerPage = () => {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

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
                <div className="table-responsive stats-table">
                  <Table
                    className="table table-borderless"
                    data-pagination="true"
                    data-page-list="[5, 10, 25, 50, 100, ALL]"
                    data-page-size="6"
                  >
                    <thead>
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Lead Name</th>
                        <th scope="col">Views</th>
                        <th scope="col">Favorites</th>
                        <th scope="col">Last visit</th>
                        <th scope="col" className="status-head">
                          Status
                        </th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            type="button"
                            variant="outline-success"
                            className="btn-text"
                          >
                            In Progress
                          </Button>
                        </td>
                        <td className="">
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            variant="outline-warning"
                            type="button"
                            className="btn-pending"
                          >
                            Pending
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="landlord">Landlord</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            type="button"
                            className="btn-cancelled"
                          >
                            Cancelled
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="seller">Seller</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            type="button"
                            variant="outline-success"
                            className="btn-text"
                          >
                            In Progress
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            type="button"
                            className="btn-cancelled"
                          >
                            Cancelled
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            type="button"
                            variant="outline-success"
                            className="btn-text"
                          >
                            In Progress
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            type="button"
                            variant="outline-success"
                            className="btn-text"
                          >
                            In Progress
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            variant="outline-warning"
                            type="button"
                            className="btn-pending"
                          >
                            Pending
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="buyer">Buyer</td>
                        <td>Denise Ann</td>
                        <td className="text-views">153</td>
                        <td className="text-favorites">0</td>
                        <td className="text-visit">9:23AM</td>
                        <td>
                          <Button
                            type="button"
                            variant="outline-primary"
                            className="btn-completed"
                          >
                            Completed
                          </Button>
                        </td>
                        <td>
                          <img className="edit-img" src={EditIcon} alt="" />
                          <img className="edit-img" src={BinIcon} alt="" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="main-pagination">
                    <div className="pagination justify-content-start">
                      <h3 className="show-text">Show</h3>
                      <div className="select-div">
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                          htmlFor="exampleInputDropdown"
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
                        <div className="custom-control custom-checkbox checkbox1">
                          <Form.Check.Input
                            type="checkbox"
                            className="custom-control-input"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="inlineCheckbox1"
                          >
                            Option 1
                          </Form.Check.Label>
                        </div>
                        <div className="custom-control custom-checkbox checkbox1">
                          <Form.Check.Input
                            type="checkbox"
                            className="custom-control-input"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="inlineCheckbox2"
                          >
                            Option 2
                          </Form.Check.Label>
                        </div>
                        <div className="custom-control custom-checkbox checkbox1">
                          <Form.Check.Input
                            type="checkbox"
                            className="custom-control-input"
                            id="inlineCheckbox3"
                            value="option3"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="inlineCheckbox3"
                          >
                            Option 3
                          </Form.Check.Label>
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
                        <div className="custom-control custom-radio checkbox1">
                          <Form.Check.Input
                            type="radio"
                            className="custom-control-input"
                            name="InputRadio"
                            id="InputRadio1"
                            value="option1"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="InputRadio1"
                          >
                            Option 1
                          </Form.Check.Label>
                        </div>
                        <div className="custom-control custom-radio checkbox1">
                          <Form.Check.Input
                            type="radio"
                            className="custom-control-input"
                            name="InputRadio"
                            id="InputRadio2"
                            value="option2"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="InputRadio2"
                          >
                            Option 2
                          </Form.Check.Label>
                        </div>
                        <div className="custom-control custom-radio checkbox1">
                          <Form.Check.Input
                            type="radio"
                            className="custom-control-input"
                            name="InputRadio"
                            id="InputRadio3"
                            value="option3"
                          />
                          <Form.Check.Label
                            className="custom-control-label"
                            htmlFor="InputRadio3"
                          >
                            Option 3
                          </Form.Check.Label>
                        </div>
                      </FormGroup>
                    </div>

                    <div className="col-md-12">
                      <div className="button-element">
                        <Button
                          type="button"
                          variant="primary"
                          className="primary-btn"
                        >
                          Primary
                        </Button>
                        <Button
                          type="button"
                          variant="secondary"
                          className="secondary-btn"
                        >
                          Secondary
                        </Button>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="custom-switch"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="alert-message">
                        {!showSuccess && (
                          <div>
                            <Button
                              variant="success"
                              className="mb-2 btn-success"
                              onClick={() => setShowSuccess(true)}
                            >
                              Show Success Alert
                            </Button>
                          </div>
                        )}
                        {showSuccess && (
                          <Alert
                            className=" alert-success"
                          >
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
                              variant="info"
                              className="btn-info mb-2"
                              onClick={() => setShowInfo(true)}
                            >
                              Show Info Alert
                            </Button>
                          </div>
                        )}
                        {showInfo && (
                          <Alert className="alert alert-info">
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
                              variant="warning"
                              className=" btn-warning mb-2"
                              onClick={() => setShowWarning(true)}
                            >
                              Show Warning Alert
                            </Button>
                          </div>
                        )}
                        {showWarning && (
                          <Alert className="alert alert-warning">
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
                              variant="danger"
                              className="btn-danger mb-2"
                              onClick={() => setShowDanger(true)}
                            >
                              Show Danger Alert
                            </Button>
                          </div>
                        )}
                        {showDanger && (
                          <Alert className="alert alert-danger" role="alert">
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
                      defaultActiveKey="maintenance1"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="maintenance1" title="Maintenance1">
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </Tab>
                      <Tab eventKey="maintenance2" title="Maintenance2">
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </Tab>
                      <Tab eventKey="maintenance3" title="Maintenance3">
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </Tab>
                      <Tab eventKey="maintenance4" title="Maintenance4">
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p className="nav-paragraph">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </Tab>
                    </Tabs>
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
