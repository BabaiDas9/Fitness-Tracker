interface WorkoutFormProps { 
  heading: string,
  saveButtonName: string
  saveButtonColor?: string
}

export function AddWorkoutForm({ heading,saveButtonName,saveButtonColor="bg-blue" }: WorkoutFormProps) {
  return (
      <main className="border rounded-md shadow-sm w-full p-3 mb-4">
      <p className="text-lg font-bold animate-pulse">{ heading}</p>

          {/* workout name section */}
          <section className="mx-4">
            <input
                className="border rounded-md shadow-sm w-full p-2"
                type="text" placeholder="Workout name" />
          </section>


          {/* set and rep and weight section */}
          <section className="grid grid-row-3 gap-2 
            mt-2 p-4
            sm:gap-4 lg:gap-6 sm:grid-cols-3 w-full">
              <input className="border rounded-md shadow-sm w-full p-2"
                  type="number"
                  placeholder="Set" />
              <input
                  className="border rounded-md shadow-sm w-full p-2"
                  type="number"
                  placeholder="Reps" />
              <input
                  className="border rounded-md shadow-sm w-full p-2"
                  type="number"
                  placeholder="Weight (KG)" />
          </section>

          
          {/* Add and cancel button section */}
          <div className="grid grid-rows-2 gap-2 sm:grid-cols-2 p-3
         
          "
          >
              <button
                  className={`${saveButtonColor}-500  hover:${saveButtonColor}-700 text-white font-semibold py-2 px-4 rounded-md 
                   hover:font-bold 
                  `}
              >{ saveButtonName}</button>
              <button
                  className={` bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md
                  hover:font-bold
                `}
              >Cancel</button>
          </div>

      </main>
  )
}

