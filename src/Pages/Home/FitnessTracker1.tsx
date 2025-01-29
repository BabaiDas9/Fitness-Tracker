export function FitnessTracker1() {

 const section = [
  {
    id: 'Start',
    component: (
      <div  className="h-screen flex justify-center items-center gap-24">

      {/* Text Content */}
      
      <div 
        className="  flex-col
           justify-items-start  "
           >
            

            {/* First Bold Text */}
            <div className="flex-col justify-items-start">
            <p className="font-bold xs:text-xl sm: text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              Join Legends Of
            </p>
            <p className="font-bold xs:text-xl  sm: text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-6" >
              Fitness World
            </p>
            </div>

            {/* Second  Text */}
            <div className="flex-col justify-items-start 
                2xl:mt-14 xl:mt-10 lg:mt-8 md:mt-6 sm:mt-4
                ">
              <p className="text-semibold font-semibold lg:text-lg md:text-md sm:text-sm xl:text-xl 2xl:text-3xl " >
                With our Platform, you can communicate with friends,
              </p>
              <p className="text-semibold font-semibold lg:text-lg md:text-md sm:text-sm xl:text-xl 2xl:text-3xl mt-3">
              share moments of built-in app feature
              </p>
            </div>

            {/* Email and button section */}
             <div className="flex mt-10"> 
                <input 
                  type="email"  
                  placeholder="Enter your email...." 
                  className="border rounded-md p-2
                  h-8 sm:h-10 md:h-10 lg:h-12 xl:h-12 2xl:h-12
                  w-24 sm:w-72 md:w-72 lg:w-80 xl:w-80 2xl:w-96"
                  />
                <button 
                  className="bg-blue-500 border rounded-md border-blue-500 ms-3 p-2 text-white
                  h-8 sm:h-10 md:h-10 lg:h-12 xl:h-12 2xl:h-12
                  w-24 sm:w-28 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
                >
                  Try for free
                </button>
            </div>

      </div>
      

        {/* Image Content */}
        <div className=" ">
              <div className="">
                <img src="https://images.unsplash.com/photo-1589579234096-25cb6b83e021?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="sm:w-36 sm:h-40 md:w-40 md:h-44 lg: w-48 lg:h-52 xl:w-64 xl:h-72 2xl:w-80 2xl:h-96  rounded-2xl object-cover 
                  "
                />
                
              </div>
        </div>

    </div>
  )

  } , 

  {
    id: 'Share',
    component: (
      <div className="h-[calc(100vh-60px)] flex justify-center items-center ">

        {/* Text row */}
        <div className="flex-col justify-items-start ">
          <p
           className="font-bold 
           xs:text-xl sm: text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl           
           "  
           >
            Share Progress
          </p>
          <p
           className="font-bold 
           xs:text-xl sm: text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl<
           sm:mt-2  lg:mt-5  2xl:mt-7 
           "  
           >
            With your friends
          </p>

          <p className="text-semibold font-semibold 
           sm:text-xs md:text-md lg:text-xl  xl:text-2xl 2xl:text-3xl 
           sm:mt-5  lg:mt-9  2xl:mt-16
           "   
          >
              Instead of doing exercise along 
          </p>

          <p className="text-semibold font-semibold 
           sm:text-xs md:text-md lg:text-xl  xl:text-2xl 2xl:text-3xl 
           sm:mt-1  lg:mt-2  2xl:mt-4
           "   
          >
              do with your friends 
          </p>

          <button className="bg-blue-500 border rounded-md border-blue-500 
              p-2 text-white
            sm:h-10  lg:h-16  2xl:h-20
            sm:w-44 lg:w-56  2xl:w-64
            sm:mt-5  lg:mt-9  2xl:mt-16
          "
          >
              Share your Progress
          </button>

          </div>

          {/* Image row */}
          <div className=" ">
              
                <img src="https://images.unsplash.com/photo-1589579234096-25cb6b83e021?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="sm:w-32 sm:h-48  lg:w-56 lg:h-80  2xl:w-72 2xl:h-96  rounded-2xl object-cover 
                  sm:ms-5  lg:ms-9  2xl:ms-16 2xl:mt-12
                  "
                />
                
        </div>

        {/* Text  col*/}
        <div className=" ">

          <div className="flex-col justify-items-start p-2 ms-4">
            
            <p className="font-extrabold
              sm:text-md  lg:text-xl   2xl:text-3xl
            "
            >
              Get Inspired
            </p>

            <div className="flex-col justify-items-start">
              <p  className="font-semibold 
              sm:text-sm  lg:text-md   2xl:text-2xl
            "
            >
                  what top people doing
              </p>
              <p 
              className="font-semibold
              sm:text-sm  lg:text-md  2xl:text-2xl
            "
              >
                  See Top leader
              </p>
            </div>

            <button className="bg-blue-500 border rounded-md border-blue-500 
              p-2 text-white
              sm:h-10  lg:h-16  2xl:h-20
              sm:w-44 lg:w-56  2xl:w-64
              sm:mt-5  lg:mt-9  2xl:mt-16
            "
            >
                Explore More
            </button>

          </div>


        </div>


      </div>
    )
  }


 ]



  return (

      <div>dfsjsn</div>

      
      

  )
}
