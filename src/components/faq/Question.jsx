/* eslint-disable react/prop-types */
import { faqData } from "../../assets/data/data"
const Question = () => {
    return (
        <>
            {
                faqData.map(item => {
                    return (
                        <details key={item.id}>
                            <summary>{item.q}</summary>
                            <div>{item.a}</div>
                        </details>
                    )
                }
                )
            }
        </>
    )
}

export default Question
