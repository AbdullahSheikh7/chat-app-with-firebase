import "@/css/spinner.scss"

const Spinner = () => {
  return (
    <>
      <svg width="50px" height="50px" viewBox="-16 -16 32 32" xmlns="http://www.w3.org/2000/svg" className="spinner">
        <circle className="animate" r={15} fill='none' strokeWidth={2} stroke="url(#paint0_linear_0_1)" />

        <defs>
          <linearGradient id="paint0_linear_0_1" x1="-16" y1="-16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#02D4EB" />
            <stop offset="1" stopColor="#7660DC" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default Spinner
