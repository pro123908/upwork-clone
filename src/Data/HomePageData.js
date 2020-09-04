import Desktop from "../assets/HomePage/Categories/development-desktop.29e32ce.svg";
import Design from "../assets/HomePage/Categories/design-creative-desktop.109353b.svg";
import Writing from "../assets/HomePage/Categories/writing-desktop.1b7ea27.svg";
import Sales from "../assets/HomePage/Categories/marketing-sales-desktop.ebb7dd9.svg";
import Support from "../assets/HomePage/Categories/admin-support-desktop.ff2e0d4.svg";
import CService from "../assets/HomePage/Categories/customer-service-desktop.22b35df.svg";
import Analytics from "../assets/HomePage/Categories/data-science-desktop.b430512.svg";
import Architecture from "../assets/HomePage/Categories/engineering-architecture-desktop.85b023c.svg";

import Microsoft from "../assets/HomePage/Trusted/microsoft.a4ac95d.svg";
import Airbnb from "../assets/HomePage/Trusted/airbnb.b562d93.svg";
import Automatic from "../assets/HomePage/Trusted/automatic.6156771.svg";
import Bissell from "../assets/HomePage/Trusted/bissell.5f96ccb.svg";
import Coty from "../assets/HomePage/Trusted/coty.355301a.svg";
import GE from "../assets/HomePage/Trusted/ge.e4f1cde.svg";

import Talent from "../assets/HomePage/BetterMatch/talentNetwork.svg";
import Instantly from "../assets/HomePage/BetterMatch/instantly.svg";
import OnePlace from "../assets/HomePage/BetterMatch/onePlace.svg";
import ClearView from "../assets/HomePage/BetterMatch/clearView.svg";

import Rating from "../assets/HomePage/Characteristics/proven-talent.5561582.svg";

import Agencies from "../assets/HomePage/Characteristics/agencies.99374b0.svg";
import Airplanes from "../assets/HomePage/Characteristics/airplanes.016ed7b.svg";

import SpecializedProfile from "../assets/HomePage/Characteristics/specialized-profile-MD.2c77114.svg";

import WebDev from "../assets/HomePage/Indemand/web-dev.72c8316.svg";
import MobDev from "../assets/HomePage/Indemand/mobile-dev.5c07b90.svg";
import Design from "../assets/HomePage/Indemand/design.1c1a75b.svg";
import Writing from "../assets/HomePage/Indemand/writing.db05e7e.svg";
import Marketing from "../assets/HomePage/Indemand/marketing.799abf4.svg";
import Accounting from "../assets/HomePage/Indemand/accounting.9366f11.svg";

export const categoriesArray = [
  { text: "Web, Mobile & Software Dev", image: Desktop },
  { text: "Design & Creative", image: Design },
  { text: "Writing", image: Writing },
  { text: "Sales & Marketing", image: Sales },
  { text: "Admin Support", image: Support },
  { text: "Customer Service", image: CService },
  { text: "Data Science & Analytics", image: Analytics },
  { text: "Engineering & Architecture", image: Architecture },
];

export const brandsArray = [Microsoft, Airbnb, GE, Automatic, Bissell, Coty];

export const BetterMatchArray = [
  {
    image: Talent,
    heading: "Tap into an amazing talent network",
    text:
      "Get unmatched quality from proven independent professionals and specialized agencies.",
  },
  {
    image: Instantly,
    heading: "Get a smarter shortlist, instantly",
    text:
      "Our instant matching tech generates a shortlist based on the criteria you select.",
  },
  {
    image: OnePlace,
    heading: "Manage everything in one place",
    text:
      "Manage shortlisting, interviewing, onboarding, and payments all from Upwork.",
  },
  {
    image: ClearView,
    heading: "Get a clear view of the work",
    text:
      "Easily track project milestones and progress toward the completion of your jobs.",
  },
];

export const characteristicsArray = [
  {
    title: "Get proven talent",
    text:
      "Connect with in-demand, independent professionals and specialized agencies—and see why businesses give Upwork talent a 4.8 out of 5 rating based on 1M+ reviews.",
    linkText: "Explore the talent on Upwork",
    image: Rating,
  },
  {
    title: "Engage on your terms",
    text:
      "From one-offs to longer-term contracts (through Upwork Payroll), you can tailor your engagements to achieve your business goals and scale dynamically as business needs change.",
    linkText: "See what you can do",
    image: Airplanes,
    reverse: true,
  },
  {
    title: "Hire with confidence",
    text:
      "With 1M+ reviews, get a reliable evaluation of candidates’ previous work from businesses like yours. Plus, unlike other solutions, only see client reviews from legitimate jobs completed though Upwork.",
    linkText: "See the reviews",
    image: SpecializedProfile,
  },
  {
    title: "Enterprise-ready",
    text:
      "Get white-glove support for your job postings, shortlisting, onboarding, and driving company adoption. Plus, get a solution customized to your existing contingent worker policies, providing the protection you need—from compliance to results risk limitation to IP and data security.",
    linkText: "Upwork for enterprise",
    image: Agencies,
    reverse: true,
  },
];

export const inDemandProfessionsArray = [
  {
    image: WebDev,
    title: "Web Dev",
  },
  {
    image: MobDev,
    title: "Mobile Dev",
  },
  {
    image: Design,
    title: "Design",
  },
  {
    image: Writing,
    title: "Writing",
  },
  {
    image: Marketing,
    title: "Marketing",
  },
  {
    image: Accounting,
    title: "Accounting",
  },
];