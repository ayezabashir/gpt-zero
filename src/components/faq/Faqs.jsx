import Question from "./Question"
const Faqs = () => {
    return (
        <div className="container">
            <div>
                <h2>General FAQs about our AI Detector</h2>
                <p>
                    Everything you need to know about GPTZero and our chat gpt detector. Can’t find an answer? You can talk to our <span className="underline">customer service team.</span>
                </p>
            </div>
            <Question />
        </div>
    )
}

export default Faqs
