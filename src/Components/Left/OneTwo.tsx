import { myOneTwo, OnesTwo } from "../../Data/Data"
import './OneTwo.css'

const OneTwo = () => {



    return (
        <div className="one-two">
            {
                OnesTwo.map((e: myOneTwo) => {
                    return <div key={e.id}>
                        <h2>{e.name}</h2>
                        <p>
                            {e.text}
                        </p>
                        <span>{e.date}</span>
                    </div>
                })
            }
        </div>
    )
}

export default OneTwo