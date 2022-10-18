import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./RaceSignalChart.css";
import {
  AP,
  A,
  B,
  D,
  H,
  L,
  M,
  N,
  O,
  R,
  Y,
  BlankFlag,
  Sound,
  Repeat,
  Down,
} from "./Flags.js";
import { StartFlags } from "./StartFlags";
import { StartPanel } from "./StartPanel";
import { ChangeOfCourse } from "./ChangeOfCourse";

const RaceSignalChart = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "0px",
        minWidth: "1024px",
        border: "8px solid purple",
      }}
    >
      <MDBRow>
        <MDBCol style={{ maxWidth: "260px" }}>
          <h2>POSTPONED</h2>
          <AP></AP>
          <h2>
            AP <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound></Sound>
          </h2>
          <p className="description">RACES NOT STARTED POSTPONED.</p>
          <p className="description">
            <Down></Down>
            <Sound></Sound> ONE MINUTE BEFORE NEXT WARNING
          </p>
          <div>
            <AP></AP>
          </div>
          <div>
            <H></H>
          </div>
          <h2>
            AP / H <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound></Sound>
          </h2>
          <p className="description">
            ALL RACES POSTPONED. MORE SIGNALS ASHORE
          </p>
          <div>
            <AP></AP>
          </div>
          <div>
            <A></A>
          </div>
          <h2>
            AP / A <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound style={{ color: "red" }}></Sound>
          </h2>
          <p className="description">POSTPONED TO ANOTHER DAY</p>
        </MDBCol>
        <MDBCol style={{ maxWidth: "260px" }}>
          <h2>ABANDONED</h2>
          <N></N>
          <h2>
            N <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound></Sound>
          </h2>
          <p className="description">RACE ABANDONED RETURN TO START AREA</p>
          <p className="description">
            <Down></Down>
            <Sound></Sound> ONE MINUTE BEFORE NEXT WARNING
          </p>
          <div>
            <N></N>
          </div>
          <div>
            <H></H>
          </div>
          <h2>
            N / H <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound></Sound>
          </h2>
          <p className="description">
            ALL RACES ABANDONED. MORE SIGNALS ASHORE
          </p>
          <div>
            <N></N>
          </div>
          <div>
            <A></A>
          </div>
          <h2>
            N / A <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound style={{ marginRight: "10px" }}></Sound>
            <Sound></Sound>
          </h2>
          <p className="description">
            ALL RACES TODAY ABANDONED. NO MORE RACES TODAY
          </p>
        </MDBCol>
        <MDBCol style={{ maxWidth: "260px" }}>
          <ChangeOfCourse></ChangeOfCourse>
        </MDBCol>
        <MDBCol size="8">
          <StartPanel></StartPanel>
          <MDBRow className="py-3">
            <MDBContainer>
              <StartFlags></StartFlags>
            </MDBContainer>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <B></B>
          <p className="description">
            <span className="fw-bold">B OR ANY RED</span> YACHT FLIES TO PROTEST
          </p>
        </MDBCol>
        <MDBCol>
          <Y></Y>
          <h2>
            Y <Sound></Sound>
          </h2>
          <p className="description">WEAR PERSONAL FLOTATION DEVICES</p>
        </MDBCol>
        <MDBCol>
          <M></M>
          <h2>
            M <Sound></Sound> <Repeat></Repeat>
          </h2>
          <p className="description">REPLACES MISSING MARK</p>
        </MDBCol>
        <MDBCol>
          <D></D>
          <h2>
            D <Sound style={{ marginRight: "10px" }}></Sound>
          </h2>
          <p className="description">
            DO NOT LEAVE HARBOUR. WARNING SIGNAL COMING WITHIN MINUTES
          </p>
        </MDBCol>
        <MDBCol>
          <L></L>
          <h2>
            L <Sound></Sound>
          </h2>
          <p className="description">
            <span className="fw-bold">ASHORE</span> SEE NOTICE BOARD
            <br /> <span className="fw-bold">AFLOAT</span> COME WITHIN HAIL OR
            FOLLOW THIS BOAT
          </p>
        </MDBCol>
        <MDBCol>
          <O></O>
          <h2>
            O <Sound></Sound> <Repeat></Repeat>
          </h2>
          <p className="description">
            OOCHING, PUMPING, ROCKING OK, OR IF ON A MARK, REPEAT SOUNDS, OK
            AFTER THIS MARK
          </p>
        </MDBCol>
        <MDBCol>
          <R></R>
          <h2>
            R <Sound></Sound> <Repeat></Repeat>
          </h2>
          <p className="description">NO PUMPING, OOCHING OR ROCKING</p>
        </MDBCol>
        <MDBCol>
          <BlankFlag colour="yellow"></BlankFlag>
          <h2>YELLOW</h2>
          <p className="description">
            POINTED AT BOAT & SAIL NO. HAILED - BOAT HAS BROKEN PROPULSION RULE
            (42: PUMPING, OOCHING, ROCKING)
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="py-0">
        <MDBCol>
          <div className="copyright">&copy; Luke Matthews 2022</div>
        </MDBCol>
      </MDBRow>
    </div>
  );
});

export default RaceSignalChart;
