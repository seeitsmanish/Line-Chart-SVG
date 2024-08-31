import React from "react";
import "./App.css";
import LineChart from "./LineChart";
import TestCases from "./testcases";
// const bookingData = [
//   {
//     data: [
//       { label: "07-Aug", x: 0, y: 1 },
//       { label: "08-Aug", x: 1, y: 0 },
//       { label: "09-Aug", x: 2, y: 1 },
//       { label: "10-Aug", x: 3, y: 1 },
//       { label: "11-Aug", x: 4, y: 0 },
//       { label: "12-Aug", x: 5, y: 0 },
//       { label: "13-Aug", x: 6, y: 0 },
//     ],
//     color: "#F56D6D",
//     category: "Total Room Nights",
//   },
//   {
//     data: [
//       { label: "07-Aug", x: 0, y: 0 },
//       { label: "08-Aug", x: 1, y: 1 },
//       { label: "09-Aug", x: 2, y: 1 },
//       { label: "10-Aug", x: 3, y: 1 },
//       { label: "11-Aug", x: 4, y: 0 },
//       { label: "12-Aug", x: 5, y: 1 },
//       { label: "13-Aug", x: 6, y: 1 },
//     ],
//     color: '#0BD140',
//     category: "Confirmed Bookings",
//   }
// ];
function App() {
  return (
    <div>
      {TestCases.map((bookingData) => {
        return (
          <div className="mt-10">
            <div>
              <LineChart
                datasets={bookingData}
                height="800"
                width="1200"
                precision="0"
                // numberOfVerticalGuides={bookingData.length - 1}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
