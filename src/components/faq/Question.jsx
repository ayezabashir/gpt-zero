/* eslint-disable react/prop-types */
import { faqData } from "../../assets/data/data"
const Question = () => {
    return (
        <>
            {
                faqData.map(item => {
                    return (
                        <>
                            <details className="border-b-2 border-slate-200" key={item.id}>
                                <summary className="text-txt-black text-lg cursor-pointer font-medium mb-7 mt-2">{item.q}</summary>
                                <div className="mb-4 font-light text-txt-black">{item.a}</div>
                            </details>
                        </>
                    )
                }
                )
            }
        </>
    )
}

export default Question
