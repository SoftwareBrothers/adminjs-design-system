export const lightenBg = (value: number) => ({
  backgroundImage: `linear-gradient(
    0deg,
    rgba(255,255,255,${value}) 0%,
    rgba(255,255,255,${value}) 100%);`,
})

export const darkenBg = (value: number) => ({
  backgroundImage: `linear-gradient(
    0deg,
    rgba(0,0,0,${value}) 0%,
    rgba(0,0,0,${value}) 100%);`,
})
