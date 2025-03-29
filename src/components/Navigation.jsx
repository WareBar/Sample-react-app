import styles from '../styles/Navigation.module.css'






const Navigation = () => {
    return (
        <div className={styles.Navigation}>
            <h1>NEWS</h1>

            <div className={styles.socialsContainer}>
                <a title='Facebook' target='blank' href="https://www.facebook.com/raedus.lafivad">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/2048px-Facebook_icon_%28black%29.svg.png" alt="facebook" />
                </a>
                <a title='Instagram' target='blank' href="https://www.instagram.com/barrydam_/">
                    <img src="https://icon-library.com/images/instagram-icon-black/instagram-icon-black-1.jpg" alt="insta" />
                </a>
                <a title='Github' target='blank' href="https://www.github.com/WareBar">
                    <img src="https://avatars1.githubusercontent.com/u/9919?v=4" alt="github" />
                </a>
            </div>

        </div>
    )
}

export default Navigation