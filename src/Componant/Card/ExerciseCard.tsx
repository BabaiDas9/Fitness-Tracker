import { UpArrow } from "../../assets/Icon/allAppIcon";
import { workoutData } from "../../Pages/Workout/WorkOutPlan";
import { AddWorkoutForm, WorkoutFormData } from "../Form/AddWorkoutForm";

interface ExerciseCardProps {
  workout: workoutData;
  onExpand: () => void;
  isExpanded: boolean;
  onSubmitFrom: (  data: WorkoutFormData) => void
}

export function ExerciseCard({ workout, onExpand, isExpanded,onSubmitFrom  }: ExerciseCardProps) {
    return (
      <div className="border rounded-xl shadow-sm overflow-hidden mb-2">
      <div className="flex justify-between items-center p-3 bg-gray-100 cursor-pointer" onClick={onExpand}>
        <div className="flex items-center gap-2 ">
            <div className={ !isExpanded ? "rotate-180" : ""}> 
                <UpArrow  />
            </div>
          <span>{workout.workoutName}</span>
        </div>
        <div className="flex gap-2">
          <span>{workout.workoutReps} reps</span>
          <span>{workout.workoutSet} sets</span>
          {workout.workoutWeight && <span>{workout.workoutWeight}Kg</span>}
        </div>
      </div>
      {isExpanded && (
        <div className="p-3 bg-white">
            <AddWorkoutForm
              heading="Update Workout"
              saveButtonName="Update"
              saveButtonColor="bg-green"
              onSubmitFrom={onSubmitFrom}
            />
        </div>
      )}
    </div>
  )
}
