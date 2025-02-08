import { getHomePageData } from "@/lib/getHomePageData";
import { Providers } from "./components/provider";
import HomeBanner from "./components/HomeBanner";
import LookingForMBBS from "./components/LookingForMBBS";
import CountryList from "./components/CountryList";
import OurServices from "./components/OurServices";
import Testinomials from "./components/Testinomials";
import Whyus from "./components/Whyus";
import Assist from "./components/Assist";
import {
  howCanWeAssistYou,
  faq,
  howCanWeAssistYouSummary,
  faqSummary,
} from "./utilities/HomePageStaticData";

export default async function LandingPage() {
  const homePageData = await getHomePageData();
  let sliderData =
    homePageData !== undefined &&
    homePageData.result.find((item: any) => item.title === "Home Page Slider");
  let testimonials =
    homePageData !== undefined &&
    homePageData.result.find((item: any) => item.title === "Testimonials");

  return (
    <Providers>
      <HomeBanner sliderData={sliderData} />
      <LookingForMBBS />
      <OurServices />
      <Whyus />
      <Assist
        data={howCanWeAssistYou}
        title="HOW CAN WE ASSIST YOU"
        summary={howCanWeAssistYouSummary}
      />
      <CountryList />

      <Assist
        data={faq}
        title="MBBS ADMISSION CONSULTANCY IN INDIA"
        summary={faqSummary}
      />
      <Testinomials testinomials={testimonials} />
    </Providers>
  );
}
