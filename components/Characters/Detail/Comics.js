import styles from "../List/List.module.scss";

function Comics({ comics }) {
  return (
    <div className={`row mt-4 ${styles.item}`}>
      {comics?.length > 0 ?
        comics.map((comic, index) => (
          <div className={`col-12 col-md-6 col-lg-3 ${styles.item}`} key={index}>
            <div className={styles.listItem}>
              <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt="comic" className="w-100 mb-3" />
              <h5>{comic?.title}</h5>
            </div>
          </div>
        )) :
        <div>Sonuç bulunamadı.</div>
      }
    </div>
  );
}

export default Comics;