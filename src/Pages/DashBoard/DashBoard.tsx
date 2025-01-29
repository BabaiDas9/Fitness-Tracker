import { ChartBar } from "../../assets/Icon/allAppIcon"
import { ProgressBar } from "../../Componant/DashBoard/AllChart/ProgressBar"
import CalenderCard from "../../Componant/DashBoard/CalenderCard"
import { StatusCard } from "../../Componant/DashBoard/StatusCard"
import { WorkoutTable } from "../../Componant/DashBoard/WorkoutTable"
import Sidebar from "../../Componant/SideBar/SideBar"

function DashBoard() {
    return (
      <div className="flex min-h-screen">
          <Sidebar defaultExpanded={true}/>
        <div className="w-full">
          
          {/* Main Content */}
          <main className="w-full sm:grid grid-cols-2 sm:gap-8 ">

            {/* This section for only Card and process bar */}
            <section className="gap-6 p-4 w-full">
                {/* this section for only Card  */} 
                <section className=" flex flex-row  justify-between gap-2 sm:gap-2">
                  <StatusCard  name="Calories Burned" count="1000" />
                  <StatusCard name="Total Steps" count="2156" />
                  <StatusCard name="Total Steps" count="2156" />
                  
              </section>
              
              {/* this section for only process bar  */}
              <section className="">
                <img  className="h-64 w-full sm:h-96  mt-4"
                  src="https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"
                >
                </img>
              </section>

            </section>

            {/* this section for only calender */}
            <section  className="sm:mt-4 ">
              <CalenderCard />
            </section>
          </main>


          {/* This main section is for steps progress bar */}
          <section className="w-full grid grid-cols-1 gap-6 my-11 sm:grid-cols-2 sm:gap-8 ">
          
            <ProgressBar
                icon={<ChartBar  />}
                graphName="Steps"
                height={500}
                data={[{ day: 1, value: 50 }, { day: 2, value: 55 }, { day: 3, value: 63 }, { day: 4, value: 76 },
                  { day: 5, value: 50 }, { day: 6, value: 36 }, { day: 7, value: 153 }, { day: 8, value: 66 },

                ]}
              />

            <ProgressBar
                icon={<ChartBar  />}
                graphName="Calories Burned"
                height={500}
                data={[{ day: 1, value: 50 }, { day: 2, value: 55 }, { day: 3, value: 63 }, { day: 4, value: 76 },
                  { day: 5, value: 50 }, { day: 6, value: 36 }, { day: 7, value: 153 }, { day: 8, value: 66 },

                ]}
                />
          </section>
          

    
          


          {/* this section  is used for showing workout table*/}
          <section  className="h-[500px] overflow-auto">
            <WorkoutTable
              tableColumnNames={['Name', 'Set', 'Reps', 'Weight', 'Calories']}
              workoutData={[
                { workoutName: 'Bench Press', workoutSet: '3', workoutReps: '10', workoutWeight: '200', workoutCalories: '100' },
                { workoutName: 'Squat', workoutSet: '4', workoutReps: '8', workoutWeight: '150', workoutCalories: '80' },
                { workoutName: 'Deadlift', workoutSet: '2', workoutReps: '12', workoutWeight: '300', workoutCalories: '120' },
                
              ]}
              />
          </section>
          

          

        </div>
      </div>
  )
}

export default DashBoard