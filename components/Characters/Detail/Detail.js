import styles from "./Detail.module.scss";
import Comics from "./Comics";

function Detail({ character, comics }) {
  return (
    <>
      <div className="row my-5">
        <div className={`col-12 col-md-6 col-lg-3 mb-4`}>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="character" className="w-100" />
        </div>
        <div className="col-12 col-md-6 col-lg-9">
          <h4 className={styles.name}>{character?.name}</h4>
          <p>{character?.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>{character?.name} Comics</h4>
          <Comics comics={comics} />
        </div>
      </div>
    </>
  );
}

export default Detail;