import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BasicDetailsForm = ({setCurrentPage}) => {
  return (
    <div className="mx-[-50px]">
      <div className="flex justify-between mt-20 gap-10">
        <div className="w-full">
          <div className="w-full">
            <p className="text-[18px] mb-2 font-medium">Full Name</p>
            <input
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              type="text"
              placeholder="Please enter your name"
            />
          </div>
          <div className="w-full mt-5">
            <p className="text-[18px] mb-2 font-medium">Phone Number</p>
            <input
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              type="text"
              placeholder="Please enter your number"
            />
          </div>
          <div className="w-full mt-5">
            <p className="text-[18px] mb-2 font-medium">State</p>
            <select
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              defaultValue=""
            >
              <option value="" disabled>
                Please select state
              </option>
              <option value="1234567890">123-456-7890</option>
              <option value="0987654321">098-765-4321</option>
              <option value="5555555555">555-555-5555</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <p className="text-[18px] mb-2 font-medium">E-mail</p>
            <input
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              type="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="w-full mt-5">
            <p className="text-[18px] mb-2 font-medium">Date of Birth</p>
            <input
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              type="Date"
              placeholder="Please enter your email"
            />
          </div>
          <div className="w-full mt-5">
            <p className="text-[18px] mb-2 font-medium">City</p>
            <input
              className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
              type="text"
              placeholder="Please enter your city"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-[18px] mb-2 font-medium">Education Level</p>
        <div className="flex gap-10">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="educationLevel"
              value="highSchool"
              className="form-radio"
            />
            <span className="ml-2 text-[#667085]">High School</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="educationLevel"
              value="intermediate"
              className="form-radio"
            />
            <span className="ml-2 text-[#667085]">Intermediate</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="educationLevel"
              value="college"
              className="form-radio"
            />
            <span className="ml-2 text-[#667085]">College</span>
          </label>
        </div>
      </div>
      <div className=" flex justify-end mt-5">
        <button onClick={() => setCurrentPage('Heard About Us')} className="text-[white] bg-[#020246] px-4 py-2 rounded-md">Continue <ArrowForwardIcon/></button>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
