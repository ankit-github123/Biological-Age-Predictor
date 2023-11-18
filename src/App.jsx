import BiologicalAge from "./BiologicalAge";
import hilogo from "../public/hilogo.png"
function App() {
  return (
    <>
      <div className="relative">
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="my-4 flex gap-4 items-center justify-center">
          <img src={hilogo} className="w-10 h-14 hidden sm:flex"/>
            <h1 className="text-6xl font-semibold orange_gradient text-center sm:text-start">
              Health Intelligence
            </h1>
          </div>
          <div className="w-[30%] h-[1px] bg-blue-200 m-auto">

          </div>
          <div className=" flex justify-center text-lg mt-5 text-center sm:text-start">
            Enter your blood test results into the following form to calculate
            your <br/> 
          </div>
          <div className="font-normal flex justify-center blue_gradient text-2xl"> Biological Age</div>
          <div className="flex justify-center">

            <BiologicalAge />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
