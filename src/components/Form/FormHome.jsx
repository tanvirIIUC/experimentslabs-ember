import { useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import HeardAboutUsForm from "./HeardAboutUsForm";
import InterestAndGoalsForm from "./InterestAndGoalsForm";
import EducationForm from "./EducationForm";
import ExamsForm from "./ExamsForm";
import ActivitiesForm from "./ActivitiesForm";
import SuccessForm from "./SuccessForm";

const FormHome = () => {
  const [currentPage, setCurrentPage] = useState("Basic Details");
 

  const steps = [
    { name: "Basic Details", completed: false },
    { name: "Heard About Us", completed: false },
    { name: "Interest & Goals", completed: false },
    { name: "Education", completed: false },
    { name: "Exams", completed: false },
    { name: "Activities", completed: false },
    { name: "Success", completed: false },
  ];


const currentIndex = steps.findIndex(step => step.name === currentPage);

const updatedSteps = steps.map((step, index) => {
  return {
    ...step,
    completed: index <= currentIndex
  };
});


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" px-[200px] pb-[100px] pt-[80px] rounded-lg shadow-lg">
        <div className="">
          <div className="flex items-center">
            {updatedSteps.map((step, index) => (
              <div key={index} className="flex flex-col ">
                {/* Circle */}
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-6 h-6 rounded-full 
                    ${
                      step.completed
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>

                  {/* Line */}
                  {index < updatedSteps.length - 1 && (
                    <div
                      className={`h-1 w-20 
                    ${
                        updatedSteps[index + 1].completed ? "bg-blue-900" : "bg-gray-200"
                    }`}
                    ></div>
                  )}
                </div>

                {/* Step Label */}
                <div className="text-xs mt-2 ms-[-8px]">{step.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
            {
                currentPage === 'Basic Details' && <div> <BasicDetailsForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Heard About Us' && <div> <HeardAboutUsForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Interest & Goals' && <div> <InterestAndGoalsForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Education' && <div> <EducationForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Exams' && <div> <ExamsForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Activities' && <div> <ActivitiesForm setCurrentPage={setCurrentPage}/> </div>
            }
            {
                currentPage === 'Success' && <div> <SuccessForm setCurrentPage={setCurrentPage}/> </div>
            }
        
        </div>
      </div>
    </div>
  );
};

export default FormHome;
