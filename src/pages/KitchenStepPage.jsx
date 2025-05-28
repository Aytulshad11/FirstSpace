import React from 'react';

const KitchenStepPage = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Kitchen Layout' },
    { id: 2, name: 'Measurements' },
    { id: 3, name: 'Package' },
    { id: 4, name: 'Get Quote' },
  ];

  return (
    <div className="flex justify-between items-center px-4 py-6 bg-white shadow-md rounded-md w-full max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold
                  ${isCompleted ? 'bg-green-600 border-green-600 text-white' :
                    isActive ? 'bg-white border-green-600 text-green-600' :
                      'bg-white border-gray-300 text-gray-400'}`}
              >
                {step.id}
              </div>
              <span className="text-xs mt-2 text-gray-600">{step.name}</span>
            </div>
            {index !== steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2
                ${step.id < currentStep ? 'bg-green-600' : 'bg-gray-300'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default KitchenStepPage;
