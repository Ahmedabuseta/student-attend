interface iProps {
 
}

const Loading = ({}:iProps) => {

return(
  // <div className="flex justify-center  items-center h-screen">
  <div className="absolute left-1/3 top-1/3 z-20 flex justify-center rounded-lg shadow-md bg-slate-50/30 backdrop-blur-md items-center gap-x-6 w-[300px] h-[180px]">
    <div className="h-16 w-16 rounded-full border-r-slate-50 border-2 border-black animate-spin"></div>
    <div className="text-lg font-bold">Loading...</div>
  </div>
// </div>


)
}
export default Loading;