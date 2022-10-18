const characterProps = {
  width: 80,
  height: 60,
  viewBox: "0 0 180 120",
};

const pennantProps = {
  width: 120,
  height: 60,
  viewBox: "0 0 240 80",
};

const Clock = (props) => {
  return (
    <DefaultSvg
      id="CLOCK_FACE"
      width="100"
      height="100"
      viewBox="-10 -10 120 120"
      strokeWidth={3}
      divStyle={{ textAlign: "center" }}
    >
      <circle cx={50} cy={50} r={50} fill="white" />
      {new Array(12).fill(1).map((e, i) => {
        return (
          <g key={i} transform={`rotate(${(i / 12) * 360}, 50, 50)`}>
            <line x1="80" x2="100" y1="50" y2="50"></line>
          </g>
        );
      })}
      <line x1={50} y1={50} x2={50} y2={0} stroke="red" strokeWidth={3}></line>
      <g transform={`rotate(${360 - (props.time / 60) * 360}, 50,50)`}>
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="0"
          stroke="red"
          strokeWidth={5}
        ></line>
      </g>
      <text x={44} y={72} style={{ stroke: "red", fontSize: "23px" }}>
        {props.time}
      </text>
    </DefaultSvg>
  );
};

const ClassFlag = (props) => {
  const propsCopy = { ...props };
  propsCopy.divStyle = propsCopy.divStyle || {};
  propsCopy.divStyle.textAlign = propsCopy.divStyle.textAlign || "center";
  return (
    <DefaultSvg
      id="class-flag"
      {...characterProps}
      divStyle={propsCopy.divStyle}
    >
      <rect x={0} y={0} width={180} height={120} fill="white"></rect>
      <text x={55} y={50} style={{ stroke: "black", fontSize: "23px" }}>
        CLASS
      </text>
      <text x={61} y={80} style={{ stroke: "black", fontSize: "23px" }}>
        FLAG
      </text>
    </DefaultSvg>
  );
};

const STARBOARD = () => {
  return (
    <DefaultSvg id="STARBOARD" {...characterProps}>
      <path d="M 0, 120 h 180, L 90,0 z" fill="green" />
    </DefaultSvg>
  );
};

const SHORTER = () => {
  return (
    <DefaultSvg id="SHORTER" {...characterProps}>
      <rect x="0" y="0" width={180} height={120} fill="white" />
      <rect x="45" y="40" width={100} height={40} fill="black" />
    </DefaultSvg>
  );
};

const LONGER = () => {
  return (
    <DefaultSvg id="SHORTER" {...characterProps}>
      <rect x="0" y="0" width={180} height={120} fill="white" />
      <rect x="45" y="40" width={100} height={40} fill="black" />
      <rect x="75" y="10" width={40} height={100} fill="black" />
    </DefaultSvg>
  );
};

const A = () => {
  return (
    <DefaultSvg id="A" {...characterProps}>
      <rect fill="white" id="rect1990" width="90" height="120" x="0" y="0" />
      <path fill="white" d="m 180,0 -40,60 40,60 v 0" id="path1983" />
      <path
        fill="blue"
        id="rect1987"
        width="180"
        height="120"
        d="m 90,0 h 90 l -40,60 l 40,60 h -90z"
      />
    </DefaultSvg>
  );
};

const B = (props) => {
  return (
    <DefaultSvg id="B" {...characterProps} divStyle={props.divStyle}>
      <path fill="red" d="M 0,0 180,0 120,60 180,120 0,120" />
    </DefaultSvg>
  );
};

const C = (props) => {
  return (
    <DefaultSvg id="C" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect1992" x="0" y="0" width="180" height="120" fill="white" />
      <rect id="rect1994" x="0" y="0" width="180" height="24" fill="blue" />
      <rect id="rect1996" x="0" y="48" width="180" height="24" fill="red" />
      <rect id="rect1998" x="0" y="96" width="180" height="24" fill="blue" />
    </DefaultSvg>
  );
};

const D = () => {
  return (
    <DefaultSvg id="C" {...characterProps}>
      <rect id="rect2001" x="0" y="0" width="180" height="120" fill="blue" />
      <rect id="rect2003" x="0" y="0" width="180" height="40" fill="yellow" />
      <rect id="rect2007" x="0" y="80" width="180" height="40" fill="yellow" />
    </DefaultSvg>
  );
};

