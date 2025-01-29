import { useEffect, useState } from "react";
import { AddWorkoutForm, WorkoutFormData } from "../../Componant/Form/AddWorkoutForm";
import { ExerciseCard } from "../../Componant/Card/ExerciseCard";


export interface workoutData {
    workoutName: string;
    workoutReps: number;
    workoutSet: number;
    workoutWeight?: number;
}



export function WorkOutPlan() {

    const [showAddWorkout, setShowAddWorkOut] = useState<boolean>(false);
    const [ exerciseFieldExpended , setExerciseFieldExpended ] = useState<boolean[]>([true]);
    const [workoutData, setWorkoutData] = useState<workoutData[]>([]);

    const handleShowAddWorkout = () => {
        setShowAddWorkOut(!showAddWorkout);
    }

     const handleExerciseFieldExpended = (index: number) => {
        const newExerciseFieldExpended = [...exerciseFieldExpended];
        if (index >= newExerciseFieldExpended.length) {
            newExerciseFieldExpended.push(false);
        }
        newExerciseFieldExpended[index] = !newExerciseFieldExpended[index];
        setExerciseFieldExpended(newExerciseFieldExpended);
    }
    
    const handleShowAddWorkoutForm = (data: WorkoutFormData) => {
        
        const newWorkout: workoutData = {
            workoutName: data.workoutName,
            workoutReps: data.reps,
            workoutSet: data.sets,
            workoutWeight: data.weight
        };

        setWorkoutData([...workoutData, newWorkout]);

        setShowAddWorkOut(false);
        
    };

    const handleUpdateWorkout = (index: number, data: WorkoutFormData) => {
        const newWorkoutData = [...workoutData];
        newWorkoutData[index] = {
            workoutName: data.workoutName,
            workoutReps: data.reps,
            workoutSet: data.sets,
            workoutWeight: data.weight
        };
        setWorkoutData(newWorkoutData);
    };
      useEffect(() => {
        setWorkoutData([
            { 
                workoutName: "Bench Press",
                workoutReps: 5,
                workoutSet: 3,
                workoutWeight: 200
            },
            {
                workoutName: "Push ups",
                workoutReps: 5,
                workoutSet: 3,
            }
        ]);
    }, []); 


    return (
      
        <div className="flex flex-col gap-4">
            
            {/* here will bew proper heading  */}
            <section className=" w-full border 
                rounded-xl shadow-sm p-4 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 
                text-white flex  flex-col justify-start items-start
                "
            >
                <span className="text-2xl font-bold">Work Out Plan</span>
                <span>Make your personalize work out plan</span>
            </section>

            {/* here will be add button  */}
            <section >
                <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors hover:font-bold w-full"
                    onClick={ handleShowAddWorkout }
                >
                    Add Workout
                </button>
            </section>

            {/* // i will add animation later here  */}
            {showAddWorkout && (
                <section className="mt-4 ">
                    <AddWorkoutForm
                        heading="Add Workout"
                        saveButtonName="Save"
                        onSubmitFrom={handleShowAddWorkoutForm}
                    />
                </section>
            )}
            

            {/* this section is used for show all workout data */}
            <section className=" ">
                <div className="flex  items-start p-3">
                    <span className="text-xl sm:text-2xl font-bold">All Workouts</span>
                </div>
                <div className="rounded-xl  p-4">
                    {workoutData.map((workout, index) => (
                        <ExerciseCard
                            key={index}
                            workout={workout}
                            onExpand={() => handleExerciseFieldExpended(index)}
                            isExpanded={exerciseFieldExpended[index] || false}
                            onSubmitFrom= { (data) => handleUpdateWorkout(index,data) }
                        />
                    ))}
                </div>
            </section>

        </div>
        
  )
}
