import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const EducationForm = ({ setCurrentPage }) => {
  const [amount, setAmount] = useState(5000); // default value

  const handleSliderChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setAmount(value ? parseInt(value, 10) : 0); // Update amount with the numeric value
  };
  return (
    <div className="mx-[-50px]">
      <div className="w-full mt-14">
        <p className="text-[18px] mb-2 font-medium">Gender</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Male</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Female</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="w-full mt-5">
          <p className="text-[18px] mb-2 font-medium">Race or Ehincity</p>
          <select
            className="text-[14px] border rounded-md px-4 py-2 w-[100%] text-[#667085]"
            defaultValue=""
          >
            <option className="" value="" disabled>
              Please select option
            </option>
            <option value="1234567890">123-456-7890</option>
            <option value="0987654321">098-765-4321</option>
            <option value="5555555555">555-555-5555</option>
          </select>
        </div>

        <div className="w-full mt-5">
          <p className="text-[18px] mb-2 font-medium">Religious Belief</p>
          <select
            className="text-[14px] border rounded-md px-4 py-2 w-[100%] text-[#667085]"
            defaultValue=""
          >
            <option value="" disabled>
              Please select your religion
            </option>
            <option value="1234567890">123-456-7890</option>
            <option value="0987654321">098-765-4321</option>
            <option value="5555555555">555-555-5555</option>
          </select>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-[18px] mb-2 font-medium">High School</p>
        <input
          className="text-[14px] border rounded-md px-4 py-2 w-[47%]"
          type="text"
          placeholder="Please enter High School Name"
        />
      </div>

      <div className="flex justify-between gap-10">
        <div className="w-full mt-5">
          <p className="text-[18px] mb-2 font-medium">Grades</p>
          <input
            className="text-[14px] border rounded-md px-4 py-2 w-[100%]"
            name="grades"
            type="text"
            placeholder="Please enter Grades"
          />
        </div>

        <div className="w-full mt-5">
          <p className="text-[18px] mb-2 font-medium">Percentage/CGPA</p>
          <div className="flex">
            <div className="w-[20%] bg-[#020246] text-[white] flex justify-center items-center rounded-s-md">
              <p>%</p>
            </div>
            <div className="w-[]">
              {" "}
              <input
                className="text-[14px] border rounded-e-md px-4 py-2 w-[35%]"
                name="grades"
                type="text"
                placeholder="CGPA"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-[18px] mb-2 font-medium">Intermediate School</p>
        <input
          className="text-[14px] border rounded-md px-4 py-2 w-[47%]"
          type="text"
          name="intermediateSchool"
          placeholder=" Enter Intermediate School Name"
        />
      </div>
      <div className="w-full mt-5">
        <p className="text-[18px] mb-2 font-medium">
          Amount you can spend on college($)
        </p>
        <div className="flex items-center gap-4 w-[70%]">
          <input
            type="range"
            min="0"
            max="1000000"
            value={amount}
            onChange={handleSliderChange}
            className="w-full accent-[#020246]"
          />
        </div>
        <div className="mt-4">
            
          <input
            type="text"
            value={amount}
            onChange={handleInputChange}
            className="text-[14px] border rounded-md px-4 py-2 w-[48%]"
            placeholder="Amount"
          />
        </div>
      </div>

      <div className=" flex justify-end mt-5">
        <button
          onClick={() => setCurrentPage("Exams")}
          className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
        >
          Continue <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
