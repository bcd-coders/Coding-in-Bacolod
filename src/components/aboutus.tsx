import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const aboutus = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus">
      <motion.div

        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <div className="aboutUsImage">
          <div className="aboutUsContainer">
            <div className="aboutUsTitle">
              About Us
              <div className="aboutUsBody">
                "FUELING CREATIVITY ONE BTYE AT A TIME"
                <div className="aboutUsParagraph">
                  At Cafe Coding, we've combined technology and comfort to craft a unique
                  haven for tech enthusiasts, programmers, and coffee lovers.
                  Situated in the heart of Bacolod, our website is your ultimate destination
                  for coding and discovering the perfect spots to enjoy your favorite brew.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default aboutus 