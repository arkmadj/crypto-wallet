interface StepInfo {
  name: string;
  subtext: string;
}

export interface StepProps {
  steps: StepInfo[];
}

const Step: React.FC<StepProps> = ({ steps }) => {
  return (
    <div className="flex space-x-20">
      {/* <p>OOOPS</p> */}
      {steps.map((step, index) => (
        <div key={index} className="w-1/3">
          <div>
            <p className="text-white text-xl font-bold">{step.name}</p>
          </div>
          <div className="flex items-center space-x-5">
            <p className="text-gray-400">{step.subtext} Step</p>
            <div>
              <div className="w-28 h-1/2 border-b-2 border-gray-400"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;