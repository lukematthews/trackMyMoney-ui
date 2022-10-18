import {
  Sound,
  C,
  Repeat,
  STARBOARD,
  BlankFlag,
  SHORTER,
  LONGER,
} from "./Flags";

export const ChangeOfCourse = () => {
  return (
    <>
      <h2>CHANGE OF COURSE</h2>
      <div
        className="centred"
        style={{
          border: "2px solid black",
          paddingLeft: "10px",
          paddingTop: "10px",
        }}
      >
        <h2>
          <C divStyle={{ display: "inline" }}></C>
        </h2>
        <h2 style={{ paddingBotton: "15px" }}>
          C <Sound style={{ paddingRight: "5px" }}> </Sound>
          <Repeat></Repeat>
        </h2>
        <p className="description">
          NEXT MARK POSITION CHANGED BY DISPLAY OF COMPASS BEARING
        </p>
      </div>
      <div
        className="centred"
        style={{
          borderLeft: "2px solid black",
          borderBottom: "2px solid black",
          borderRight: "2px solid black",
        }}
      >
        <h2>OR</h2>
        <h2>
          <C divStyle={{ display: "inline" }}></C>
        </h2>
        <h2 style={{ paddingBotton: "15px" }}>
          C <Sound style={{ paddingRight: "5px" }}> </Sound>
          <Repeat></Repeat>
        </h2>
        <h2 className="centred" style={{ paddingTop: "10px" }}>
          AND
        </h2>
        <table>
          <tbody className="description">
            <tr>
              <td>
                <BlankFlag colour="red"></BlankFlag>
              </td>
              <td>
                <STARBOARD></STARBOARD>
              </td>
            </tr>
            <tr>
              <td className="description" style={{ textAlign: "left" }}>
                MOVED TO PORT
              </td>
              <td className="description" style={{ textAlign: "left" }}>
                MOVED TO STARBOARD
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: "10px" }}>
                <SHORTER></SHORTER>
              </td>
              <td style={{ paddingTop: "10px" }}>
                <LONGER></LONGER>
              </td>
            </tr>
            <tr className="py-5">
              <td className="description" style={{ textAlign: "left" }}>
                NEXT LEG SHORTER
              </td>
              <td className="description" style={{ textAlign: "left" }}>
                NEXT LEG LONGER
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
