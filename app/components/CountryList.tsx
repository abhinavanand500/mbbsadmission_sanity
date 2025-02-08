import Image from "next/image";
import Link from "next/link";

const countriesList = [
  {
    img: "/assests/country-flag-2/Russia.png",
    title: "STUDY MBBS IN RUSSIA",
    alt: "russia-flag",
    slug: "mbbs-in-russia",
  },
  {
    img: "/assests/country-flag-2/Bosnia.png",
    title: "STUDY MBBS IN BOSNIA",
    alt: "bosnia-flag",
    slug: "mbbs-in-bosnia",
  },
  {
    img: "/assests/country-flag-2/Georgia.png",
    title: "STUDY MBBS IN GEORGIA",
    alt: "georgia-flag",
    slug: "mbbs-in-georgia",
  },
  {
    img: "/assests/country-flag-2/malaysia.png",
    title: "STUDY MBBS IN MALAYSIA",
    alt: "malasiya-flag",
    slug: "mbbs-admission-in-malaysia-for-indian-students",
  },
  {
    img: "/assests/country-flag-2/Kazakhstan.png",
    title: "STUDY MBBS IN KAZAKHSTAN",
    alt: "kyrgyzstan-flag",
    slug: "mbbs-in-kazakhstan",
  },
  {
    img: "/assests/country-flag-2/poland.png",
    title: "STUDY MBBS IN POLAND",
    alt: "poland-flag",
    slug: "mbbs-admission-in-poland-for-indian-students",
  },
  {
    img: "/assests/country-flag-2/Germany.png",
    title: "STUDY MBBS IN GERMANY",
    alt: "germany-flag",
    slug: "mbbs-admission-in-germany-for-indian-students",
  },
  {
    img: "/assests/country-flag-2/Uzbekistan.png",
    title: "STUDY MBBS IN Uzbekistan",
    alt: "france-flag",
    slug: "mbbs-in-uzbekistan",
  },
  {
    img: "/assests/country-flag-2/Armenia.png",
    title: "STUDY MBBS IN ARMENIA",
    alt: "armenia-flag",
    slug: "mbbs-in-armenia",
  },
  {
    img: "/assests/country-flag-2/kyrgyzstan.png",
    alt: "kyrgyzstan-flag",
    title: "STUDY MBBS IN KYRGYZSTAN",
    slug: "mbbs-in-kyrgyzstan",
  },
  {
    img: "/assests/country-flag-2/Italy.png",
    alt: "kyrgyzstan-flag",
    title: "STUDY MBBS IN ITALY",
    slug: "mbbs-in-italy",
  },
  {
    img: "/assests/country-flag-2/Spain.png",
    alt: "kyrgyzstan-flag",
    title: "STUDY MBBS IN SPAIN",
    slug: "mbbs-admission-in-spain-for-indian-students",
  },
];

function index() {
  return (
    <section className="text-gray-600 body-font container">
      <div className="sm:px-12 px-2 py-10">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="sm:text-4xl text-2xl font-semibold title-font mb-2 text-blue-900">
              Most Popular Countries
            </h2>
            <div className="h-1 w-20 bg-blue-700 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
            Deciding where to pursue your MBBS degree is a crucial step in your
            medical education journey. Several countries have gained recognition
            for their high-quality medical education, affordable tuition fees,
            and favorable living conditions for international students. Let's
            delve into some of the most popular destinations for MBBS admission.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {countriesList.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 xl:w-1/4 p-4">
              <Link href={item.slug}>
                <div className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.img}
                    height={150}
                    width={300}
                    alt={item.alt}
                  />
                  <h2
                    className="text-md text-gray-900 font-small font-bold title-font mb-4 text-center p-2 
                      whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {item.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default index;
