import { useState } from "react";

function GreetingSelector() {
  const [timeOfDay, setTimeOfDay] = useState(""); // Track selected option

  const handleSelectChange = (event) => {
    setTimeOfDay(event.target.value);
  };

  const getMessage = () => {
    if (timeOfDay === "Morning") return "Good morning!";
    if (timeOfDay === "Afternoon") return "Good afternoon!";
    if (timeOfDay === "Evening") return "Good evening!";
    return "Please select a time of day.";
  };

  return (
    <div>
      <label>
        Select Time of Day:
        <select value={timeOfDay} onChange={handleSelectChange}>
          <option value="">--Select--</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </label>
      <p>{getMessage()}</p>
    </div>
  );
}

export default GreetingSelector;
