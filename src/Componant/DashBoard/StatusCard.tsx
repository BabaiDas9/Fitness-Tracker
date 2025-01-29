
export interface CardProp {
    name: string,
    count: string
}


/**
 * A DashBoard component that displays the status of an item with a name and a count.
 * Like my dashboard Have a card thats shows total calories burned  
 * that card is ideal for show total calories burned
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the item.
 * @param {number} props.count - The count associated with the item.
 * @returns {JSX.Element} A React element representing the status card.
 * 
 */


export function StatusCard (  { name, count }: CardProp) {
    return (
      
        <div
            className="flex-col shadow-md 
                border rounded-md p-6 
                h-32 sm:h-32 md:h-36  lg:h-40 xl:h-44  2xl:h-44 
                "
        >

            <div>
                <h1
                    className="font-bold
                    sm:text-sm lg:text-lg 2xl:text-2xl"
                >
                    {name}</h1>
            </div>
            <div>
                <p className="text-gray-600 font-semibold ">{count}</p>
            </div>

        </div>
        
  )
}
