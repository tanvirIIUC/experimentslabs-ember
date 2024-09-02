import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeardAboutUsForm = ({ setCurrentPage }) => {
  return (
    <div className="mx-[-50px]">
      <div className="w-full mt-20">
        <p className="text-[18px] mb-2 font-medium">
          Where did you heard about us?
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="heardAboutUs"
                value="instagram"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">Instagram</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="heardAboutUs"
                value="linkedIN"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">LinkedIN</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="heardAboutUs"
                value="advertisement"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">Advertisement</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="heardAboutUs"
                value="googleSearch"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">Google Search</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="heardAboutUs"
                value="website"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">Website</span>
            </label>
          </div>

          <div className="">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="heardAboutUs"
                value="others"
                className="form-radio"
              />
              <span className="ml-2 text-[#667085]">Others</span>
            </label>
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="text-[18px] mb-2 font-medium">Please Specify.</p>
          <input
            className="text-[14px] border rounded-md px-4 py-2 w-[50%]"
            type="text"
            placeholder="Please enter"
          />
        </div>
      </div>
      <div className=" flex justify-end mt-5">
        <button
          onClick={() => setCurrentPage("Interest & Goals")}
          className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
        >
          Continue <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default HeardAboutUsForm;
