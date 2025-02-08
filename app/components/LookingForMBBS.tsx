import Image from "next/image";
import careerImage from "../../public/carrer-counselling2.jpeg";
import guarantee from "../../public/guarantee.webp";
import fees from "../../public/fees.webp";
import visa from "../../public/visa.webp";
import student from "../../public/students.jpeg";
import student2 from "../../public/student2.jpeg";

const features = [
  {
    name: "Free Counselling",
    description:
      "Professional counseling services provided by Good Goods, Inc.",
  },
  {
    name: "Guaranteed Admission in Top Universities",
    description:
      "Exclusive guarantee of admission to prestigious universities.",
  },
  {
    name: "Low Admission Fees",
    description: "Affordable admission fees.",
  },
  {
    name: "100% Visa Clearance Assistance",
    description: "Comprehensive assistance for obtaining visa clearance.",
  },
  {
    name: "No Donation & Capitation Fees",
    description: "Absence of donation and capitation fees.",
  },
  {
    name: "All Documentation Support",
    description: "Full support for all documentation needs.",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 py-8 sm:pb-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-blue-800 sm:text-4xl mb-8">
            Are you Looking for Study Abroad
          </h2>
          <p className="mt-4 text-gray-700">
            Do not worry, we are Here to Assist you. Grab the top Abroad
            Education Consultant to fulfill your aspiration with:
          </p>

          <dl className="mt-4 sm:mt-16 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-blue-700">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src={careerImage}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
          <Image
            src={guarantee}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
          <Image
            src={fees}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
          <Image
            src={visa}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
          <Image
            src={student}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
          <Image
            src={student2}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
