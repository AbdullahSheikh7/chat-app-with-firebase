import signout from "@/actions/signout"

const BtnSignout = () => {
  return (
    <button className="btn" onClick={signout}>Sign out</button>
  )
}

export default BtnSignout