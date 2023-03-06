import React from 'react'

import { Props } from './props.type.js'

export const IdentityCard: React.FC<Props> = ({ width = 152, height = 152 }) => (
  <svg width={width} height={height} viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="76" cy="76" r="76" fill="white" />
    <path d="M28.4179 58.2438C27.9534 56.51 28.9823 54.7279 30.716 54.2634L85.8189 39.4986C87.5527 39.034 89.3348 40.0629 89.7994 41.7967L108.142 110.251C108.606 111.985 107.577 113.767 105.844 114.231L50.7406 128.996C49.0069 129.461 47.2248 128.432 46.7602 126.698L28.4179 58.2438Z" fill="white" stroke="#3B3552" strokeWidth="1.5" />
    <path d="M30.4691 85.2909L30.6632 86.0153L31.3877 85.8212L31.1935 85.0968L30.4691 85.2909ZM28.4416 77.7241L29.166 77.53L28.9719 76.8055L28.2475 76.9996L28.4416 77.7241ZM29.0202 85.6791L28.2958 85.8732L28.4899 86.5977L29.2143 86.4035L29.0202 85.6791ZM26.9927 78.1123L26.7986 77.3879L26.0741 77.582L26.2683 78.3064L26.9927 78.1123ZM23.4533 59.1076L24.1778 58.9135L23.4533 59.1076ZM28.5798 50.2282L28.7739 50.9526L29.4984 50.7585L29.3043 50.0341L28.5798 50.2282ZM25.6806 67.4201L24.9562 67.6142L25.6806 67.4201ZM27.2716 73.3575L27.4657 74.082L28.1901 73.8879L27.996 73.1634L27.2716 73.3575ZM25.8227 73.7458L25.0982 73.9399L25.2924 74.6643L26.0168 74.4702L25.8227 73.7458ZM24.2317 67.8083L24.9562 67.6142L24.2317 67.8083ZM22.0044 59.4958L21.28 59.6899L22.0044 59.4958ZM28.1916 48.7793L28.9161 48.5852L28.7219 47.8607L27.9975 48.0549L28.1916 48.7793ZM31.1935 85.0968L29.166 77.53L27.7171 77.9182L29.7447 85.485L31.1935 85.0968ZM29.2143 86.4035L30.6632 86.0153L30.275 84.5664L28.8261 84.9547L29.2143 86.4035ZM26.2683 78.3064L28.2958 85.8732L29.7447 85.485L27.7171 77.9182L26.2683 78.3064ZM28.2475 76.9996L26.7986 77.3879L27.1868 78.8368L28.6357 78.4485L28.2475 76.9996ZM24.1778 58.9135C23.2486 55.4459 25.3064 51.8818 28.7739 50.9526L28.3857 49.5037C24.118 50.6473 21.5853 55.034 22.7289 59.3017L24.1778 58.9135ZM26.4051 67.2259L24.1778 58.9135L22.7289 59.3017L24.9562 67.6142L26.4051 67.2259ZM27.996 73.1634L26.4051 67.2259L24.9562 67.6142L26.5471 73.5516L27.996 73.1634ZM26.0168 74.4702L27.4657 74.082L27.0775 72.6331L25.6286 73.0213L26.0168 74.4702ZM23.5073 68.0024L25.0982 73.9399L26.5471 73.5516L24.9562 67.6142L23.5073 68.0024ZM21.28 59.6899L23.5073 68.0024L24.9562 67.6142L22.7289 59.3017L21.28 59.6899ZM27.9975 48.0549C22.9296 49.4128 19.922 54.622 21.28 59.6899L22.7289 59.3017C21.5853 55.034 24.118 50.6473 28.3857 49.5037L27.9975 48.0549ZM29.3043 50.0341L28.9161 48.5852L27.4672 48.9734L27.8554 50.4223L29.3043 50.0341Z" fill="#3B3552" />
    <path fillRule="evenodd" clipRule="evenodd" d="M31.2413 58.9455C30.9554 57.8786 31.5886 56.7819 32.6555 56.496L86.1244 42.1691C87.1914 41.8832 88.288 42.5164 88.5739 43.5833L106.165 109.235C106.451 110.302 105.818 111.399 104.751 111.685L51.2822 126.012C50.2153 126.298 49.1186 125.665 48.8327 124.598L31.2413 58.9455Z" fill="#3040D6" fillOpacity="0.05" />
    <mask id="path-5-inside-1_0_2335" fill="white">
      <path fillRule="evenodd" clipRule="evenodd" d="M68.2148 32.6172C66.0057 32.6172 64.2148 34.4081 64.2148 36.6172V40.748H51.9531C49.744 40.748 47.9531 42.5389 47.9531 44.748V115.617C47.9531 117.826 49.744 119.617 51.9531 119.617H109C111.209 119.617 113 117.826 113 115.617V44.748C113 42.5389 111.209 40.748 109 40.748H96.7382V36.6172C96.7382 34.408 94.9473 32.6172 92.7382 32.6172H68.2148Z" />
    </mask>
    <path fillRule="evenodd" clipRule="evenodd" d="M68.2148 32.6172C66.0057 32.6172 64.2148 34.4081 64.2148 36.6172V40.748H51.9531C49.744 40.748 47.9531 42.5389 47.9531 44.748V115.617C47.9531 117.826 49.744 119.617 51.9531 119.617H109C111.209 119.617 113 117.826 113 115.617V44.748C113 42.5389 111.209 40.748 109 40.748H96.7382V36.6172C96.7382 34.408 94.9473 32.6172 92.7382 32.6172H68.2148Z" fill="white" />
    <path d="M64.2148 40.748V42.248H65.7148V40.748H64.2148ZM96.7382 40.748H95.2382V42.248H96.7382V40.748ZM65.7148 36.6172C65.7148 35.2365 66.8341 34.1172 68.2148 34.1172V31.1172C65.1772 31.1172 62.7148 33.5796 62.7148 36.6172H65.7148ZM65.7148 40.748V36.6172H62.7148V40.748H65.7148ZM51.9531 42.248H64.2148V39.248H51.9531V42.248ZM49.4531 44.748C49.4531 43.3673 50.5724 42.248 51.9531 42.248V39.248C48.9156 39.248 46.4531 41.7105 46.4531 44.748H49.4531ZM49.4531 115.617V44.748H46.4531V115.617H49.4531ZM51.9531 118.117C50.5724 118.117 49.4531 116.998 49.4531 115.617H46.4531C46.4531 118.655 48.9156 121.117 51.9531 121.117V118.117ZM109 118.117H51.9531V121.117H109V118.117ZM111.5 115.617C111.5 116.998 110.381 118.117 109 118.117V121.117C112.037 121.117 114.5 118.655 114.5 115.617H111.5ZM111.5 44.748V115.617H114.5V44.748H111.5ZM109 42.248C110.381 42.248 111.5 43.3673 111.5 44.748H114.5C114.5 41.7105 112.037 39.248 109 39.248V42.248ZM96.7382 42.248H109V39.248H96.7382V42.248ZM95.2382 36.6172V40.748H98.2382V36.6172H95.2382ZM92.7382 34.1172C94.1189 34.1172 95.2382 35.2365 95.2382 36.6172H98.2382C98.2382 33.5796 95.7757 31.1172 92.7382 31.1172V34.1172ZM68.2148 34.1172H92.7382V31.1172H68.2148V34.1172Z" fill="#3B3552" mask="url(#path-5-inside-1_0_2335)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M105.906 73.3885C107.826 72.8277 109.747 74.2677 109.747 76.2682V114.454C109.747 115.352 109.057 116.08 108.206 116.08H88.3546C86.6977 116.08 85.3545 114.737 85.3546 113.08L85.3551 95.1785C85.3551 93.8837 86.1866 92.7385 87.3983 92.2821C88.6032 91.8282 90.0603 91.2312 90.9438 90.6994C94.6727 88.4549 97.6224 85.0474 99.2908 80.979C99.7284 79.9121 100.131 78.1259 100.4 76.7646C100.625 75.6277 101.448 74.6906 102.56 74.3657L105.906 73.3885Z" fill="#3040D6" fillOpacity="0.05" />
    <path d="M69.0928 97.2571H91.8591" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M69.0928 105.388H91.8591" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="80.4762" cy="44.0006" r="4.8785" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="80.4765" cy="73.2714" r="16.2617" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M98.9221 61.2555L98.2941 61.6655L98.9221 61.2555ZM101.341 66.2406L100.631 66.48L101.341 66.2406ZM100.87 67.1908L100.631 66.48L100.87 67.1908ZM99.9198 66.7195L99.209 66.9589H99.209L99.9198 66.7195ZM97.666 62.0754L97.038 62.4854L97.666 62.0754ZM88.6873 52.8425L88.4074 53.5383V53.5383L88.6873 52.8425ZM87.7116 53.2584L88.4074 53.5383L88.4074 53.5383L87.7116 53.2584ZM96.5617 58.2454L96.0138 58.7575L96.5617 58.2454ZM96.5259 59.3054L97.038 59.8534H97.038L96.5259 59.3054ZM95.4658 59.2696L96.0138 58.7575L96.0138 58.7575L95.4658 59.2696ZM88.1275 54.2341L88.4074 53.5383H88.4074L88.1275 54.2341ZM99.5502 60.8456C99.0974 60.1519 98.1679 59.9566 97.4742 60.4094L98.2941 61.6655L99.5502 60.8456ZM102.052 66.0012C101.434 64.1664 100.589 62.4367 99.5502 60.8456L98.2941 61.6655C99.2643 63.1519 100.054 64.7672 100.631 66.48L102.052 66.0012ZM101.109 67.9015C101.894 67.6371 102.316 66.7863 102.052 66.0012L100.631 66.48L101.109 67.9015ZM99.209 66.9589C99.4734 67.744 100.324 68.166 101.109 67.9015L100.631 66.48L99.209 66.9589ZM97.038 62.4854C97.9398 63.867 98.6731 65.3679 99.209 66.9589L100.631 66.48C100.054 64.7672 99.2643 63.1519 98.2941 61.6655L97.038 62.4854ZM97.4742 60.4094C96.7805 60.8622 96.5852 61.7916 97.038 62.4854L98.2941 61.6655L97.4742 60.4094ZM88.9672 52.1467C88.1987 51.8375 87.325 52.2099 87.0158 52.9785L88.4074 53.5383L88.4074 53.5383L88.9672 52.1467ZM97.1097 57.7333C94.8562 55.3219 92.0832 53.4001 88.9672 52.1467L88.4074 53.5383C91.3167 54.7086 93.9076 56.5037 96.0138 58.7575L97.1097 57.7333ZM97.038 59.8534C97.6432 59.2877 97.6753 58.3385 97.1097 57.7333L96.0138 58.7575L96.0138 58.7575L97.038 59.8534ZM94.9179 59.7816C95.4835 60.3869 96.4327 60.419 97.038 59.8534L96.0138 58.7575V58.7575L94.9179 59.7816ZM87.8476 54.9299C90.5503 56.0171 92.959 57.6856 94.9179 59.7816L96.0138 58.7575C93.9076 56.5037 91.3167 54.7086 88.4074 53.5383L87.8476 54.9299ZM87.0158 52.9785C86.7066 53.747 87.079 54.6207 87.8476 54.9299L88.4074 53.5383L88.4074 53.5383L87.0158 52.9785Z" fill="#3B3552" />
    <circle cx="80.4763" cy="70.0193" r="6.50467" fill="#3040D6" />
    <path d="M70.501 86.0272C71.947 81.9126 75.867 78.9629 80.4758 78.9629C85.0973 78.9629 89.0261 81.9288 90.4625 86.0611" stroke="#3B3552" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M69.2607 23.6747L69.9119 23.3026L69.2607 23.6747ZM68.2374 23.3957L67.8653 22.7445H67.8653L68.2374 23.3957ZM79.0094 40.735L78.3582 41.1071H78.3582L79.0094 40.735ZM81.3142 41.3635L81.6863 42.0147H81.6863L81.3142 41.3635ZM81.9427 40.735L82.5939 41.1071L81.9427 40.735ZM82.3159 40.0819L81.6647 39.7098H81.6647L82.3159 40.0819ZM82.5825 39.6154L83.2337 39.9875H83.2337L82.5825 39.6154ZM83.6058 39.3363L83.9779 38.6851L83.6058 39.3363ZM83.8848 40.3596L84.536 40.7317V40.7317L83.8848 40.3596ZM83.6183 40.8261L82.9671 40.454H82.9671L83.6183 40.8261ZM83.2451 41.4792L82.5939 41.1071L83.2451 41.4792ZM82.0584 42.6659L82.4305 43.3171L82.0584 42.6659ZM77.707 41.4792L78.3582 41.1071L77.707 41.4792ZM67.9583 24.419L67.3071 24.7911H67.3071L67.9583 24.419ZM96.5049 18.2746L97.1561 18.6467V18.6467L96.5049 18.2746ZM96.2258 17.2513L96.5979 16.6001V16.6001L96.2258 17.2513ZM87.7652 33.5689L88.4164 33.941L87.7652 33.5689ZM86.742 33.848L87.1141 33.1968H87.1141L86.742 33.848ZM86.4629 32.8247L85.8117 32.4526L86.4629 32.8247ZM95.2025 17.5304L95.8537 17.9025V17.9025L95.2025 17.5304ZM69.9119 23.3026C69.5009 22.5834 68.5846 22.3335 67.8653 22.7445L68.6095 24.0468H68.6095L69.9119 23.3026ZM79.6606 40.3629L69.9119 23.3026L68.6095 24.0468L78.3582 41.1071L79.6606 40.3629ZM80.9421 40.7124C80.4917 40.9697 79.9179 40.8132 79.6606 40.3629L78.3582 41.1071C79.0266 42.2767 80.5166 42.6831 81.6863 42.0147L80.9421 40.7124ZM81.2916 40.3629C81.2084 40.5085 81.0877 40.6291 80.9421 40.7124L81.6863 42.0147C82.0644 41.7986 82.3778 41.4852 82.5939 41.1071L81.2916 40.3629ZM81.6647 39.7098L81.2916 40.3629L82.5939 41.1071L82.9671 40.454L81.6647 39.7098ZM81.9313 39.2433L81.6647 39.7098L82.9671 40.454L83.2337 39.9875L81.9313 39.2433ZM83.9779 38.6851C83.2586 38.2741 82.3423 38.524 81.9313 39.2433L83.2337 39.9875L83.9779 38.6851ZM84.536 40.7317C84.947 40.0124 84.6972 39.0962 83.9779 38.6851L83.2337 39.9875H83.2337L84.536 40.7317ZM84.2695 41.1982L84.536 40.7317L83.2337 39.9875L82.9671 40.454L84.2695 41.1982ZM83.8963 41.8513L84.2695 41.1982L82.9671 40.454L82.5939 41.1071L83.8963 41.8513ZM82.4305 43.3171C83.0412 42.9681 83.5473 42.462 83.8963 41.8513L82.5939 41.1071C82.3778 41.4852 82.0644 41.7986 81.6863 42.0147L82.4305 43.3171ZM77.0558 41.8513C78.1352 43.7402 80.5415 44.3965 82.4305 43.3171L81.6863 42.0147C80.5166 42.6831 79.0266 42.2767 78.3582 41.1071L77.0558 41.8513ZM67.3071 24.7911L77.0558 41.8513L78.3582 41.1071L68.6095 24.0468L67.3071 24.7911ZM67.8653 22.7445C67.146 23.1555 66.8961 24.0718 67.3071 24.7911L68.6095 24.0468L67.8653 22.7445ZM97.1561 18.6467C97.5671 17.9274 97.3172 17.0111 96.5979 16.6001L95.8537 17.9025V17.9025L97.1561 18.6467ZM88.4164 33.941L97.1561 18.6467L95.8537 17.9025L87.1141 33.1968L88.4164 33.941ZM86.3698 34.4992C87.0891 34.9102 88.0054 34.6603 88.4164 33.941L87.1141 33.1968H87.1141L86.3698 34.4992ZM85.8117 32.4526C85.4007 33.1719 85.6506 34.0882 86.3699 34.4992L87.1141 33.1968V33.1968L85.8117 32.4526ZM94.5513 17.1583L85.8117 32.4526L87.1141 33.1968L95.8537 17.9025L94.5513 17.1583ZM96.5979 16.6001C95.8786 16.1891 94.9623 16.439 94.5513 17.1583L95.8537 17.9025L95.8537 17.9025L96.5979 16.6001Z" fill="#3B3552" />
  </svg>
)

export default IdentityCard
