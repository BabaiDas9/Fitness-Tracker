import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface BarChartProps {
    data: {
      day: number;
      value: number;
    }[];
    height: number;
    graphName: string;
    icon:JSX.Element

}

export function ProgressBar({ 
  data,
  height,
  graphName,
  icon
}: BarChartProps) {
  return (
      <div
          className="w-full h-auto border rounded-md shadow-sm bg-cyan-50 px-5 py-10 cur"
          style={{ height: `${height}px` }}>
          
          <div className="flex flex-row items-center ms-9 mb-3">
                {icon }
              <h1 className="text-md  sm:text-xl font-bold  mt-1 ms-3 ">{graphName}</h1>
          </div>

      <ResponsiveContainer width="100%" height="100%" >
        
        <BarChart data={data} >
          <XAxis dataKey="day"  />
          <YAxis dataKey="value"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#3A4DF1"  cursor={"pointer"}/>
        </BarChart>

      </ResponsiveContainer>
    </div>
  );
}
