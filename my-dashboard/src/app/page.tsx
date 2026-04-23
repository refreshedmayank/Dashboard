import Link from "next/link";
function Home(){
  return(<div  className="outer wall flex h-screen">

<div className="bg-black text-white border flex flex-col items-center justify-center p-6">
  <span>icon-01</span>
  <span>icon-02</span>
  <span>icon-03</span>
  <span>icon-04</span>
  <span>icon-05</span>
  <span>icon-06</span>
</div>
<div className="bg-black text-white dashboard flex-1 ">
  <div className="Header bg-black text-white flex justify-between items-center border mb-4 p-6">
    <span>Expenser</span>
    <div className="navitems flex gap-6 items-center">
      <Link href="">home</Link>
      <Link href="">support</Link>
      <Link href="">my account</Link>
      <input className="border" type="text" placeholder="search" />
    </div>
  </div>
  <div className="Cards-grid grid grid-cols-3 gap-3 p-4">
  <div className="Card border p-6 rounded flex flex-col justify-center items-center gap-2 h-48 rounded-xl bg-black text-white">
    <span>Monthly Income</span>
    <span>$40,000</span>
  </div>
  <div className="Card-2 border p-6 rounded flex flex-col gap-2 justify-center items-center rounded-xl bg-black text-white">
    <span>Monthly Expenses</span>
    <span>67%</span>
  </div>
  <div className="Card-3 border p-6 rounded flex flex-col gap-2 justify-center items-center rounded-xl bg-black text-white">
    <span>Savings</span>
    <span>$13,200</span>
  </div>
  </div>
  <div className="border p-9">Daily Expenses</div>
</div>



  </div>)
}
export default Home;