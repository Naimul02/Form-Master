import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

const GrandPa = () => {
  const asset = "Diamond";
  return (
    <div className="grandPa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  );
};

export default GrandPa;
