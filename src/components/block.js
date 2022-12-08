const block = {
  id: `section-${process.env.MODULE_ID}`,
  category: "Token Gates",
  label: `
    <?xml version="1.0" encoding="utf-8"?>
    <svg viewBox="0 0 266 150" width="266px" height="150px" xmlns="http://www.w3.org/2000/svg">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 0.078125 0 L 265.921875 0 L 265.921875 150 L 0.078125 150 Z M 0.078125 0 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(29.019608%,33.333333%,40.784314%);fill-opacity:1;" d="M 139.488281 140.613281 L 144.476562 135.121094 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(88.627451%,90.980392%,94.117647%);fill-opacity:1;" d="M 103.710938 130.878906 L 93.699219 113.34375 "/>
        <rect x="49.56" y="26.137" width="162.908" height="96.845" style="stroke-opacity: 0.81; stroke-linejoin: round; stroke-dasharray: 4px; opacity: 0.8; fill: rgb(227, 241, 236); stroke: rgb(18, 173, 106);"/>
        <g fill="#FFA000" transform="matrix(1, 0, 0, 1, 106.867538, 48.125359)">
            <polygon points="30,41 26,45 22,45 18,41 18,21 30,21 30,29 28,31 30,33 30,35 28,37 30,39" style="fill: rgb(255, 163, 3);"/>
            <path d="M38,7.8C37.5,6,36,4.7,34.3,4.2C31.9,3.7,28.2,3,24,3s-7.9,0.7-10.3,1.2C12,4.7,10.5,6,10,7.8 c-0.5,1.7-1,4.1-1,6.7c0,2.6,0.5,5,1,6.7c0.5,1.8,1.9,3.1,3.7,3.5C16.1,25.3,19.8,26,24,26s7.9-0.7,10.3-1.2 c1.8-0.4,3.2-1.8,3.7-3.5c0.5-1.7,1-4.1,1-6.7C39,11.9,38.5,9.5,38,7.8z M29,13H19c-1.1,0-2-0.9-2-2V9c0-0.6,3.1-1,7-1s7,0.4,7,1v2 C31,12.1,30.1,13,29,13z" style="fill: rgb(255, 163, 3);"/>
        </g>
        <rect x="129.868" y="74.125" fill="#D68600" width="2" height="19"/>
        </g>
    </svg>
  `,
  content: `
    <div id=${process.env.MODULE_ID}>
      <span>This is a token gated container. Add content inside and then remove this text.</span>
    </div>
    <style>
        #${process.env.MODULE_ID} {
          min-width: 100px;
          min-height: 50px;
        }
    </style>
  `,
};

export default block;
