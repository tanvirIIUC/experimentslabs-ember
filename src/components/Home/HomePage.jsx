import { Link } from "react-router-dom";
import home1 from "../../assets/home1.png";

const HomePage = () => {
  return (
   
      <div className="flex flex-col items-center justify-between min-h-screen ">
     
        <div className="text-center mb-8 mt-[80px]">
          <h1 className="text-[50px] font-semibold mb-2">Welcome to Ember!</h1>
          <p className="text-[38px] font-normal">Let’s get started on building your future.</p>
        </div>
        <div className="text-center mb-8 ">
         <Link to='/form' className="bg-[#1D1D1B] text-[white] px-5 text-[18px] py-3 rounded-md"> Get started</Link>
        </div>

        <div>
          <img src={home1}/>
        </div>


      </div>
  
  );
};

export default HomePage;
