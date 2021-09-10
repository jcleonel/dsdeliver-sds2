import './styles.css';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/jean-carlos-leonel-da-costa-576b34180/" target="_new">
                    <LinkedinIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;