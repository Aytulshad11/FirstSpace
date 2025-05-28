import { useState, useEffect } from "react";
import essentialsImage from "../assets/essentials.jpg";
import premium from "../assets/premium.jpg";
import luxe from "../assets/luxe.jpg";
import { useNavigate } from "react-router-dom";
import StepProgressBar from "./StepProgressBar";

export default function InteriorEstimatorWizard() {
  const [step, setStep] = useState(1);
  const [bhkType, setBhkType] = useState(null);
  const [bhkSize, setBhkSize] = useState(null);
  const [packageType, setPackageType] = useState(null);
  const [roomCounts, setRoomCounts] = useState({});
  const navigate = useNavigate();
  const maxRoomCounts = {
    "1 BHK": 1,
    "2 BHK": 2,
    "3 BHK": 3,
    "4 BHK": 4,
    "5 BHK+": Infinity,
  };

  const bhkSizes = {
    "2 BHK": ["Small (Below 800 sq ft)", "Large (Above 800 sq ft)"],
    "3 BHK": ["Small (Below 1200 sq ft)", "Large (Above 1200 sq ft)"],
    "4 BHK": ["Small (Below 1800 sq ft)", "Large (Above 1800 sq ft)"],
  };

  const defaultRooms = {
    "1 BHK": { Living: 1, Kitchen: 1, Bedroom: 1, Bathroom: 1, Dining: 1 },
    "2 BHK": { Living: 1, Kitchen: 1, Bedroom: 2, Bathroom: 2, Dining: 1 },
    "3 BHK": { Living: 1, Kitchen: 1, Bedroom: 3, Bathroom: 3, Dining: 1 },
    "4 BHK": { Living: 1, Kitchen: 1, Bedroom: 4, Bathroom: 4, Dining: 1 },
    "5 BHK+": { Living: 2, Kitchen: 1, Bedroom: 5, Bathroom: 5, Dining: 1 },
  };

  useEffect(() => {
    if (bhkType && step === 2) {
      setRoomCounts(defaultRooms[bhkType] || {});
    }
    if (["2 BHK", "3 BHK", "4 BHK"].includes(bhkType)) {
      setBhkSize(bhkSizes[bhkType][0]);
    } else {
      setBhkSize(null);
    }
  }, [bhkType, step]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const updateRoom = (room, change) => {
    setRoomCounts((prev) => {
      const newValue = (prev[room] || 0) + change;
      const max = maxRoomCounts[bhkType] ?? Infinity;

      if (newValue < 0 || newValue > max) return prev; // block invalid changes
      return { ...prev, [room]: newValue };
    });
  };

  return (
    <div className="bg-white py-24 px-4 max-w-3xl w-full mx-auto">
      <StepProgressBar currentStep={step} />
      {step === 1 && (
        <div className="bg-white py-24 px-4 max-w-3xl w-full mx-auto border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6">Select your BHK type</h2>

          <div className="space-y-4">
            {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"].map((type) => (
              <div key={type} className="p-4 border rounded-lg flex flex-col">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="bhk"
                    value={type}
                    onChange={() => setBhkType(type)}
                    checked={bhkType === type}
                  />
                  <span>{type}</span>
                </label>

                {bhkType === type && bhkSizes[type] && (
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {bhkSizes[type].map((s, i) => (
                      <label
                        key={i}
                        className={`p-2 border rounded cursor-pointer transition ${
                          bhkSize === s
                            ? "border-green-500 text-green-600 font-semibold"
                            : "hover:border-green-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          onChange={() => setBhkSize(s)}
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => navigate("/interiors")}
              className="text-green-600 hover:underline"
            >
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!bhkType}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white py-24 px-2 max-w-3xl w-full mx-auto border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">
            Select the rooms you'd like us to design
          </h2>

          <div className="space-y-3 mt-4">
            {Object.entries(roomCounts).map(([room, count]) => (
              <div
                key={room}
                className="flex justify-between items-center border p-3 rounded-lg"
              >
                <span className="font-medium">{room} Room</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateRoom(room, -1)}
                    className="text-white bg-green-600 w-7 h-7 rounded-full flex items-center justify-center"
                  >
                    −
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => updateRoom(room, 1)}
                    disabled={count >= (maxRoomCounts[bhkType] ?? Infinity)}
                    className={`text-white bg-green-600 w-7 h-7 rounded-full flex items-center justify-center ${
                      count >= (maxRoomCounts[bhkType] ?? Infinity)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={handleBack}
              className="text-green-600 hover:underline"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white py-24 px-6 max-w-3xl w-full mx-auto border border-gray-300 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-green-700">
            Pick your package
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Essentials",
                description: "Basic interiors for functionality and comfort.",
                features: [
                  "Affordable pricing",
                  "Convenient designs",
                  "Basic accessories",
                ],
                image: essentialsImage,
              },
              {
                name: "Premium",
                description:
                  "Stylish interiors with a balance of cost and luxury.",
                features: [
                  "Mid-range pricing",
                  "Premium designs",
                  "Wide range of accessories",
                ],
                image: premium,
              },
              {
                name: "Luxe",
                description: "High-end interiors for ultimate luxury.",
                features: ["Elite pricing", "Lavish designs"],
                image: luxe,
              },
            ].map((pkg, index) => (
              <label
                key={index}
                className={`border rounded-lg p-4 flex gap-4 cursor-pointer transition ${
                  packageType === pkg.name
                    ? "border-green-600 shadow-sm"
                    : "border-gray-300"
                }`}
                onClick={() => setPackageType(pkg.name)}
              >
                <input
                  type="radio"
                  name="package"
                  className="hidden"
                  checked={packageType === pkg.name}
                  onChange={() => setPackageType(pkg.name)}
                />
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-28 h-20 object-cover rounded"
                />
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
              disabled={!packageType}
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
                className="text-green-600 font-medium hover:underline"
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
    // </div>
  );
}
