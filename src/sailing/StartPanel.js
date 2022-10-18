import { ClassFlag, P, I, Z, U, BlankFlag, Sound, Up, Down } from "./Flags";
import { Time, Colon } from "./Clock";
export const StartPanel = () => {
  const borderColor = "black";
  const center = { textAlign: "center" };
  const clockStyle = {
    ...{
      padding: "5px",
    },
    ...center,
  };
  const digit = { on: "black", off: "#A9A9A9" };

  digit.off = "#B0B0B0";

  return (
    <table
      style={{
        width: "100%",
        marginBottom: "10px",
        borderLeft: `4px solid ${borderColor}`,
        borderBottom: `4px solid ${borderColor}`,
        borderRight: `4px solid ${borderColor}`,
        borderTop: `4px solid ${borderColor}`,
      }}
    >
      <tbody>
        <tr className="clock-digits">
          <td
            className="red-border-right"
            style={{ borderLeft: "0px solid black" }}
          >
            <div
              style={{
                ...clockStyle,
                ...center,
              }}
            >
              <Time {...digit} digit="5"></Time>
              <Colon color={digit.on}></Colon>
              <Time {...digit} digit="0"></Time>
              <Time {...digit} digit="0"></Time>
            </div>
          </td>
          <td className="red-border-right" colSpan={6}>
            <div style={clockStyle}>
              <Time {...digit} digit="4"></Time>
              <Colon color={digit.on}></Colon>
              <Time {...digit} digit="0"></Time>
              <Time {...digit} digit="0"></Time>
            </div>
          </td>
          <td className="red-border-right">
            <div style={clockStyle}>
              <Time {...digit} digit="1"></Time>
              <Colon color={digit.on}></Colon>
              <Time {...digit} digit="0"></Time>
              <Time {...digit} digit="0"></Time>
            </div>
          </td>
          <td className="red-border-right">
            <div style={clockStyle}>
              <Time {...digit} digit="0"></Time>
              <Colon color={digit.on}></Colon>
              <Time {...digit} digit="0"></Time>
              <Time {...digit} digit="0"></Time>
            </div>
          </td>
        </tr>
        <tr className="clock">
          <td className="red-border-right">
            <h2 className="center">WARNING</h2>
            <h2 className="center">
              <Sound size="30px"></Sound>
            </h2>
          </td>
          <td className="red-border-right" colSpan={6}>
            <h2 className="center">PREPARTORY SIGNAL - 5 OPTIONS</h2>
            <h2 className="center">
              <Sound size="30px"></Sound>
            </h2>
          </td>
          <td className="red-border-right">
            <h2 className="center">ONE MINUTE</h2>
            <h2 className="center">
              <Sound size="30px"></Sound>
            </h2>
          </td>
          <td>
            <h2 className="center">START</h2>
            <h2 className="center">
              <Sound size="30px"></Sound>
            </h2>
          </td>
        </tr>
        <tr>
          <td className="red-border-right">
            <div className="center">
              <div style={{ display: "inline" }}>
                <Up></Up>
              </div>
              <ClassFlag divStyle={{ display: "inline" }}></ClassFlag>
            </div>
          </td>
          <td></td>
          <td>
            <ClassFlag></ClassFlag>
          </td>
          <td>
            <ClassFlag></ClassFlag>
          </td>
          <td>
            <ClassFlag></ClassFlag>
          </td>
          <td>
            <ClassFlag></ClassFlag>
          </td>
          <td className="red-border-right">
            <ClassFlag></ClassFlag>
          </td>
          <td className="red-border-right">
            <ClassFlag></ClassFlag>
          </td>
          <td>
            <h2 className="center">GO!</h2>
          </td>
        </tr>
        <tr>
          <td
            className="description red-border-right"
            style={{
              maxWidth: "100px",
              padding: "5px",
            }}
            rowSpan={3}
          >
            <p>
              5 MINUTES BEFORE START OR AS STATED IN THE SAILING INSTRUCTIONS.
            </p>
            <p>NEXT CLASS WARNING MADE WITH OR AFTER THIS CLASS START</p>
          </td>
          <td>
            <div style={center}>
              <div style={{ display: "inline" }}>
                <Up></Up>
              </div>
            </div>
          </td>
          <td>
            <P divStyle={center}></P>
          </td>
          <td>
            <I divStyle={center}></I>
          </td>
          <td>
            <Z divStyle={center}></Z>
          </td>
          <td>
            <U divStyle={center}></U>
          </td>
          <td className="red-border-right">
            <BlankFlag colour="black" divStyle={center}></BlankFlag>
          </td>
          <td className="red-border-right"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <h2 className="centred">P</h2>
          </td>
          <td>
            <h2 className="centred">I</h2>
          </td>
          <td>
            <h2 className="centred">Z</h2>
          </td>
          <td>
            <h2 className="centred">U</h2>
          </td>
          <td className="red-border-right">
            <h2 className="centred">BLACK</h2>
          </td>
          <td className="description centred red-border-right">
            PREPARTORY FLAG(S) LOWERED
          </td>
          <td className="description centred">CLASS FLAG LOWERED</td>
        </tr>
        <tr
          style={{
            borderStyle: "solid",
            borderBottom: "4px",
            borderBottomColor: "red",
          }}
        >
          <td colSpan={2}></td>
          <td
            className="description start-description red-border-right centred fw-bold"
            colSpan={4}
          >
            IF OVER LINE IN LAST MINUTE
          </td>
          <td className="red-border-right"></td>
        </tr>
        <tr>
          <td className="red-border-right"></td>
          <td colSpan={2}></td>
          <td className="description  start-description">
            SAIL AROUND THE END OF LINE
          </td>
          <td className="description  start-description">
            20% SCORING PENALTY. NO HEARING, EVEN IF RESTART
          </td>
          <td className="description start-description">
            DISQUALIFIED NO HEARING UNLESS RACE RESTART
          </td>
          <td className="description start-description red-border-right">
            DISQUALIFIED NO HEARING EVEN IF RACE RESTART
          </td>
          <td className="red-border-right">
            <div className="center">
              <div style={{ display: "inline" }}>
                <Down></Down>
              </div>
              <P divStyle={{ display: "inline" }}></P>
            </div>
          </td>
          <td style={{ borderLeft: "" }}>
            <div className="center">
              <div style={{ display: "inline" }}>
                <Down></Down>
              </div>
              <ClassFlag divStyle={{ display: "inline" }}></ClassFlag>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