const H = () => {
  return (
    <DefaultSvg id="H" {...characterProps}>
      <rect id="rect2033" x="0" y="0" width="180" height="120" fill="red" />
      <rect id="rect2035" x="0" y="0" width="90" height="120" fill="white" />
    </DefaultSvg>
  );
};

const I = (props) => {
  return (
    <DefaultSvg id="I" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2430" x="0" y="0" width="180" height="120" fill="yellow" />
      <circle id="ellipse2473" cx="90" cy="60" r="30" />
    </DefaultSvg>
  );
};
const L = (props) => {
  return (
    <DefaultSvg id="L" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2475" y="0" width="180" height="120" fill="yellow" x="0" />
      <rect id="rect2477" x="0" y="60" width="90" height="60" fill="black" />
      <rect id="rect2547" x="90" y="0" width="90" height="60" fill="black" />
    </DefaultSvg>
  );
};

const M = (props) => {
  return (
    <DefaultSvg id="M" {...characterProps} divStyle={props.divStyle}>
      <rect y="0" width="180" height="120" fill="white" x="0" />
      <path fill="blue" d="M 0,10 L 75,60 L 0,110 Z" />
      <path
        fill="blue"
        d="M 0,10 L 75,60 L 0,110 Z"
        transform="rotate(180, 90, 60)"
      />
      <path fill="blue" d="M 10,0 L 90,50 L 170,0 Z" />
      <path
        fill="blue"
        d="M 10,0 L 90,50 L 170,0 Z"
        transform="rotate(180, 90, 60)"
      />
    </DefaultSvg>
  );
};
const N = () => {
  return (
    <DefaultSvg id="N" {...characterProps}>
      <rect id="rect2695" y="0" width="180" height="120" fill="white" x="0" />
      <rect id="rect2697" x="0" y="0" width="45" height="30" fill="blue" />
      <rect id="rect2777" x="90" y="0" width="45" height="30" fill="blue" />
      <rect id="rect2771" x="0" y="60" width="45" height="30" fill="blue" />
      <rect id="rect2779" x="90" y="60" width="45" height="30" fill="blue" />
      <rect id="rect2769" x="45" y="90" width="45" height="30" fill="blue" />
      <rect id="rect2781" x="135" y="90" width="45" height="30" fill="blue" />
      <rect id="rect2773" x="45" y="30" width="45" height="30" fill="blue" />
      <rect id="rect2863" x="135" y="30" width="45" height="30" fill="blue" />
    </DefaultSvg>
  );
};
const O = (props) => {
  return (
    <DefaultSvg id="O" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2549" x="0" y="0" width="180" height="120" fill="yellow" />
      <path id="path2553" d="M 0,0 180,120 V 0 Z" fill="red" />
    </DefaultSvg>
  );
};

const P = (props) => {
  return (
    <DefaultSvg id="P" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2865" x="0" y="0" width="180" height="120" fill="blue" />
      <rect id="rect2867" x="45" y="30" width="90" height="60" fill="white" />
    </DefaultSvg>
  );
};

const R = (props) => {
  return (
    <DefaultSvg id="R" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2963" x="0" y="0" width="180" height="120" fill="yellow" />
      <rect id="rect2967" x="0" y="0" width="60" height="40" fill="red" />
      <rect id="rect2991" x="120" y="0" width="60" height="40" fill="red" />
      <rect id="rect2987" x="0" y="80" width="60" height="40" fill="red" />
      <rect id="rect2989" x="120" y="80" width="60" height="40" fill="red" />
    </DefaultSvg>
  );
};

const S = (props) => {
  return (
    <DefaultSvg id="P" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2921" y="0" width="180" height="120" fill="white" x="0" />
      <rect id="rect2923" x="45" y="30" width="90" height="60" fill="blue" />
    </DefaultSvg>
  );
};

const U = (props) => {
  return (
    <DefaultSvg id="U" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect2588" y="0" width="180" height="120" fill="red" x="0" />
      <rect id="rect2590" x="0" y="60" width="90" height="60" fill="white" />
      <rect id="rect2592" x="90" y="0" width="90" height="60" fill="white" />
    </DefaultSvg>
  );
};

