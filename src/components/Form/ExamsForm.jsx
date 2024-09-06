import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const ExamsForm = ({ setCurrentPage }) => {
  const [exams, setExams] = useState([
    {
      name: "SAT",
      subjects: [
        { name: "Math", marks: "" },
        { name: "Reading", marks: "" },
        { name: "English", marks: "" },
        { name: "Science", marks: "" },
      ],
    },
    {
      name: "ACT",
      subjects: [
        { name: "Reading", marks: "" },
        { name: "Maths", marks: "" },
        { name: "English", marks: "" },
      ],
    },
  ]);

  const [showOtherExam, setShowOtherExam] = useState(false);
  const [newExam, setNewExam] = useState({
    name: "",
    subjects: [{ name: "", marks: "" }],
  });

  const handleAddExam = () => {
    if (newExam.name) {
      setExams([...exams, newExam]);
      setNewExam({ name: "", subjects: [{ name: "", marks: "" }] });
      setShowOtherExam(false); // Hide the creation part after adding
    }
  };

  const handleAddSubject = () => {
    setNewExam({
      ...newExam,
      subjects: [...newExam.subjects, { name: "", marks: "" }],
    });
  };

  return (
    <div className="mx-[-50px] mt-10">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Exam you have appeared for?
          </label>
          <select className="block w-full p-2 border border-gray-300 rounded">
            <option>Please select exam</option>
            {/* Add more options if needed */}
          </select>
        </div>

        {exams.map((exam, examIndex) => (
          <div key={examIndex} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{exam.name}</h2>

            <div className="grid grid-cols-2 gap-4">
              {exam.subjects.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="mb-4">
                  <p className="font-semibold">{subject.name}</p>
          
                  <input
                    type="number"
                    placeholder="Please enter mark"
                   
                    
                    className="p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showOtherExam}
              onChange={() => setShowOtherExam(!showOtherExam)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Any other exam given?</span>
          </label>
        </div>

        {showOtherExam && (
          <div className="mb-8">
            <div className="mb-4">
              <p className="mb-2 font-semibold">Exam name</p>
              <input
                type="text"
                placeholder="Please enter exam name"
                value={newExam.name}
                onChange={(e) =>
                  setNewExam({ ...newExam, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded w-[60%]"
              />
            </div>

            <div className="">
              {newExam.subjects.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="mb-4 flex justify-between w-full">
                  <div>
                    <p className="mb-2 font-semibold">Subject name</p>
                    <input
                      type="text"
                      placeholder="Subject Name"
                      value={subject.name}
                      onChange={(e) => {
                        const updatedSubjects = [...newExam.subjects];
                        updatedSubjects[subjectIndex].name = e.target.value;
                        setNewExam({ ...newExam, subjects: updatedSubjects });
                      }}
                      className="p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div>
                    {" "}
                    <p className=" font-semibold">Subject Mark</p>
                    <input
                      type="number"
                      placeholder="Subject Marks"
                      // value={subject.marks}
                      onChange={(e) => {
                        const updatedSubjects = [...newExam.subjects];
                        updatedSubjects[subjectIndex].marks = e.target.value;
                        setNewExam({ ...newExam, subjects: updatedSubjects });
                      }}
                      className="p-2 border border-gray-300 rounded mt-2"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleAddSubject}
                className="text-[white] bg-[#020246] p-2 rounded mt-2"
              >
                + Add Subject
              </button>
              <button
                type="button"
                onClick={handleAddExam}
                className="text-[white] bg-[#020246] p-2 rounded mt-2 ml-2"
              >
                + Add Exam
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-5">
        <button
          onClick={() => setCurrentPage("Activities")}
          className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
        >
          Continue <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default ExamsForm;
