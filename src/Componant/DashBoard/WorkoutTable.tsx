interface Props {
  tableColumnNames: string[]; // Array for column names
  workoutData: {
    workoutName: string;
    workoutSet: string;
    workoutReps: string;
    workoutWeight: string;
    workoutCalories: string;
    }[];
 
}

/**
 * A component that renders a table displaying workout data.
 *
 * @param {Object} props - The properties object.
 * @param {string[]} props.tableColumnNames - An array of column names for the table header.
 * @param {Object[]} props.workoutData - An array of workout data objects, each containing:
 *   @param {string} props.workoutData[].workoutName - The name of the workout.
 *   @param {string} props.workoutData[].workoutSet - The set information for the workout.
 *   @param {string} props.workoutData[].workoutReps - The number of repetitions for the workout.
 *   @param {string} props.workoutData[].workoutWeight - The weight used for the workout.
 *   @param {string} props.workoutData[].workoutCalories - The calories burned during the workout.
 * @returns {JSX.Element} A table element displaying the workout data.
 */

export function WorkoutTable({ tableColumnNames, workoutData }: Props) {
  return (
    <div className="overflow-auto rounded-lg shadow-lg mt-4">
      <table className="min-w-full border-collapse bg-white text-sm text-gray-700">
        {/* Table Header */}
        <thead className="bg-blue-600 text-white text-xs uppercase tracking-wider ">
          <tr>
            {tableColumnNames.map((colName, index) => (
              <th key={index} className="px-4 py-3 text-center">
                {colName}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {workoutData.map((workout, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-100 transition duration-200`}
            >
              <td className="px-4 py-3 font-bold">{workout.workoutName}</td>
              <td className="px-4 py-3 font-bold">{workout.workoutSet}</td>
              <td className="px-4 py-3 font-bold">{workout.workoutReps}</td>
              <td className="px-4 py-3 font-bold">{workout.workoutWeight}</td>
              <td className="px-4 py-3 font-bold">{workout.workoutCalories}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}
