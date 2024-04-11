import styles from './Layout.module.scss'
import imagineBackground from '../assets/imagineBackground2.jpg'

const Layout = ({children}  ) => {
    return(
        <div className={styles.container}>
        <div className={styles.background} style={{ backgroundImage: `url(${imagineBackground})` }}></div> {/* Imaginea de fundal */}
        <div className={styles.content}>{children}</div> {/* Paginile individuale */}
    </div>
    )
}
export default Layout;





