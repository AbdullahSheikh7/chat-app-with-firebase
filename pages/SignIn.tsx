import GoogleSignInBtn from "@/component/GoogleSignInBtn"

const SignIn = () => {
  return (
    <div className="container">
      <div className="signin-left">
        <span className="background">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1" clipPath="url(#clip0_0_1)">
              <path id="Subtract" d="M512 0H0V512C53.1136 494.293 173.07 439.973 242.988 360.46C364.916 314.828 441.527 347.366 497.368 371.083L497.371 371.085C502.41 373.225 507.281 375.293 512 377.226L512 0Z" fill="url(#paint0_linear_0_1)" />
              <path id="Vector 1" d="M242.988 360.46C173.07 439.973 53.1136 494.293 0 512V377.226C92.7823 429.669 170.855 392.872 203.669 377.226C217.278 370.737 230.375 365.18 242.988 360.46C245.806 357.255 248.543 354.009 251.191 350.722C319.533 265.911 453.54 282.302 512 301.099V377.226C454.988 353.877 375.921 310.709 242.988 360.46Z" fill="#3475A5" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
                <stop stopColor="#02D4EB" />
                <stop offset="1" stopColor="#7660DC" />
              </linearGradient>
              <clipPath id="clip0_0_1">
                <rect width="512" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="logo">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#FFF" d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"></path><path fill="#FFF" d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path></svg></span>
          <h1>WhizChat</h1>
        </div>
      </div>
      <div className="signin-right">
        <GoogleSignInBtn />
      </div>
    </div>
  )
}

export default SignIn