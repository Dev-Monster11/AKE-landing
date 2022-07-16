import { Fragment } from "react";
import HeroSection from "../../components/home/HeroSection";
import HowToSection from "../../components/home/HowToSection";
import TokenomicsSection from "../../components/home/TokenomicsSection";
import RoadmapSection from "../../components/home/RoadmapSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import WhyUsSection from "../../components/home/WhyUsSection";
import FaqSection from "../../components/home/FaqSection";
import TeamSection from "../../components/home/TeamSection";
import FooterSection from "../../components/home/FooterSection";

export default function Home() {
    return (
        <Fragment>
            <HeroSection />
            <FeaturesSection />
            <WhyUsSection />
            {/* <HowToSection />
            <TokenomicsSection /> */}
            <RoadmapSection />
            <FaqSection />
            <TeamSection />
            <FooterSection />
        </Fragment>
    );
}
