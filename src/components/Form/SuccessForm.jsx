
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';

const SuccessForm = ({setCurrentPage}) => {
  return (
    <div className=" mt-10">
        <div className='flex flex-col justify-center items-center '>
            <div className='bg-[#EAFCF7] rounded-full w-[100Px] h-[100px] text-[#020246] flex justify-center items-center'>
           <DoneIcon style={{ fontSize: 50, fontWeight: 'extrabold' }} />
            </div>
            <p className='text-[18px] font-medium my-2'>Completed successfully</p>
            <p className='text-[14px] text-[#667085] mb-2'>Lets get your report and analysis for the growth.</p>

        </div>
  
      <div className=" flex justify-center gap-5 mt-5">
        <button 
       // onClick={() => setCurrentPage('Heard About Us')} 
        className="text-[white] bg-[#020246] px-4 py-2 rounded-md">See Report</button>
        <button
        // onClick={() => setCurrentPage('Heard About Us')} 
         className="text-[white] bg-[#020246] px-4 py-2 rounded-md">DashBoard </button>
      </div>
    </div>
  );
};

export default SuccessForm;
