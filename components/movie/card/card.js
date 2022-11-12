import styles from "./card.module.scss";
import Link from "next/link";
import Moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
    const title = data.title ? data.title : data.name;
    const date = data.release_date ? Moment(data.release_date) : Moment(data.first_air_date);

    return (
        <Link
            href={{
                pathname: `movie/${data.media_type}/[id]`,
                query: { 
                    id: data.id
                }
            }}
        >
            <a title={title} className={styles.card}>
                <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} />
                <div className={styles.cardContent}>
                    <p className={styles.cardRating}><FontAwesomeIcon className={styles.icon} icon={faStar} />{ data.vote_average.toFixed(1) }</p>
                    <h3>
                        {title}
                    </h3>
                    <p className={styles.cardDate}>{ date.format('Do MMMM YYYY') }</p>
                </div>
            </a>
        </Link>
    );
  };
  
export default Card;
  