const X = (props) => {
  return (
    <DefaultSvg id="U" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect3099" x="0" y="0" width="180" height="120" fill="blue" />
      <rect id="rect3101" x="0" y="0" width="60" height="40" fill="white" />
      <rect id="rect3103" x="120" y="0" width="60" height="40" fill="white" />
      <rect id="rect3105" x="0" y="80" width="60" height="40" fill="white" />
      <rect id="rect3107" x="120" y="80" width="60" height="40" fill="white" />
    </DefaultSvg>
  );
};
const Y = (props) => {
  return (
    <DefaultSvg id="Y" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect3219" x="0" y="0" width="180" height="120" fill="yellow" />
      <path id="path3249" d="M 0,120 180,0 V 24 L 36,120 Z" fill="red" />
      <path id="path3271" d="M 72,120 180,48 v 24 l -72,48 z" fill="red" />
      <path id="path3353" d="m 144,120 36,-24 v 24 z" fill="red" />
      <path id="path3381" d="M 36,0 H 72 L 0,48 V 24 Z" fill="red" />
      <path id="path3383" d="m 108,0 h 36 L 0,96 V 72 Z" fill="red" />
    </DefaultSvg>
  );
};
const Z = (props) => {
  return (
    <DefaultSvg id="Z" {...characterProps} divStyle={props.divStyle}>
      <rect id="rect3385" x="0" y="0" width="180" height="120" fill="yellow" />
      <path id="path3387" d="M 0,0 90,60 0,120 Z" fill="black" />
      <path id="path3389" d="m 0,120 90,-60 90,60 z" fill="red" />
      <path id="path3391" d="M 180,120 90,60 180,0 Z" fill="blue" />
    </DefaultSvg>
  );
};

const BlankFlag = (props) => {
  return (
    <DefaultSvg
      id={`BLANK -${props.colour}`}
      {...characterProps}
      divStyle={props.divStyle}
    >
      <rect x="0" y="0" width={180} height={120} fill={props.colour} />
    </DefaultSvg>
  );
};

const FirstSub = (props) => {
  return (
    <DefaultSvg id="Z" {...characterProps} divStyle={props.divStyle}>
      <path fill="blue" d="M 0,0 L 180,60 L 0,120 Z" />
      <path
        fill="yellow"
        d="M 0,0 L 180,60 L 0,120 Z"
        transform="translate(-50,0)"
      />
      <line x1="0" y1="0" x2="0" y2="110" />
    </DefaultSvg>
  );
};

const Number1 = () => {
  return (
    <DefaultSvg id="1" {...pennantProps}>
      <path d="M 0,0 V 80 L 240,50 V 30 Z" fill="white" id="path3596" />
      <circle id="ellipse3598" cx="40" cy="40" fill="red" r="20" />{" "}
    </DefaultSvg>
  );
};

const Number2 = () => {
  return (
    <DefaultSvg id="2" {...pennantProps}>
      <path d="M 0,0 V 80 L 240,50 V 30 Z" fill="blue" id="path3596" />
      <circle id="ellipse3598" cx="40" cy="40" fill="white" r="20" />
    </DefaultSvg>
  );
};

const Number3 = (props) => {
  return (
    <DefaultSvg id="3" {...props}>
      <path fill="red" d="M 0,0 V 80 L 240,50 V 30 Z" id="path3804" />
      <path id="path3876" d="M 80,70 V 10 l 80,10 v 40 z" fill="white" />
      <path fill="blue" id="path3911" d="M 160,20 V 60 L 240,50 V 30 Z" />
    </DefaultSvg>
  );
};

