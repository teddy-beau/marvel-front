const CharacterPreview = ({ hovered }) => {
   return (
      <div className="preview" key={hovered._id}>
         {hovered.name && <h2>{hovered.name}</h2>}
         {hovered.description && <p>{hovered.description}</p>}
         {hovered.picture && <img src={hovered.picture} alt={hovered.name} />}
      </div>
   );
};

export default CharacterPreview;
