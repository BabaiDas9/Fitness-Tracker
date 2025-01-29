export interface iconProps { 
  width?: string,
  height?: string,
  fill?: string,
}


export const ChartBar = ({ width, height, fill }: iconProps) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg" 
        fill={ fill || "none" }
        height={height || 22}
        width={width || 22}
        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>

    )
}
  
export const LeftArrow = ({ width, height, fill }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      height={height || 22} 
      width={width || 22}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


    )
}


export const RightArrow = ({ width, height, fill }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      height={height || 22}
      width={width || 22}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


    )
}


export const UpArrow = ({ width, height, fill }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || "none"}
      height={height || 22}
      width={width || 22}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}

