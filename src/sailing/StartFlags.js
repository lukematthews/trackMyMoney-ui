import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { BlankFlag, Sound, S, X, FirstSub, Down } from "./Flags";

export const StartFlags = () => {
  return (
    <MDBRow>
      <MDBCol className="px-5">
        <BlankFlag colour="orange"></BlankFlag>
        <h2>ORANGE</h2>
        <p className="description">
          <span className="fw-bold">START & FINISH LINE ENDS</span>.
        </p>
        <p className="description">
          <Sound></Sound> RACES BEGIN SOON
        </p>
      </MDBCol>
      <MDBCol>
        <BlankFlag colour="blue"></BlankFlag>
        <h2>BLUE</h2>
        <p className="description">
          ON STATION AT <span className="fw-bold">FINISH LINE</span>
        </p>
        <p className="description">
          THE FLAG IS THE WHERE THE LINE IS VIEWED FROM
        </p>
      </MDBCol>
      <MDBCol>
        <X></X>
        <h2>
          X <Sound></Sound>
        </h2>
        <p className="description fw-bold">INDIVIDUAL RECALL</p>
        <p className="description">
          IF <span className="fw-bold">I</span> FLAG, ROUND THE ENDS. OTHERWISE
          DIP WHOLE BOAT BELOW STARTING LINE
        </p>
      </MDBCol>
      <MDBCol>
        <FirstSub></FirstSub>
        <h2>
          1st Sub <Sound style={{ marginRight: "10px" }}></Sound>
          <Sound></Sound>
        </h2>
        <p className="description">
          <span className="fw-bold">GENERAL RECALL</span>
        </p>
        <p className="description">
          <Sound></Sound>
          <Down></Down> ONE MINUTE TO NEXT WARNING
        </p>
      </MDBCol>
      <MDBCol>
        <S></S>
        <h2>
          S <Sound style={{ marginRight: "10px" }}></Sound>
          <Sound></Sound>
        </h2>
        <p className="description">
          <span className="fw-bold">SHORTENED COURSE</span>
        </p>
        <p className="description">AT A ROUNDING MARK, ADVISED LINE OR GATE</p>
      </MDBCol>
    </MDBRow>
  );
};
