import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface WorkoutFormProps { 
  heading: string,
  saveButtonName: string,
  saveButtonColor?: string,
  onSubmitFrom: (data: WorkoutFormData) => void
}

const workoutSchema = z.object({
  workoutName: z.string().min(3, { message: "Workout name must be at least 3 characters" }),
  sets: z.number().int().positive({ message: "Sets must be a positive integer" }),
  reps: z.number().int().positive({ message: "Reps must be a positive integer" }),
  weight: z.number().int().positive({ message: "Weight must be a positive integer" }),
});

export type WorkoutFormData = z.infer<typeof workoutSchema>;

export function AddWorkoutForm({ heading, saveButtonName, saveButtonColor = "bg-blue",onSubmitFrom }: WorkoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<WorkoutFormData>({
    resolver: zodResolver(workoutSchema)
  });

  
  return (
    <main className="border rounded-md shadow-sm w-full p-3 mb-4">
      <form onSubmit={handleSubmit(onSubmitFrom)}>
        <p className="text-lg font-bold animate-pulse">{heading}</p>

        {/* Workout name section */}
        <section className="mx-4">
          <input
            className="border rounded-md shadow-sm w-full p-2"
            type="text" 
            placeholder="Workout name"
            {...register("workoutName")}
          />
          {errors.workoutName && (
            <div className="text-red-500 text-sm mt-1">
              {errors.workoutName.message}
            </div>
          )}
        </section>

        {/* Set, Reps, and Weight section */}
        <section className="grid grid-row-3 gap-2 mt-2 p-4 sm:gap-4 lg:gap-6 sm:grid-cols-3 w-full">
          <div>
            <input 
              {...register("sets", { valueAsNumber: true })}
              className="border rounded-md shadow-sm w-full p-2"
              type="number"
              placeholder="Set"
            />
            {errors.sets && (
              <div className="text-red-500 text-sm mt-1">
                {errors.sets.message}
              </div>
            )}
          </div>
          <div>
            <input
              {...register("reps", { valueAsNumber: true })}
              className="border rounded-md shadow-sm w-full p-2"
              type="number"
              placeholder="Reps"
            />
            {errors.reps && (
              <div className="text-red-500 text-sm mt-1">
                {errors.reps.message}
              </div>
            )}
          </div>
          <div>
            <input
              {...register("weight", { valueAsNumber: true })}
              className="border rounded-md shadow-sm w-full p-2"
              type="number"
              placeholder="Weight (KG)"
            />
            {errors.weight && (
              <div className="text-red-500 text-sm mt-1">
                {errors.weight.message}
              </div>
            )}
          </div>
        </section>

        {/* Add and cancel button section */}
        <div className="grid grid-rows-2 gap-2 sm:grid-cols-2 p-3">
          <button
            type="submit"
            className={`${saveButtonColor}-500 hover:${saveButtonColor}-700 text-white font-semibold py-2 px-4 rounded-md hover:font-bold`}
          >
            {saveButtonName}
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md hover:font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}