const Number4 = (props) => {
  return (
    <DefaultSvg id="4" {...props}>
      <path id="path3947" d="M 0,0 V 80 L 240,50 V 30 Z" fill="white" />
      <path id="path4061" d="M 0,50 H 60 V 72.5 L 0,80 Z" fill="red" />
      <path id="path3949" d="M 0,0 V 30 H 60 V 7.5 Z" fill="red" />
      <path id="path4021" d="M 80,30 H 240 L 80,10 Z" fill="red" />
      <path id="path4059" d="M 80,50 H 240 L 80,70 Z" fill="red" />
    </DefaultSvg>
  );
};
const Number5 = (props) => {
  return (
    <DefaultSvg id="5" {...props}>
      <path fill="yellow" d="M 0,0 V 80 L 240,50 V 30 Z" id="path4273" />
      <path id="path4275" d="M 120,15 V 65 L 240,50 V 30 Z" fill="blue" />
    </DefaultSvg>
  );
};
const Number6 = (props) => {
  return (
    <DefaultSvg id="6" {...props}>
      <path fill="white" d="M 0,0 V 40 H 240 V 30 Z" id="path4347" />
      <path id="path4349" d="M 0,40 V 80 L 240,50 V 40 Z" fill="black" />
    </DefaultSvg>
  );
};
const Number7 = (props) => {
  return (
    <DefaultSvg id="7" {...props}>
      <path fill="yellow" d="M 0,0 V 40 H 240 V 30 Z" id="path4419" />
      <path id="path4421" d="M 0,40 V 80 L 240,50 V 40 Z" fill="red" />
    </DefaultSvg>
  );
};
const Number8 = (props) => {
  return (
    <DefaultSvg id="8" {...props}>
      <path fill="red" d="M 0,0 V 80 L 240,50 V 30 Z" id="path4096" />
      <path fill="white" d="M 0,50 H 60 V 72.5 L 0,80 Z" id="path4098" />
      <path id="path4100" d="M 0,0 V 30 H 60 V 7.5 Z" fill="white" />
      <path id="path4102" d="M 80,30 H 240 L 80,10 Z" fill="white" />
      <path id="path4104" d="M 80,50 H 240 L 80,70 Z" fill="white" />
    </DefaultSvg>
  );
};
const Number9 = (props) => {
  return (
    <DefaultSvg id="9" {...props}>
      <path fill="black" d="M 0,0 V 80 L 240,50 V 30 Z" id="path4598" />
      <path id="path4600" d="M 0,0 V 40 H 120 V 15 Z" fill="white" />
      <path id="path4639" d="M 0,40 H 120 V 65 L 0,80 Z" fill="red" />
      <path id="path4674" d="M 120,40 H 240 V 50 L 120,65 Z" fill="yellow" />
    </DefaultSvg>
  );
};
const Number0 = (props) => {
  return (
    <DefaultSvg id="0" {...props}>
      <path fill="yellow" d="M 0,0 V 80 L 240,50 V 30 Z" id="path4491" />
      <path id="path4493" d="M 80,70 V 10 l 80,10 v 40 z" fill="red" />
      <path id="path4495" d="M 160,20 V 60 L 240,50 V 30 Z" fill="yellow" />
    </DefaultSvg>
  );
};

const AP = () => {
  return (
    <DefaultSvg id="2" {...pennantProps}>
      <path fill="red" d="M 0,0 V 80 L 240,50 V 30 Z" id="path4742" />
      <path id="path4783" d="M48,6v68L96,68v-56z" fill="white" />
      <path id="path4818" d="M144,18v44L192,56v-32z" fill="white" />
    </DefaultSvg>
  );
};

const DefaultSvg = (props) => {
  const propsStyle = props.divStyle || {};
  const propsCopy = { ...props };
  delete propsCopy.divStyle;
  propsCopy["padding-bottom"] = propsStyle.paddingBottom || "5px";
  return (
    <div style={propsStyle}>
      <svg
        width={props.width}
        height={props.height}
        xmlns="http://www.w3.org/2000/svg"
        stroke="black"
        strokeWidth={1}
        {...propsCopy}
      >
        {props.children}
      </svg>
    </div>
  );
};

export function Sound(props) {
  const size = props.size ? props.size : "25px";
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      style={props.style}
    >
      <path d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z" />
    </svg>
  );
}

export function Repeat(props) {
  const size = props.size ? props.size : "25px";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      style={props.style}
    >
      <path d="M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z" />
    </svg>
  );
}

export function Up(props) {
  const size = props.size ? props.size : "25px";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={size}
      height={size}
      style={props.style}
    >
      <path d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128C323.1 149.9 323.1 170.1 310.6 182.6z" />
    </svg>
  );
}

export function Down(props) {
  const size = props.size ? props.size : "25px";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={size}
      height={size}
      style={props.style}
    >
      <path d="M9.375 329.4c12.51-12.51 32.76-12.49 45.25 0L128 402.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C-3.125 362.1-3.125 341.9 9.375 329.4z" />
    </svg>
  );
}

export {
  AP,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
  Number0,
  FirstSub,
  A,
  B,
  C,
  D,
  H,
  I,
  L,
  M,
  N,
  O,
  X,
  Y,
  Z,
  U,
  R,
  S,
  STARBOARD,
  ClassFlag,
  SHORTER,
  LONGER,
  Clock,
  P,
  BlankFlag,
};
