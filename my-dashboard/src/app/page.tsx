import Link from "next/link";
function Home(){
  return(<div className="outer wall flex h-screen">

<div className="border flex flex-col items-center justify-center">
  <span>icon-01</span>
  <span>icon-02</span>
  <span>icon-03</span>
  <span>icon-04</span>
  <span>icon-05</span>
  <span>icon-06</span>
</div>
<div className="border dashboard flex-1">
  <div className="Header flex justify-between items-center border ">
    <span>Expenser</span>
    <div className="navitems flex gap-6 items-center">
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