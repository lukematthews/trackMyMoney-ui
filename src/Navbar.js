import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "./dollar-sign-bag-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

export default class LabelConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBasic: false,
    };
  }

  render() {
    return (
      <MDBNavbar
        expand="lg"
        fixed="top"
        style={{ backgroundColor: "white", borderTop: "8px solid #3273dc" }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand
            href="/"
            style={{
              fontFamily: "Permanent Marker",
              fontWeight: "normal",
              fontStyle: "normal",
            }}
          >
            Show me the <LogoSvg stroke="white" height="50px" width="50px" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.setState({ showBasic: !this.state.showBasic })}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={this.state.showBasic}>
            <MDBNavbarNav fullWidth={false} className="me-auto mb-2 mb-md-0">
              <MDBNavbarItem>
                <NavLink to="/" className={"nav-link"}>
                  Transactions
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/label-list" className={"nav-link"}>
                  Labels
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/coming-up" className={"nav-link"}>
                  Coming Up
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/analysis" className={"nav-link"}>
                  Analysis
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/upload" className={"nav-link"}>
                  Upload
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/isaf-flags" className={"nav-link"}>
                  Show Me The Flags
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}
