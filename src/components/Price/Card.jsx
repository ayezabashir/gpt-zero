/* eslint-disable react/prop-types */
const Card = ({ pic, title, heading, para, color }) => {
    return (
        <div className="p-8 shadow-lg max-w-[30%] flex flex-col justify-between cursor-pointer hover:scale-105 ease-out delay-150 duration-300">
            <img className="w-100 mb-5" src={pic} alt="" />
            <div className="card-body">
                <h2 className={`${color} uppercase font-bold text-sm`}>{title}</h2>
                <h3 className="text-txt-black text-2xl font-bold my-3">{heading}</h3>
                <p className="card-text font-light text-lg">{para}</p>
            </div>
            <button className="border rounded-md w-[60%] mt-4 px-4 py-3">Learn More</button>
        </div>
    )
}

export default Card
