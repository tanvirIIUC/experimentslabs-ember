import React, { useState } from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import activitiesData from "../../activitiesData.json";

const DialogBox = ({ isOpen, setIsOpen, setSaveActivities, saveActivities,setSaveOpen }) => {
  const [activity, setActivity] = useState("");
  const [selectActivity, setSelectActivity] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activityDetails, setActivityDetails] = useState();
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [descriptionText, setDescriptionText] = useState('');

  const activities = ["Chess", "Club Soccer","A Capella","Aspen Music Festival","Audio Engineer","Bagpipes","Band (Personal)", "Band (School)", "Chamber Orchestra", "Choir", "Church Choir", "Color Guard", "DJ-ing", "Glee Club", "Jazz Band", "Marching Band", "Music Club", "Music Composition", "Orchestra", "Pit Orchestra", "Rap", "Songwriting", "Sound Engineer", "Wind Ensemble","Acrobatics", "Aikido", "Aviation Enthusiast", "Ballet", "Bhangra", "Biking", "Billiards", "Birdwatching", "Blacksmithing", "BMX Biking", "Bullet Journaling", "CAD Design", "Cake Decorating", "Calligraphy", "Car Enthusiast", "Carpentry", "Cartography", "Coin Collecting", "Crochet", "Cross Stitching", "Dirt Biking", "Dog Training", "Drones", "Embroidery", "Fashion/Fashion Design", "Fishing", "Graphic Design", "Hairstyling", "HAM Radio", "Home Improvement", "Hunting", "Illustration", "Indian Classical Dance", "Interior Design", "Inventing", "Irish Dance", "Jewelry Making", "Jiujitsu", "Juggling", "Kayaking", "Kendo", "Kickboxing", "Knitting", "Krav Maga", "Kung Fu", "Landscape Design", "Latin Dance", "LEGO", "Magic: The Gathering", "Makeup", "Metalworking", "Model Airplanes", "Model Railroads", "Motorcycles", "Mountaineering", "Nail Art", "PC Construction", "Pilot", "Pokemon Go", "Puzzle and Sudoku", "Quilting", "Reading", "Rock Collecting", "Rubik’s Cube", "Running", "Scale Modeling", "Scuba Diving", "Sewing", "Skateboarding", "Sports Memorabilia", "Sports Statistics", "Stock Trading", "Surfing", "Tabletop Gaming", "Thrifting", "Vehicle Restoration", "Video Editing", "Wakeboarding", "Weaving", "Woodworking", "Yoga","Discord Server", "Family Responsibilities", "Instagram Account (Professional)", "Online Class", "Online Forum", "Podcasting", "Startup", "Streaming", "TikTok Account (Professional)", "Twitch Channel", "Venture-Backed Startup", "YouTube Channel","3D Modeling Club", "3D Printing Club", "A/V Club", "Academic Council", "Accounting Club", "Aerospace Engineering Club", "African Heritage Club", "American Meteorological Society", "American Society of Mechanical Engineers", "Anatomy Club", "Animal Rights Club", "Animation Club", "Anime Club", "Anthropology Club", "Arabic Culture Club", "Architecture Club", "Armenian Club", "Art History Club", "Artificial Intelligence Club", "Asian Cooking Club", "Astrology Club", "Astronomy Club", "Aviation Club", "Baking Club", "Ballroom Dancing Club", "Beauty Club", "Beekeeping Club", "Bible Study", "BioBuilder Club", "Biochem Club", "Biology Club", "Biomedical Engineering Club", "Black History Club", "Board Games Club", "Bollywood Club", "Book Club", "Botany Club", "Brazilian Club", "Break Dancing Club", "Broadcasting Club", "Business Club", "Call of Duty Club", "Calligraphy Club", "Cancer Awareness Club", "Car Club", "Cartooning Club", "Ceramics Club", "Chemistry Club", "Chess Club", "Chick-fil-A Leader Academy", "Chinese Club", "Chinese Yoyo Club", "Civics Club", "Civil War Reenactors", "Classical Music Club", "Climate Action Club", "Coffee Club", "Comics Club", "Computer Science Club", "Conservation Club", "Consulting Club", "Cooking Club", "Cornhole Club", "Cosmetology Club", "Criminal Justice Club", "Crossfit Club", "Culinary Club", "Current Events Club", "Cycling Club", "Dance Club", "Data Science Club", "Debate Club", "Dungeons & Dragons Club", "Eastern European Culture Club", "Eco Club", "Economics Club", "Electrical Engineering Club", "Electronics Club", "Energy Team", "Engineering Club", "Entrepreneurship Club", "Environmental Club", "Equestrian Club", "Ethics Club", "European History Club", "Fair Trade for Life", "Fantasy Sports Club", "Fashion Club", "Film Club", "Filmmaking Club", "Finance Club/Financial Literacy Club", "Fishing Club", "Foreign Affairs Club", "Foreign Film Club", "Forensic Science Club", "French Club", "Friendship Club", "Future Doctors of America", "Future Educators of America", "Future Engineers of America", "Future Farmers of America", "Future Law Professionals of America", "Future Physicians Club", "Future Teachers of America", "Game Development Club/Gaming Club", "Gardening Club", "Geography Club", "Geology Club", "German Club", "Graphic Design Club", "Grilling Club", "Gun Reform Club", "Hiking Club", "Hindi Club", "Hip Hop Club", "History Club", "Indian Culture Club", "International Club", "International Food Club", "International Relations Club", "Investing Club", "Irish Culture Club", "Jazz Club", "Journalism Club", "Junior Statesmen of America", "Junior World Affairs Council", "Karaoke Club", "Knitting Club", "Korean Club", "K-Pop Dance", "LARP Club", "Latin American Culture Club", "Latin Club", "Leadership Club", "Life Sciences Club", "Literature Club", "Magic Club", "Mahjong Club", "Makerspace Club", "Mandarin Club", "Marine Biology Club", "Marketing Club", "Math Club", "Meditation Club", "Mental Health Club", "Meteorology Club", "Microbiology Club", "Microfinance Club", "Middle East Culture Club", "Military History Club", "Minecraft Club", "Morning Announcements", "Mosaic Club", "Mountaineers Club", "Multicultural Club", "National Chinese Honor Society", "Nature Club", "Neurodiversity Club", "Neuroscience Club", "Nutrition Club", "Origami Club", "Outdoors Club", "Pen Pal Club", "Performing Arts Club", "Philosophy Club", "Photography Club", "Physics Club", "Ping Pong Club", "Poetry Club", "Political Discussion Club", "Politics Club", "Pre-Med Club", "Psychology Club", "Quidditch Club", "Religion Club", "Renaissance Faires", "Rifle Club", "ROBLOX Club", "Robotics Club", "Rock Climbing Club", "Rocketry Club", "Russian Club", "Sailing Club", "Science Club", "Shakespeare Club", "Sign Language Club", "Skateboard Club", "Slam Poetry Club", "Smash Club", "Spanish Club", "Sports Medicine Club", "Sportswriting Club", "Statistics Club", "STEM Club", "Strength and Fitness Club", "Sustainability Club", "TED-X", "Toastmasters Club", "Urban Planning Club", "Vegan Club", "Vegan/Vegetarian Club", "Veterans Support Club", "Vietnamese Culture Club", "Women In Science and Engineering (WISE)", "World War II Club", "Young Entrepreneurs Club", "Young Investors Society","Accounting Internship", "Babysitting", "Ballboy", "Barista", "Camp Counselor", "Cashier", "Childcare", "Concession Stand", "Corporate Internship", "Dishwasher", "Dog Walking", "Employment at Local Business", "Financial Analyst", "Fiverr", "Gymnastics Coach", "Hostess", "Internship", "Internship at Hospital", "Internship at Law Firm", "Landscaping", "Lawn Mowing", "Lifeguard", "Meal Delivery", "Public Relations", "Retail Worker", "School Radio Station", "School Store", "Snow Shoveling", "Social Media Management", "Waitress","4H Club", "ACE Mentor Program of America", "Achieve Miami", "Achilles International", "Adopt-a-Highway", "Alzheimer’s Awareness Club", "American Cancer Society", "American Civil Liberties Union", "American Diabetes Association", "American Heart Association", "American Kennel Club", "American Legion", "Amnesty International", "Anchor Club", "Animal Rescue League", "Animal Rights Club", "Anti-Defamation League", "Autism Awareness Club", "Autism Cares Foundation", "Baseball Coaching", "Basketball Coaching", "Beach Cleanup", "Best Buddies", "Big Brothers Big Sisters of America", "Blankets of Hope", "Blood Drive", "Boy Scouts", "Breast Cancer Awareness Club", "Cat Rescue", "Cesar Chavez Service Clubs (Chavista)", "Cheerleading Coach", "Church Camp", "City Youth Council", "Civil Air Patrol", "Climate March", "Community Outreach Club", "CPR Training", "CureSMA", "Dana-Farber Jimmy Fund", "DARE", "Do Something", "Doctors Without Borders", "Dog Rescue", "Earth Day", "Emergency Medical Technician (EMT/EMS)", "English Tutoring", "Epilepsy Foundation", "ESL Instruction and Tutoring", "Feed My Starving Children", "Feeding America", "Food Drive", "Fostering Animals", "Girl Scouts", "Girl Up", "GoFundMe", "Greenpeace", "Habitat For Humanity", "Heifer International", "Human Rights Club", "Humane Society", "Hunger Project", "Hurricane Relief", "Interact Club", "JUNTOS", "Key Club", "Kids Helping Kids", "KIVA Microfinance Club", "Kiwanis Club", "Leukemia and Lymphoma Society", "Link Crew", "Lions Club", "Make-A-Wish", "March for Life", "March of Dimes", "Meals on Wheels", "MEDLIFE", "Mission Trip", "Missionary Work", "National Charity League", "National Down Syndrome Society", "Operation Christmas Child", "Operation Smile", "PALS", "Park Cleanup", "Peer Leaders", "Peer Mentor", "Peer Tutoring", "PETA", "Recycling", "Red Cross Club", "Relay For Life", "Roots and Shoots", "Rotary Club", "Salvation Army", "Save Endangered Species Club", "School Ambassador", "Shadowing a Physician", "Sisters on the Runway", "Soccer Coaching", "Social Justice Club", "Special Olympics", "Student Ambassadors", "Students Against Destructive Decisions (SADD)", "Students Against Drunk Driving (SADD)", "Sunday School", "Tutoring", "UNICEF Club", "United Way", "Upward Bound", "VFW", "Volunteer at Elementary School", "Volunteer at Middle School", "Volunteer at Soup Kitchen", "Volunteer Trip", "Volunteer with Refugees", "Volunteering at Animal Shelter", "Volunteering at Children’s Hospital", "Volunteering at Food Bank", "Volunteering at Hospital", "Volunteering at Library", "Volunteering at Museum", "Volunteering at Nursing Home", "Volunteering Club", "Volunteering with the Homeless", "Walk to End Alzheimer’s", "Water Aid International (WAI)", "Wounded Warrior Project", "YMCA", "Youth Sports Coaching", "YWCA","Research Internship", "Research", "Science Research", "AP Research", "Independent Research", "Research Assistant", "Math Research", "Cancer Research", "Psychology Research", "Biology Research", "Physics Research", "Economics Research", "Neuroscience Research", "Engineering Research", "Humanities Research", "Medical Research", "Scientific Research","AAN Neuroscience Research Prize", "AAPT High School Physics Photo Contest", "Academic Challenge","Academic Decathlon", "Academic League", "Academic Pentathlon", "Academic Super Bowl", "Academic WorldQuest","Adventure Write Kids – Totem Head’s Story Contest", "AIME", "Alaska Airlines Imagine Tomorrow","American Invitational Mathematics Examination", "American Mathematics Competitions 10/12", "American Regions Math League (ARML)", "American Sleep Medicine Foundation High School Video Contest","Americanism Essay Contest", "Architectural Design Competition for High School", "Ayn Rand Institute Contest","B.E.S.T Robotics Design Contest", "Battlebots", "Biology League", "Biology Olympiad","Blue Ocean Entrepreneurship Competition", "Botball Educational Robotics Program","Brain Awareness Video Contest", "Capitol Hill Challenge", "Caribou Mathematics Competition", "Chemistry Bowl", "Chemistry Olympiad", "Clean Tech Competition", "Congressional Data Challenge","Congressional Debate", "Conrad Challenge", "Cooper Hewitt National Design Competition", "Creative Communication Poetry Contest", "C-SPAN’s StudentCam", "Cubes in Space", "Cyberpatriot","Davidson Fellows", "Debate Team", "DECA", "Destination ImagiNation", "Diamond Challenge", "Doodle 4 Google","Doors to Diplomacy – International Competition", "EconChallenge", "Economics Competition", "eCyberMission","Educators Rising", "EngineerGirl Writing Contest", "Engineering Team", "Entrepreneurship Competition","Envirothon", "Essay Contest", "Euro Challenge", "FCCLA Virtual Business Challenge", "Fed Challenge","Film Contest", "Finance Challenge", "FIRST Robotics", "Forensic Debate", "Forensics Team","Future Business Leaders of America (FBLA)", "Future Problem Solving Program International: International Scenario Writing", "Generation Nano: Superheroes inspired by Science", "Genius Olympiad", "Girl’s Go CyberStart Club","Google Science Fair", "Harvard/MIT Mathematics Tournament (HMMT)", "High School Innovation Challenge","HOSA", "Intel International Science and Engineering Fair", "International BioGENEius Challenge", "International Commerce Olympiad", "International Genetically Engineered Machine Competition", "International Olympiad of French", "InvestWrite", "Ithaca College High School Investment Competition", "Junior Achievement Entrepreneurship Classes", "Junior Classical League", "Junior Science and Humanities Symposium", "Kentucky Science & Engineering Fair", "Kids Philosophy Slam", "Knowledge @ Wharton Comment and Win", "Knowledge Bowl", "Lemonade Day", "LifeSmarts", "Lincoln-Douglas Debate", "Mandelbrot Competition", "Marine Advanced Technology Education (MATE) International ROV Competition", "Math League", "Mathematics Olympiad",  "Meridian Stories", "Microsoft Imagine Cup", "MIT INSPIRE", "Mock Trial", "Model Congress", "Model United Nations",  "NASA Human Exploration Rover Challenge", "National Academic Championship – Questions Unlimited", "National Academic League", "National Academic Quiz Tournament (NAQT)", "National DNA Day Essay Contest", "National Federation of Music Clubs- Junior Composer Contest (Class III & IV)", "National French Contest", "National Geographic Student Photo Competition", "National High School Design Competition", "National High School Essay Contest", "National High School Ethics Bowl", "National History Day", "National Ocean Science Bowl", "National Personal Finance Challenge", "National YoungArts Foundation", "National Youth Entrepreneurship Challenge", "National Economics Challenge", "Neuroscience for Kids Competitions", "North American Computational Linguistics Olympiad (NACLO)", "NSHSS Visual Arts Competition", "Odyssey of the Mind", "Paradigm Challenge", "Physics Olympiad", "Profile in Courage Essay Contest", "Programming Competition", "Questions Unlimited", "Quiz Bowl", "Regeneron Science Talent Search","River of Words: Youth Art and Poetry Inspired by the Natural World", "Robotics Team", "Rube Goldberg Machine Contest", "SAGE USA", "Science Bowl", "Science Fair", "Science Olympiad", "Siemens Competition", "SkillsUSA", "Solar Car Challenge", "SourceAmerica Design Challenge", 
    "Space Settlement Contest", "Speak Truth to Power Video Contest", "Speech & Debate", "Spelling Bee", "Stemanities Research Competition", "Stockholm Junior Water Prize", "Team America Rocketry Challenge (TARC)", "TEAMS Competition", "Technology Student Association", "Technovation Challenge", "The Coleopterists Society- Youth Incentive Award","The Green Idea", "The High School Bridge Building Contest", "The Stock Market Game","TOPPS Competition for High School Psychology Students", "Toshiba/NSTA Exploravision", "UIL Academics","University Interscholastic League", "USA Brain Bee", "Vans Custom Culture", "We the People Constitutional Competitions","Wharton High School Investment Competition", "World of 7 Billion Student Video Contest","World Series of Innovation", "Writing Contest", "Young Investors Society Global Stock Pitch Competition","Youth and Government","Media Club","Graphic Design","Video Game Design","Girls Who Code Summer Immersion Program (SIP)","Research Science Institute (RSI)","Art National Honor Society", "Beta Club", "Business National Honor Society", "California Scholarship Federation", "Dance National Honor Society", "Engineering National Honor Society",  "English National Honor Society", "French National Honor Society", "German National Honor Society","History National Honor Society", "Math Honor Society", "Mu Alpha Theta", "National Art Honor Society","National Honor Society", "Science National Honor Society", "Thespians International Honor Society", "Tri-M Music Honor Society","Choreography", "Community Theater", "Drama Club", "Filmmaking", "Improv Club","Mime", "Musical Theater", "Playwriting", "Puppetry", "School Musical", "School Play", "Stage Crew", "Standup Comedy", "Theater","Boys State", "Canvassing (elections)", "Congressional Page", "Girls State", "High School Democrats of America", "Internship with Senator", "Internship with Congressperson", "Local Government Internship", "Phonebanking (elections)", "Teenage Republicans", "Volunteer for Political Campaign", "Young Americans Foundation", "Young Democrats", "African American Club", "Asian Students Association", "Association of Latin-American Students (ALAS)", "Bible Camp", "Bible School", "Black Lives Matter", "Black Students Union", "Boycott, Divestment, Sanctions", "Caribbean Culture Club", "Chinese School", "Chinese Student Association", "Christians in Action", "Church Involvement","Climate Change Activism", "Diversity Awareness Club", "Fellowship of Christian Athletes", "Feminist Club", "Filipino-American Club", "Gay-Straight Alliance", "Gender and Sexuality Alliance","Girls Everywhere Meeting the Savior (GEMS)", "Girls in the Trades", "Girls Learn International", 
    "Girls Who Code", "Gun Control Activism", "Indian Students Association", "International Students Association", "International Women’s Club", "Italian Club","Japanese Club", "Jewish Culture Club", "Jewish Student Union", "Junior ROTC","Latino Students Union", "LGBTQ Club", "Mosque Involvement", "Multicultural Student Union","Muslim Student Union", "Muslim Students Association", "NAACP", "National Organization for Women","New Crew", "Nigerian Student Association", "Pacific Islander Student Association","Persian Club", "Racial Justice Club", "Society of Women Engineers", "South Asian Culture Club","Synagogue Involvement", "Teens Against Human Trafficking", "Temple Involvement","Women in Business", "Women in STEM Club", "Women’s March"];

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setActivity(value);

    const filteredSuggestions = activities.filter((act) =>
      act.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setActivity(suggestion);
    setSuggestions([]);
  };

  const selectActivitiesClick = () => {
    setSelectActivity(true);
    const selectedActivities = activitiesData?.find(
      (data) => data.activityName?.find(act=>act=== activity)
    );

    setActivityDetails(selectedActivities);
    setCurrentLevelIndex(0);
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < activityDetails?.levels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    }
  };

  const handlePreviousLevel = () => {
    if (currentLevelIndex > 0) {
      setCurrentLevelIndex(currentLevelIndex - 1);
    }
  };

  const getLevelNumber = (levelName) => {
    return parseInt(levelName.charAt(0), 10);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  }

  // const handleActivities = () => {
  //   if (typeof setSaveActivities === 'function') {
  //     setSaveActivities((prevActivities) => [
  //       ...prevActivities,
  //       {
  //         activityDetails,
  //         Description: descriptionText,
  //       },
  //     ]);
  //     closeDialog();
  //     setSaveOpen(false)
  //   } else {
  //     console.error('setSaveActivities is not a function');
  //   }

  //  // setIsOpen(false);
  // };
  console.log(activity)
  const handleActivities = () => {
    if (typeof setSaveActivities === 'function') {
      // Extract the current level details
      const currentLevel = activityDetails?.levels[currentLevelIndex];
      
      // Prepare the formatted activity details
      const formattedActivityDetails = {
        //activityName: activityDetails?.activityName,
        categoryName: activityDetails?.categoryName,
        levelName: currentLevel?.levelName,
        levelDetails: currentLevel?.levelDetails.map((details) => details?.detail),
      };
  
      // Save the activity
      setSaveActivities((prevActivities) => [
        ...prevActivities,
        {
          activityDetails: formattedActivityDetails,
          Description: descriptionText,
          activityName:activity,
        },
      ]);
      closeDialog();
      setSaveOpen(false);
    } else {
      console.error('setSaveActivities is not a function');
    }
  };
  

 

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen max-h-screen overflow-y-auto p-4 ">


      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Extracurricular Activity</h2>
          <button
            className="text-gray-500 hover:text-gray-700 w-[40px] h-[40px]"
            onClick={closeDialog}
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Add Activity to get an accurate result and grow yourself.
        </p>
        <div className="w-full flex justify-center items-center my-3">
          <div className="mb-6 w-[70%] my-5 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Activity
            </label>
            <input
              type="text"
              value={activity}
              onChange={handleInputChange}
              placeholder="Type to select"
              className="w-[80%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {suggestions.length > 0 && (
           <ul className="border border-gray-300 rounded-md mt-1 w-[80%] bg-white absolute z-10 max-h-48 overflow-y-auto">
           {suggestions.map((suggestion, index) => (
             <li
               key={index}
               onClick={() => handleSuggestionClick(suggestion)}
               className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
             >
               {suggestion}
             </li>
           ))}
         </ul>
         
            )}
          </div>
          {selectActivity && (
            <div className="flex gap-3">
              <p className="bg-[#020246] text-[white] rounded-md w-[40px] h-[40px] flex justify-center items-center">
                <KeyboardArrowUpIcon
                  onClick={handlePreviousLevel}
                  className="cursor-pointer"
                />
              </p>
              <p className="bg-[#020246] text-[white] rounded-md w-[40px] h-[40px] flex justify-center items-center">
                <KeyboardArrowDownIcon
                  onClick={handleNextLevel}
                  className="cursor-pointer"
                />
              </p>
            </div>
          )}
        </div>
        {selectActivity && (
          <div>
            <div className="flex justify-between border rounded-md p-5 w-full">
              <div className="w-[60%]">
                <p className="text-[#667085] font-semibold mb-3">
                  Category: {activityDetails?.categoryName}
                </p>
                {activityDetails?.levels && (
                  <>
                    <p className="font-semibold">
                      Level:{" "}
                      {activityDetails.levels[currentLevelIndex]?.levelName}
                    </p>
                    <p className="text-[#667085]">
                      I did the equivalent of ANY of the following:
                    </p>
                    <ul className="my-3 ms-3 list-disc list-inside">
                      {activityDetails.levels[
                        currentLevelIndex
                      ]?.levelDetails.map((details, i) => (
                        <li className="mb-2" key={i}>{details?.details}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="w-[30%]">
                <div>
                  {Array.from({ length: 4 }, (_, i) => (
                    <p
                      key={i}
                      className={`border p-2 text-center font-semibold ${
                        i === 0 ? "rounded-t-md" : ""
                      } ${i === 3 ? "rounded-b-md" : ""} ${
                        getLevelNumber(
                          activityDetails.levels[currentLevelIndex]?.levelName
                        ) ===
                        i + 1
                          ? "bg-green-200"
                          : ""
                      }`}
                    >
                      Level {i + 1}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-5">
              <p>Description (Optional)</p>
              <textarea
                placeholder="Summarize your role, highlighting specific achievements. Include quantifiable results (if possible) and skills developed"
                className="w-full border rounded-md mt-3 p-2"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={handleActivities}
                className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        )}
        {!selectActivity && (
          <div className="flex justify-end mt-5">
            <button
              onClick={selectActivitiesClick}
              className="text-[white] bg-[#020246] px-4 py-2 rounded-md"
            >
              Continue <ArrowForwardIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
