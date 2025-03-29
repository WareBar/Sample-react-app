import styles from '../styles/NewsList.module.css'


const NewsList = ({newsData}) => {

    
    return (
        <div className={styles.NewsList}>
            <h2 className={styles.LATEST}>Latest NEWS</h2>
        

                <div className={styles.NewsContainer}>            
                    {   
                        newsData.results.map((news) => (
                            <div key={news.title} className={styles.News} title={news.title}>
                                {/* <p>{news.title}</p> */}

                                <div className={styles.newsBanner}>
                                    <img src={news.image_url === null? 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png':news.image_url} alt={news.title} />
                                </div>

                                <div className={styles.newsInformation}>
                                    <p className={styles.newsMetaInfo}>
                                        <span className={styles.newsCountry}>{news.country}</span><span className={styles.pubDate}>{news.pubDate.split(' ')[0]}</span>
                                    </p>

                                    <h3 className={styles.newsTitle}>
                                        <a target='blank' href={news.link}>{news.title}</a>
                                    </h3>

                                    <p className={styles.newsDescription}>
                                        {news.description === null? "No News Description Available":news.description}
                                    </p>


                                    <div className={styles.sourceContainer}>
                                        <img src={news.source_icon} alt="author" className="authorProfile"/>
                                        <p className={styles.sourceInfo}>

                                            <a target='blank' href={news.source_url}>
                                            {news.source_name}
                                            </a>

                                            
                                            

                                        </p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>




        </div>
    )
}


export default NewsList;