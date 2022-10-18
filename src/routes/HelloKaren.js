import React, { useRef, useState } from "react";
import RaceSignalChart from "../sailing/RaceSignalChart";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

export const HelloKaren = () => {
  const chartRef = useRef();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const options = ["Export as PNG", "Export as PDF", "Export as JPG"];
  const exportFunctions = [
    exportComponentAsPNG,
    exportComponentAsPDF,
    exportComponentAsJPEG,
  ];
  const exportParams = [
    {
      fileName: "ISAF-Race-Signals.png",
      html2CanvasOptions: { scale: 1 },
    },
    {
      fileName: "ISAF-Race-Signals.pdf",
      pdfOptions: { w: 210, pdfFormat: "a4", orientation: "l" },
    },
    { fileName: "ISAF-Race-Signals.jpg" },
  ];

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    exportFunctions[selectedIndex](chartRef, exportParams[selectedIndex]);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <MDBRow className="py-2" style={{ background: "gray" }}>
        <MDBCol>
          <ButtonGroup variant="contained" ref={anchorRef}>
            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBContainer
          className="overflow-auto"
          style={{ width: "100%", height: "80vh" }}
        >
          <div
            style={{
              width: "2048px",
              padding: "50px",
              background: "white",
            }}
          >
            <RaceSignalChart ref={chartRef}></RaceSignalChart>
          </div>
        </MDBContainer>
      </MDBRow>
    </>
  );
};
