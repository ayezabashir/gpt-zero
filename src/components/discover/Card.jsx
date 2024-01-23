import { cardData } from "../../assets/data/data"

const Card = () => {
    return (
        <>
            {
                cardData.map(item => {
                    return (
                        <div className="w-full md:w-[30%] p-4" key={item.id} >
                            <img className="mt-2 " src={item.icon} alt="icon" />
                            <div className="mt-2 text-lg font-medium text-txt-black">{item.title}</div>
                            <p className="mt-3 font-light text-sm text-gray">{item.text}</p>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Card
