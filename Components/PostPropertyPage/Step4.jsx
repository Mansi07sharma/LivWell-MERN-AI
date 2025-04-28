import React from "react";

const Step4 = () => {
  return (
    <div className="step-content">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Terms & Conditions
      </h2>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input type="checkbox" id="termsAgree" className="hidden" />
          <label htmlFor="termsAgree" className="custom-checkbox"></label>
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="termsAgree" className="text-gray-700 cursor-pointer">
            I agree to the{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            . I confirm that all information provided is accurate
            and I have the right to list this property.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step4;
