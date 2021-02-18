const CharacterPreview = ({ hovered }) => {
   return (
      <section className="preview-section" key={hovered._id}>
         {hovered.name && <h2>{hovered.name}</h2>}
         {hovered.description && <p>{hovered.description}</p>}
         {hovered.picture && <img src={hovered.picture} alt={hovered.name} />}
      </section>
   );
};

export default CharacterPreview;
