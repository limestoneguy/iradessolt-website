import Navbar from "../../components/Navbar/Navbar";
import FaceSection from "./components/FaceSection/FaceSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import TeamSection from "./components/TeamSection/TeamSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import ServiceWeProvide from "./components/ServiceWeProvide/ServiceWeProvide";

function Home() {
    return (
        <>
            <Navbar />
            <FaceSection />
            <ServiceWeProvide />
            <ClientsSection />
            <TeamSection />
            <GetInTouchSection />
        </>
    );
}

export default Home;