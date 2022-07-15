import { Fragment } from "react";
import HeroSection from "../../components/home/HeroSection";
import HowToSection from "../../components/home/HowToSection";
import TokenomicsSection from "../../components/home/TokenomicsSection";
import RoadmapSection from "../../components/home/RoadmapSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import WhyUsSection from "../../components/home/WhyUsSection";

export default function Home() {
    return (
        <Fragment>
            <HeroSection />
            <FeaturesSection />
            <WhyUsSection />
            {/* <HowToSection />
            <TokenomicsSection />
            <RoadmapSection /> */}
        </Fragment>
    );
}
