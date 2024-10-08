import Otp from "./OTP";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full bg-gray-500">
      <h1 className="text-5xl text-teal-300">OTP Input</h1>
      <Otp length={4} />
    </div>
  );
}

export default App;
