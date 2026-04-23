import Link from "next/link";
function Home(){
  return(<div>

<div className="border">sidebar</div>
<div className="border">
  <div className="Header">
    <span>Expenser</span>
    <div>
      <Link href="">home</Link>
      <Link href="">support</Link>
      <Link href="">my account</Link>
      <input className="border" type="text" placeholder="search" />
    </div>
  </div>
  <div className="Card">
    <span>Monthly Income</span>
    <span>$40,000</span>
  </div>
  <div className="Card-2">
    <span>Monthly Expenses</span>
    <span>67%</span>
  </div>
  <div className="Card-3">
    <span>Savings</span>
    <span>$13,200</span>
  </div>
  <div className="border">Chart</div>
  <div className="border">Table</div>
</div>



  </div>)
}
export default Home;