import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { ContainerSlider } from "./styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ children }) => {
  return (
    <ContainerSlider>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        startupScreen={"Carregando projetos..."}
        interval={8000000}
        className={"slider-options"}
      >
        {children}
      </AutoplaySlider>
    </ContainerSlider>
  );
};

export default Slider;
