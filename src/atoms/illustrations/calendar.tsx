import React from 'react'

import { Props } from './props.type.js'

export const Calendar: React.FC<Props> = ({ width = 152, height = 152 }) => (
  <svg width={width} height={height} viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="76" cy="76" r="76" fill="white" />
    <rect x="46.5278" y="32.0166" width="68.7222" height="83.6444" rx="3.25" fill="white" stroke="#3B3552" strokeWidth="1.5" />
    <rect x="49.2891" y="34.7773" width="63.2" height="78.1222" rx="2" fill="#3040D6" fillOpacity="0.05" />
    <rect x="37.75" y="38.1611" width="68.7222" height="83.6444" rx="3.25" fill="white" stroke="#3B3552" strokeWidth="1.5" />
    <path d="M69.4775 63.3051H93.1775" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M69.4775 68.5727H82.6442" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="51.0444" y="60.2334" width="11.4111" height="11.4111" rx="2" fill="#3040D6" />
    <path d="M69.4775 87.0053H93.1775" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M69.4775 92.2719H82.6442" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="51.0444" y="83.9336" width="11.4111" height="11.4111" rx="2" fill="#3040D6" />
    <path d="M68.1632 31.6679C67.0497 28.3725 63.9325 26 60.2613 26C55.6558 26 51.9224 29.7334 51.9224 34.3389C51.9224 38.9443 55.6558 42.6778 60.2613 42.6778" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M92.7777 31.7796C91.6975 28.4262 88.5515 26 84.8389 26C80.2334 26 76.5 29.7334 76.5 34.3389C76.5 38.9443 80.2334 42.6778 84.8389 42.6778" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31.5 73V92" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M31.5 97V105" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default Calendar
