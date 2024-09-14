import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { myStory, Story } from "../../Data/Data";
import { FaAddressBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import './Stories.css'

const Stories = () => {
    const [mainElement, setMainElement] = useState<string>('');
    const [paragraphContent, setParagraphContent] = useState<string[]>([]); // Düzgün tip təyin olundu

    const { books, films, world } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (books) {
            setMainElement(books);
        } else if (films) {
            setMainElement(films);
        } else if (world) {
            setMainElement(world);
        }
    }, [books, films, world]);

    useEffect(() => {
        const newParagraphs: string[] = []; // Yeni massiv yaradılır
        Story.forEach((f: myStory) => {
            if (f.tema === mainElement) {
                newParagraphs.push(f.NewsParagraf); // Yeni massivə dəyər əlavə olunur
            }
        });
        setParagraphContent(newParagraphs); // Yaratdığınız yeni massiv state-ə təyin edilir
    }, [mainElement]); // `mainElement`-ə qulaq asılır


    return (
        <div className="my-stories">
            {Story.map((e: myStory, index: number) => {
                if (e.tema === mainElement) {
                    return (
                        <div key={e.id} className="this-stories">
                            <div className="this-stories-head">
                                <div className="this-stories-icons">
                                    <div>
                                        <FaAddressBook className="stories-icons" />
                                        <span>{e.NewsWriter}</span>
                                    </div>
                                    <div>
                                        <FaCalendarAlt className="stories-icons" />
                                        <span>{e.NewsDate}</span>
                                    </div>
                                </div>
                                <h2>{e.NewsName}</h2>
                            </div>
                            <img src={e.NewsCover} alt={e.NewsName} />
                            <p dangerouslySetInnerHTML={{ __html: paragraphContent[index] || '' }}></p> {/* Massivdəki element index üzrə göstərilir */}
                            <button onClick={() => navigate(`/stories/${e.tema}-${e.id}`)}>Daha çox</button>
                        </div>
                    );
                }
                return null; // Əks təqdirdə null qaytarılır
            })}
        </div>
    );
}

export default Stories;
