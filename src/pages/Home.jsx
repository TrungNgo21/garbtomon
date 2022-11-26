import Banner1 from "../components/assets/pics/banner 1.png";
import Image1 from "../components/assets/pics/image 1.png";
import Truck from "../components/assets/pics/truck.png";
import Bottle from "../components/assets/pics/bottle.png";
import ItemsList from "../components/ItemsList";
import data from "../data/dataInfo";
import dataBenefits from "../data/dataBenifits";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="card rounded-none">
        <img src={Banner1} alt="Banner pic" />
      </div>
      <div className=" mt-6">
        <h1 className="font-bold text-4xl text-center">
          Can you save the world ?
        </h1>
        <p className="text-center mt-3">
          We make taking out the rubish more interesting
        </p>
      </div>
      <div className="text-center py-8">
        <Link
          to="/register"
          className="btn btn-info bg-[#3D589D] text-neutral-content uppercase rounded-2xl px-6 text-md md:text-xl xl:text-3xl"
        >
          Register
        </Link>
      </div>
      <div className="card sm:w-96 sm:mx-auto md:w-2/3 xl:w-3/4 mx-2 pb-16">
        <figure>
          <img src={Image1} alt="Hero pic" />
        </figure>
      </div>
      <div className="card bg-white mx-24 sm:w-1/3 sm:mx-auto mb-4">
        <div className="card-body">
          <div className="card-title">
            <img src={Truck} alt="" className="w-32 h-32 mx-auto" />
          </div>
          <p className="text-center text-2xl">
            We have <span className="font-semibold">collected</span>
          </p>
        </div>
      </div>
      <ItemsList data={data} />
      <div className="card bg-white mx-16 sm:mx-28 mb-12">
        <div className="card-body">
          <div className="card-title justify-center gap-6 flex-wrap">
            <img src={Bottle} alt="" className="w-20 h-20" />
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
            <img src={Bottle} alt="" className="w-20 h-20"/>
          </div>
          <p className="text-center text-xl sm:text-2xl mt-2"><span className="font-bold">50000</span> plastic drinking bottles has been recycle in every 3 months</p>
        </div>

      </div>
      <div className="bg-white mx-16 sm:mx-28 rounded-2xl my-4">
        <h1 className="font-semibold text-center text-3xl py-4">
          Benefits for you?
        </h1>
      </div>
      <ItemsList data={dataBenefits} />
    </div>
  );
}

export default Home;
