import education from '/education.svg'
import featured from '/featured.svg'
import enterprise from '/enterprise.svg'
import Card from "./Card"

const Prices = () => {
    return (
        <div className="container my-10 flex flex-col items-center">
            <h1 className="text-blue font-medium text-md">PRODUCT INTEGRATIONS</h1>
            <h2 className="text-txt-black text-3xl mt-4 mb-10 font-bold"> Unlock More of GPTZero </h2>

            <div className='lg:flex justify-between lg:container'>
                <Card pic={featured} title='featured' heading='Origin Chrome Extension' para='Use our AI detection tool as you browse the internet for AI content. Create a Writing Report on Google Docs to view statistics about your writing.' color='text-[#60ADFB]' />
                <Card pic={education} title='education' heading='Writing Report' para='With our writing report, you are able to see behind the scenes of a google doc, including writing statistics, AI content, and a video of your writing process.' color='text-[#FB923C]' />
                <Card pic={enterprise} title='enterprise' heading='AI Detection API' para='We built an easy to use API for organizations to detect AI content. Integrate GPTZero’s AI detection abilities into your own tools and workflow' color='text-[#4ADE80]' />
            </div>
        </div>
    )
}

export default Prices
