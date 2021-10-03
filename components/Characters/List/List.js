import { useState } from "react";
import { useRouter } from 'next/router';
import styles from "./List.module.scss";
import marvelApi from "../../../api/marvelApi";
import InfiniteScroll from "react-infinite-scroll-component";

function List({ characters }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(characters.offset);
  const [items, setItems] = useState(characters.results);
  const [hasMore, setHasMore] = useState(characters.offset < characters.total);

  const fetchMoreData = async () => {
    if (items.length === characters.total) {
      setHasMore(false);
      return;
    }

    let charactersResponse = await marvelApi.getCharacters(offset + 30);
    setItems(items.concat(charactersResponse.data.results));

    setPage(+page + 1);
    setOffset(offset + 30);

    router.push({
      query: { page: +page + 1},
    }, undefined,{ scroll: false, shallow: true });
  };

  return (
    <div>
      {characters.results.length > 0 ?
        <InfiniteScroll
          dataLength={items ? items.length : 1}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<div className="text-center my-5">Yükleniyor...</div>}
        >
          <div className="row mt-5">
            {items?.map((item, index) => {
              return (
                <div className={`col-12 col-md-6 col-lg-3 ${styles.item}`} key={index}>
                  <a href={`/character/${item.id}`} className={styles.listItem}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="character" className="w-100" />
                    <span className={styles.name}>{item?.name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </InfiniteScroll> :
        <div>Sonuç bulunamadı.</div>
      }
    </div>
  );
}

export default List;