import '@/style.css'
import { SelectedPage } from "@/shared/types";
import Link from "./link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const index = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

  const navbarBackground = isTopOfPage ? "navbar" : "navbarBackground";

  return (

    <div className={`${navbarBackground}`}>
      <div className="logo">
        Logo
      </div>
      <div className="aboutus">
        <Link
          page="About Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Reviews"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  )
}

export default index