import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import DialogBox from "./DialogBox";
import StarIcon from "@mui/icons-material/Star";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ActivitiesForm = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dialog visibility
  const [saveOpen, setSaveOpen] = useState(true); // State to manage dialog visibility
  const [saveActivities, setSaveActivities] = useState([]);

  //   const closeDialog = () => {
  //     setIsOpen(false);
  //   };
  console.log(saveActivities);
  return (
    <div className="">
      {saveOpen === true && (
        <>
          <div className="w-full mt-20">
            <p className="text-[18px] mb-2 font-medium">
              Extracurricular Activities
            </p>
            <button onClick={() => setIsOpen(true)} className="text-[#014CED]">
              Click here to add max up to 8 categories{" "}
            </button>
            <p className=" text-[#717171] text-[9px] mt-2">
              The more activities you will add the more will be your accuracy
              for growth
            </p>
          </div>
          <div className="flex justify-end mt-5">
            <button
              onClick={() => setCurrentPage("Interest & Goals")}
              className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
            >
              Continue <ArrowForwardIcon />
            </button>
          </div>
        </>
      )}
      {saveOpen === false && (
        <div className="mt-5">
          {saveActivities?.map((act) => (
            <>
              <div className=" border rounded-lg mt-5">
                <div className="flex justify-between items-center bg-[#020246] text-[White] rounded-t-lg p-3">
                  <div className="flex gap-2 items-center">
                    <div>
                      <StarIcon />
                    </div>
                    <div>
                      <p>{act?.activityName}</p>
                      <p className="text-[10px]">
                        {act?.activityDetails?.categoryName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <BorderColorIcon />
                  </div>
                </div>
                <div>
                  <p className="text-[#667085] p-3">
                    {act?.Description}
                  </p>
                </div>
              </div>
            </>
          ))}

          <div className="flex justify-between mt-5">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[white] bg-[#020246] px-4 py-2 rounded-md mt-10"
            >
              + Add Activity
            </button>
            <button
              onClick={() => setCurrentPage("Success")}
              className="text-[white] bg-[#020246] px-4 py-2 rounded-md mt-10"
            >
              Continue <ArrowForwardIcon />
            </button>
          </div>
        </div>
      )}

      {/* Modal is conditionally rendered here */}
      {isOpen && (
        <DialogBox
          setSaveOpen={setSaveOpen}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setSaveActivities={setSaveActivities}
          saveActivities={saveActivities}
        />
      )}
    </div>
  );
};

export default ActivitiesForm;
