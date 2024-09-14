import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { myStory, Story } from "../../Data/Data";
import { FaAddressBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import './MyStory.css'


const MyStory = () => {

    const { story } = useParams();
    const [lastElement, setLastElement] = useState<string | undefined>('');
    const [paragraphContent, setParagraphContent] = useState<string>("");

    useEffect(() => {
        setLastElement(story);

        Story.forEach((f: myStory) => {
            if (f.id === Number(story?.split('-').reverse()[0])) {
                setParagraphContent(f.NewsParagraf);
            }
        })

    }, [story]);





    return (
        <div className="my-story">
            {
                Story.map((e: myStory) => {
                    if (e.id === Number(lastElement?.split('-').reverse()[0])) {
                        return <div className="this-story" key={e.id}>
                            <div className="this-story-head">
                                <div className="this-story-icons">
                                    <div>
                                        <FaAddressBook className="story-icons" />
                                        <span>{e.NewsWriter}</span>
                                    </div>
                                    <div>
                                        <FaCalendarAlt className="story-icons" />
                                        <span>{e.NewsDate}</span>
                                    </div>
                                </div>

                                <h2>{e.NewsName}</h2>
                            </div>

                            <img src={e.NewsCover} alt={e.NewsName} />

                            <p dangerouslySetInnerHTML={{ __html: paragraphContent }}></p>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default MyStory