const Card = ({ pic, title, heading, para, color }) => {
    return (
        <div className="">
            <img className="w-100" src={pic} alt="" />
            <div className="card-body">
                <h2 className={`${color} uppercase font-medium`}>{title}</h2>
                <h3 className="">{heading}</h3>
                <p className="card-text">{para}</p>
            </div>
        </div>
    )
}

export default Card
