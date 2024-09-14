import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { TbMoodWink } from "react-icons/tb";
import { PiGlobeStandBold } from "react-icons/pi";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiThreadsLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import './Left.css'

interface comeGo {
  comeGo: Boolean;
};

const Left = ({ comeGo }: comeGo) => {


  const navigate = useNavigate();

  return (
    <div className={`left ${comeGo ? 'come-go' : ''}`}>
      <ul className="sosial">
        <li className="sosial-li">
          <span>Sosial Şəbəkə Hesablarım</span>
          <div>
            <a href="https://www.instagram.com/thisisvidadiali/" target="_blank"><LuInstagram className="sosial-icons" /> </a>
            <a href="https://www.linkedin.com/in/vidadi-ali-4116a221a/" target="_blank"><TbBrandLinkedin className="sosial-icons" /> </a>
            <a href="https://www.facebook.com/thisisvidadiali" target="_blank"><RiFacebookCircleLine className="sosial-icons" /> </a>
            <a href="https://www.threads.net/@thisisvidadiali" target="_blank">< RiThreadsLine className="sosial-icons" /> </a>
            <a href="https://m.youtube.com/@writecode1208" target="_blank">< TbBrandYoutube className="sosial-icons" /> </a>
          </div>
        </li>

        <li className="contact-li">
          <span>Əlaqə</span>
          <div>
            <a href="https://wa.me/+994504587493" target="_blank"><FaWhatsapp className="sosial-icons" /> </a>
            <a href="mailto:vidadiali.tiva@gmail.com" target="_blank"><FiMail className="sosial-icons" /> </a>
          </div>
        </li>
      </ul>
      <ul className="navbar">
        <li>
          <NavLink to={'/'}>
            <FaHome className="menu-icon" />
            <span>Ana Səhifə</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/projects'}>
            <FaProjectDiagram className="menu-icon" />
            <span>Proyektlərim</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/courses/front-end'}>
            <HiComputerDesktop className="menu-icon" />
            <span>Kurslar</span>
          </NavLink>
        </li>
        <li className="single-li">Fikirlərimlə tanış ol</li>
        <li>
          <NavLink to={'/one-two'}>
            <TbMoodWink className="menu-icon" />
            <span>Ordan - Burdan</span>
          </NavLink>
        </li>
        <li>
          <a onClick={() => navigate('/books')}>
            <FaBook className="menu-icon" />
            <span>Kitablar</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate('/films')}>
            <BiSolidCameraMovie className="menu-icon" />
            <span>Filmlər</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate('/world')}>
            <GiWorld className="menu-icon" />
            <span>Dünya</span>
          </a>
        </li>
      </ul>

      <ul className="navbar">
        <li className="single-li">Yalnız Admin</li>
        <li>
          <a href="#">
            <PiGlobeStandBold className="menu-icon" />
            <span>Mənim Hekayələrim</span>
          </a>
        </li>
      </ul>
    </div >
  )
}

export default Left