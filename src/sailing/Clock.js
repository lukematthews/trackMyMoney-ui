export const Time = (props) => {
  // a,b,c,d,e,f,g
  const fragment = [
    [true, true, true, false, true, true, true],
    [false, false, true, false, false, true, false],
    [true, false, true, true, true, false, true],
    [true, false, true, true, false, true, true],
    [false, true, true, true, false, true, false],
    [true, true, false, true, false, true, true],
    [true, true, false, true, true, true, true],
    [true, false, true, false, false, true, false],
    [true, true, true, true, true, true, true],
    [true, true, true, true, false, true, true],
  ];

  const on = props.on || "#ff0000";
  const off = props.off || "#303030";

  const digit = props.digit || 0;
  const view = fragment[digit].map((fragment) => {
    return fragment ? on : off;
  });
  const defaultStyle = {
    fillOpacity: "1",
    fillRule: "evenodd",
    strokeWidth: "3",
    strokeLinejoin: "round",
  };

  const style = { ...defaultStyle, ...props.style };
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="10 0 230 390"
      width="30"
      height="52"
      style={style}
    >
      <path
        id="path941"
        fill="#303030"
        d="M 63.716322,29.999995 47.668509,46.117487 63.716322,62.234978 H 186.2837 L 202.40119,46.117487 186.2837,29.999995 Z M 45.560254,48.156063 29.44475,64.273554 29.44275,186.84096 45.560241,202.88878 61.677733,186.84096 V 64.273554 Z m 158.879516,0 -16.1155,16.117491 -0.002,122.567406 16.11749,16.04782 16.11749,-16.04782 V 64.273554 Z M 63.716322,188.87954 47.668509,204.99703 63.716322,221.11452 H 186.2837 l 16.11749,-16.11749 -16.11749,-16.11749 z m -18.156068,18.16204 -16.115504,16.11749 -0.002,122.56739 16.117491,16.04781 16.117492,-16.04781 V 223.15907 Z m 158.879516,0 -16.1155,16.11749 -0.002,122.56739 16.11749,16.04781 16.11749,-16.04781 V 223.15907 Z M 63.716322,347.76503 47.668509,363.88252 63.716322,380.00001 H 186.2837 l 16.11749,-16.11749 -16.11749,-16.11749 z"
      />
      <path
        id="top"
        fill={view[0]}
        d="m 63.716164,29.999891 -16.04806,16.117411 16.04806,16.11741 H 186.2837 L 202.40106,46.117352 186.2837,29.999998 Z"
      ></path>
      <path
        id="top-left"
        transform="translate(-160)"
        fill={view[1]}
        d="m 188.32242,186.84111 16.11742,16.04806 16.11741,-16.04806 V 64.273554 l -16.11736,-16.11736 -16.11735,16.11736 z"
      />

      <path
        id="top-right"
        fill={view[2]}
        d="m 188.32242,186.84111 16.11742,16.04806 16.11741,-16.04806 V 64.273554 l -16.11736,-16.11736 -16.11735,16.11736 z"
      />
      <path
        id="middle"
        fill={view[3]}
        transform="translate(0,160)"
        d="m 63.716164,29.999891 -16.04806,16.117411 16.04806,16.11741 H 186.2837 L 202.40106,46.117352 186.2837,29.999998 Z"
      ></path>
      <path
        id="bottom-left"
        transform="translate(-160)"
        fill={view[4]}
        d="m 188.32242,345.72646 16.11742,16.04806 16.11741,-16.04806 V 223.15891 l -16.11736,-16.11736 -16.11735,16.11736 z"
      />
      <path
        id="bottom-right"
        fill={view[5]}
        d="m 188.32242,345.72646 16.11742,16.04806 16.11741,-16.04806 V 223.15891 l -16.11736,-16.11736 -16.11735,16.11736 z"
      />
      <path
        id="bottom"
        fill={view[6]}
        transform="translate(0,320)"
        d="m 63.716164,29.999891 -16.04806,16.117411 16.04806,16.11741 H 186.2837 L 202.40106,46.117352 186.2837,29.999998 Z"
      ></path>
    </svg>
  );
};

export const Colon = (props) => {
  const defaultStyle = {
    fillOpacity: "1",
    fillRule: "evenodd",
    strokeWidth: "3",
    strokeLinejoin: "round",
  };

  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="10 0 82 390"
      id="svg8"
      width="10"
      height="52"
      style={defaultStyle}
    >
      <g id="Layer_1" transform="translate(-2406.4391,268.81974)"></g>
      <path
        id="path1011"
        fill={props.color || "red"}
        d="m 46,132.3125 -16.117188,16.11719 v 23.57226 L 46,188.05078 62.117187,172.00195 v -23.57226 z m 0,89.63672 -16.117188,16.11719 v 23.57226 L 46,277.6875 62.117187,261.63867 v -23.57226 z"
      ></path>
    </svg>
  );
};
