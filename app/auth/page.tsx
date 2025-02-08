"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const ScholarshipTestLogin: React.FC = () => {
  const router = useRouter();

  // Define state types explicitly
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validate email format
  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate phone number format (10 digits)
  const validatePhone = (phone: string): boolean => /^\d{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Validate inputs
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!validateEmail(email))
      newErrors.email = "Please enter a valid email address.";
    if (!validatePhone(phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Check attempts
      const response = await fetch(
        `https://admission-backend.vercel.app/api/user?email=${encodeURIComponent(
          email
        )}&phone=${encodeURIComponent(phone)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Failed to check attempts");

      const data: { attempts?: number } = await response.json();

      // If attempts are more than 2, show error
      if (data.attempts && data.attempts >= 2) {
        toast.error("You have exceeded the maximum number of attempts.");
        setLoading(false);
        return;
      }

      // If no entry (first time) or attempt is 1, make the POST call
      const saveResponse = await fetch(
        "https://admission-backend.vercel.app/api/saveUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone }),
        }
      );

      if (!saveResponse.ok) throw new Error("Failed to save user");

      // If it's the first attempt, redirect to the exam page
      if (data.attempts === undefined || data.attempts === 0) {
        localStorage.setItem("examStarted", "true");
        router.push("/exam");
      } else {
        toast.success("Attempt saved successfully.");
        // If attempt is 1, you can still redirect or notify the user as needed.
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Left Section */}
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-3xl text-blue-900">
              Welcome to the Scholarship Test Portal
            </h1>
            <p className="leading-relaxed mt-4 text-red-600">
              This is your opportunity to prove yourself! Please note that you
              can only attempt this exam <strong>two times</strong>. Make every
              attempt count.
            </p>
          </div>

          {/* Right Section: Login Form */}
          <div className="lg:w-2/6 md:w-1/2 bg-red-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login to Begin Your Test
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center justify-center"
              >
                {loading ? <FaSpinner className="animate-spin mr-2" /> : null}
                {loading ? "Starting..." : "Start Test"}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              If you face any issues, please contact our support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipTestLogin;
