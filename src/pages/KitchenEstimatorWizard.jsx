import React, { useState } from "react";
import essentialsImage from "../assets/KitchenEssentials.png";
import premium from "../assets/KitchenPremium.png";
import luxe from "../assets/KitchenLuxe.png";
import inside_parallel from "../assets/inside_parallel.png"
import inside_ushaped from "../assets/inside_ushaped.png"
import lshaped from "../assets/lshaped.png";
import ushaped from "../assets/ushaped.png";
import straight from "../assets/straight.png";
import parallel from "../assets/parallel.png";
import lshapedinside from "../assets/lshapedinside.png";
import insidestraight from "../assets/insidestraight.png";
import { useNavigate } from "react-router-dom";
import KitchenStepPage from "./KitchenStepPage"

const KitchenLayoutStep = () => {
  const navigate = useNavigate();
  const [selectedLayout, setSelectedLayout] = useState("");
  const [step, setStep] = useState(1);
  const [measurements, setMeasurements] = useState({
    A: "3",
    B: "8",
    UA: "10",
    UB: "11",
    UC: "10",
  });
  const [packageSelection, setPackageSelection] = useState("");
  const [finalQuote, setFinalQuote] = useState(null);

  const layouts = [
    {
      id: "l-shaped",
      name: "L-shaped",
      image: lshaped, // Replace with your actual image path
    },
    {
      id: "straight",
      name: "Straight",
      image: straight, // Replace with your actual image path
    },
    {
      id: "u-shaped",
      name: "U-shaped",
      image: ushaped, // Replace with your actual image path
    },
    {
      id: "parallel",
      name: "Parallel",
      image: parallel, // Replace with your actual image path
    },
  ];

  const handleLayoutSelect = (layoutId) => {
    setSelectedLayout(layoutId);
  };

  const handleNext = () => {
    if (step === 1 && selectedLayout) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3 && packageSelection) {
      setStep(4);
      generateQuote();
    } else if (step === 4) {
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      console.log("Going back to previous page");
    }
  };

  const generateQuote = () => {
    const basePrice = 50000;
    const layoutMultiplier =
      selectedLayout === "u-shaped"
        ? 1.3
        : selectedLayout === "l-shaped"
        ? 1.2
        : 1.0;
    const packageMultiplier =
      packageSelection === "premium"
        ? 1.5
        : packageSelection === "standard"
        ? 1.2
        : 1.0;

    const totalPrice = Math.round(
      basePrice * layoutMultiplier * packageMultiplier
    );

    setFinalQuote({
      layout: selectedLayout,
      measurements: measurements,
      package: packageSelection,
      totalPrice: totalPrice,
    });
  };

  const handleMeasurementChange = (dimension, value) => {
    setMeasurements((prev) => ({
      ...prev,
      [dimension]: value,
    }));
  };

  return (
    <div className="bg-white py-24 px-4 max-w-3xl w-full mx-auto">
      <KitchenStepPage currentStep={step} />
      {step === 1 && (
        <div className="bg-white py-16 px-8 max-w-4xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Select the layout of your kitchen
            </h2>
            <p className="text-gray-600">
              Want to know more.{" "}
              <span className="text-green-500 cursor-pointer hover:underline">
                Check here
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {layouts.map((layout) => (
              <div key={layout.id} className="flex flex-col items-center">
                <div
                  className={`relative cursor-pointer transition-all duration-200 ${
                    selectedLayout === layout.id
                      ? "transform scale-105"
                      : "hover:transform hover:scale-102"
                  }`}
                  onClick={() => handleLayoutSelect(layout.id)}
                >
                  <input
                    type="radio"
                    name="layout"
                    value={layout.id}
                    checked={selectedLayout === layout.id}
                    onChange={() => handleLayoutSelect(layout.id)}
                    className="absolute top-4 right-4 w-5 h-5 accent-green-500"
                  />
                  <div
                    className={`w-48 h-32 bg-green-50 rounded-lg border-2 overflow-hidden ${
                      selectedLayout === layout.id
                        ? "border-green-500"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <img
                      src={layout.image}
                      alt={layout.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  {layout.name}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/interiors")}
              className="text-green-600 hover:underline"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedLayout}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedLayout === "l-shaped" && (
        <div className="bg-white py-16 px-8 max-w-4xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Now review the measurements for accuracy
            </h2>

            {/* L-shaped Kitchen Diagram */}
            <div className="flex justify-center mb-8">
              <div className="relative bg-green-50 p-8 rounded-lg">
                <img
                  src={lshapedinside}
                  alt="L-shaped kitchen measurement diagram"
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>

            {/* Standard size notification */}
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-8 max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                Standard size has been set for your convenience
              </p>
            </div>

            {/* Measurement inputs */}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">A</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.A}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">B</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.B}
                    onChange={(e) =>
                      handleMeasurementChange("B", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedLayout === "straight" && (
        <div className="bg-white py-16 px-8 max-w-4xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Now review the measurements for accuracy
            </h2>

            {/* Straight Kitchen Diagram */}
            <div className="flex justify-center mb-8">
              <div className="relative bg-green-50 p-8 rounded-lg">
                <img
                  src={insidestraight}
                  alt="Straight kitchen measurement diagram"
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>

            {/* Standard size notification */}
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-8 max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                Standard size has been set for your convenience
              </p>
            </div>

            {/* Measurement input for straight layout */}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">B</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.B}
                    onChange={(e) =>
                      handleMeasurementChange("B", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedLayout === "u-shaped" && (
        <div className="bg-white py-16 px-8 max-w-4xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Now review the measurements for accuracy
            </h2>

            {/* Straight Kitchen Diagram */}
            <div className="flex justify-center mb-8">
              <div className="relative bg-green-50 p-8 rounded-lg">
                <img
                  src={inside_ushaped}
                  alt="Straight kitchen measurement diagram"
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>

            {/* Standard size notification */}
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-8 max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                Standard size has been set for your convenience
              </p>
            </div>

            {/* Measurement input for straight layout */}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">A</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.UA}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">B</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.UB}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">C</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.UC}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedLayout === "parallel" && (
        <div className="bg-white py-16 px-8 max-w-4xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Now review the measurements for accuracy
            </h2>

            {/* Straight Kitchen Diagram */}
            <div className="flex justify-center mb-8">
              <div className="relative bg-green-50 p-8 rounded-lg">
                <img
                  src={inside_parallel}
                  alt="Straight kitchen measurement diagram"
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>

            {/* Standard size notification */}
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-8 max-w-md mx-auto">
              <p className="text-yellow-800 text-sm">
                Standard size has been set for your convenience
              </p>
            </div>

            {/* Measurement input for straight layout */}
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">A</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.B}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <label className="text-xl font-semibold text-gray-700">B</label>
                <div className="flex items-center space-x-2">
                  <select
                    value={measurements.B}
                    onChange={(e) =>
                      handleMeasurementChange("A", e.target.value)
                    }
                    className="border border-gray-300 rounded px-3 py-2 bg-white min-w-[80px]"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 3} value={i + 3}>
                        {i + 3}
                      </option>
                    ))}
                  </select>
                  <span className="text-gray-600 font-medium">ft.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              BACK
            </button>
            <button
              onClick={handleNext}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      )}
      {/* Step 3: Package Selection */}
      {step === 3 && (
        <div className="bg-white py-24 px-6 max-w-3xl w-full mx-auto  border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-green-700">
            Pick your package
          </h2>
          <div className="space-y-4">
            {[
              {
                key: "Essentials (₹₹)",
                name: "Essentials (₹₹)",
                description:
                  "A range of basic units and accessories that are necessary for a comfortable modular kitchen.",
                features: [
                  "Affordable pricing",
                  "Convenient designs",
                  "Basic accessories",
                ],
                image: essentialsImage, // Replace with actual image
              },
              {
                key: "Premium (₹₹₹)",
                name: "Premium (₹₹₹)",
                description:
                  "An exquisite offering with sleek fixtures, hardware, cabinets and fittings for an elegant kitchen design.",
                features: [
                  "Mid-range pricing",
                  "Premium designs",
                  "Wide range of accessories",
                ],
                image: premium,
              },
              {
                key: "Luxe (₹₹₹₹)",
                name: "Luxe (₹₹₹₹)",
                description:
                  "A swanky kitchen package that's a fine blend of aesthetics and high functionality with chic-looking units and accessories.",
                features: [
                  "Elite pricing",
                  "Lavish designs",
                  "Extensive range of accessories",
                ],
                image: luxe,
              },
              {
                key: "Build your own package",
                name: "Build your own package",
                description:
                  "A flexible, built-to-suit option that lets you pick and choose from a collection of well-crafted finishes and accessories.",
                features: [
                  "Customised pricing",
                  "Flexible designs",
                  "Range of accessories to pick from",
                ],
              },
            ].map((pkg, index) => (
              <label
                key={index}
                className={`border rounded-lg p-4 flex gap-4 cursor-pointer transition ${
                  packageSelection === pkg.key
                    ? "border-green-600 shadow-sm"
                    : "border-gray-300"
                }`}
                onClick={() => setPackageSelection(pkg.key)}
              >
                <input
                  type="radio"
                  name="package"
                  className="hidden"
                  checked={packageSelection === pkg.key}
                  onChange={() => setPackageSelection(pkg.key)}
                />
                {pkg.image && (
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-28 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {pkg.description}
                  </p>
                  <ul className="text-green-600 text-sm space-y-1">
                    {pkg.features.map((feat, i) => (
                      <li key={i}>✔ {feat}</li>
                    ))}
                  </ul>
                </div>
              </label>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!packageSelection}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      
{step === 4 && (
        <div className="bg-white py-24 px-2 max-w-3xl w-full mx-auto border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
            Your estimate is almost ready
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex items-center border border-gray-300 rounded px-4 py-2">
              <span className="mr-2 text-gray-500">🇮🇳</span>
              <input
                type="tel"
                placeholder="Phone number"
                className="flex-1 outline-none"
              />
            </div>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                defaultChecked
                className="accent-green-600"
              />
              <span>Send me updates on WhatsApp</span>
            </label>

            <input
              type="text"
              placeholder="Property Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <p className="text-xs text-gray-500">
              By submitting this form, you agree to the{" "}
              <span className="text-green-600 underline cursor-pointer">
                privacy policy
              </span>{" "}
              &{" "}
              <span className="text-green-600 underline cursor-pointer">
                terms and conditions
              </span>
              .
            </p>
            <p className="text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service</span> apply.
            </p>

            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                onClick={handleBack}
                className="text-green-600 hover:underline"
              >
                BACK
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
              >
                GET MY ESTIMATE
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default KitchenLayoutStep;
