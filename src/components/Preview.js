// import { Link } from "react-router-dom";

const CharacterPreview = ({ hovered }) => {
   return (
      <section className="preview-section" key={hovered._id}>
         <h2>{hovered.name}</h2>
         {hovered.description && <p>{hovered.description}</p>}
         <img src={hovered.picture} alt={hovered.name} />
      </section>
   );
};

export default CharacterPreview;
