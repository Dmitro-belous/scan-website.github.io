import s from '../../styles/layout/Footer.module.css'
import logo_footer from '../../media/footer/scan_logo_footer.svg'

function Footer() {
    return (
        <footer className={s.footer}>
            <img className={s.logo_footer} src={logo_footer} alt="logo"></img>
            <div className={s.address}>
            г. Москва, Цветной б-р, 40<br/>
            +7 495 771 21 11<br/>
            info@skan.ru                
            <p className={s.copyright}>Copyright. 2022</p>
            </div>
        </footer>
    );
}

export default Footer;