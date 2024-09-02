import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const InterestAndGoalsForm = ({ setCurrentPage }) => {
  return (
    <div className="mx-[-50px]">
      <div className="w-full mt-20">
        <p className="text-[18px] mb-2 font-medium">Academic Interest</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="academicInterest"
                value="business"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Business</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="academicInterest"
                value="biology"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Biology</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="academicInterest"
                value="advertisement"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Advertisement</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="academicInterest"
                value="socialSciences"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Social Sciences</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="academicInterest"
                value="mathematics"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Mathematics</span>
            </label>
          </div>

          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="academicInterest"
                value="psychology"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Psychology</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="academicInterest"
                value="computerScience"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Computer Science</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="academicInterest"
                value="economics"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Economics</span>
            </label>
          </div>
          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="academicInterest"
                value="others"
                className="form-checkbox"
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

        <p className="text-[18px] mb-2 font-medium mt-5">Career Goal</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="careerGoal"
                value="careerStability"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Career stability</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="careerGoal"
                value="leadershipPosition"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Leadership Position</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="careerGoal"
                value="gainNewSkill"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Gain new skill</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="careerGoal"
                value="expandProfessionalNetwork"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Expand Professional Network</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="careerGoal"
                value="launchYourOwnBusiness"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Launch Your Own Business</span>
            </label>
          </div>

          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="careerGoal"
                value="others"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Others</span>
            </label>
          </div>
       
        </div>

        <p className="text-[18px] mb-2 font-medium mt-5">Personal Interests</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="personalInterests"
                value="travel"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Travel</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="personalInterests"
                value="music"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Music</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="personalInterests"
                value="sportsAndFitness"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Sports and Fitness</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="personalInterests"
                value="reading"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Reading</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                name="personalInterests"
                value="artAndCreativity"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Art and Creativity</span>
            </label>
          </div>

          <div className="">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="personalInterests"
                value="others"
                className="form-checkbox"
              />
              <span className="ml-2 text-[#667085]">Others</span>
            </label>
          </div>
       
        </div>
      
      </div>
      <div className=" flex justify-end mt-5">
        <button
          onClick={() => setCurrentPage("Education")}
          className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
        >
          Continue <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default InterestAndGoalsForm;
