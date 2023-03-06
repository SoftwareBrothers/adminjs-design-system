import React from 'react'

import { Props } from './props.type.js'

export const AdminJSLogo: React.FC<Props> = ({ width = 113, height = 113 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 113 113"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter x="-18.8%" y="-13.4%" width="137.6%" height="137.6%" filterUnits="objectBoundingBox" id="a">
        <feOffset dy="5" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0.301960784 0 0 0 0 0.439215686 0 0 0 0 0.921568627 0 0 0 0.402289117 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <rect id="b" x="0" y="0" width="93" height="93" rx="20" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(10 5)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#4D70EB" xlinkHref="#b" />
      </g>
      <path
        d="M56.5 28 83 74H68.932l-3.282-5.698a5.632 5.632 0 0 0-4.63-2.815l-.25-.006h-8.54a5.632 5.632 0 0 0-4.88 2.82L44.066 74H30l26.5-46zm0 20.444c-3.114 0-5.638 2.543-5.638 5.68 0 3.136 2.524 5.678 5.638 5.678s5.638-2.542 5.638-5.679c0-3.136-2.524-5.679-5.638-5.679z"
        fill="#FFF"
      />
    </g>
  </svg>
)

export default AdminJSLogo
