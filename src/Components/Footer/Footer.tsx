import { GiWorld } from "react-icons/gi";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiThreadsLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-ul">
                <li className="sosial-li">
                    <span>Sosial Şəbəkə Hesablarım</span>
                    <div>
                        <a href="https://www.instagram.com/thisisvidadiali/" target="_blank"><LuInstagram className="sosial-icons" /><span>thisisvidadiali</span> </a>
                        <a href="https://www.linkedin.com/in/vidadi-ali-4116a221a/" target="_blank"><TbBrandLinkedin className="sosial-icons" /><span>Vidadi Ali</span> </a>
                        <a href="https://www.facebook.com/thisisvidadiali" target="_blank"><RiFacebookCircleLine className="sosial-icons" />Vidadi Alizade </a>
                        <a href="https://www.threads.net/@thisisvidadiali" target="_blank">< RiThreadsLine className="sosial-icons" /><span>Vidadi Ali</span></a>
                        <a href="https://m.youtube.com/@writecode1208" target="_blank">< TbBrandYoutube className="sosial-icons" />writecode</a>
                    </div>
                </li>
                <li className="profil-li">
                    <span>Profillərim</span>
                    <div>
                        <a href="https://github.com/VidadiAli" target="_blank"><FaGithub className="sosial-icons" /><span>Github</span></a>
                        <a href="https://vidadiali.com" target="_blank"><GiWorld className="sosial-icons" /><span>TIVA</span></a>
                    </div>
                </li>

                <li className="contact-li">
                    <span>Əlaqə</span>
                    <div>
                        <a href="https://wa.me/+994504587493" target="_blank"><FaWhatsapp className="sosial-icons" /><span>+994504587493</span></a>
                        <a href="mailto:vidadiali.tiva@gmail.com" target="_blank"><FiMail className="sosial-icons" /><span>vidadiali.tiva@gmail.com</span> </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Footer