import { MdOutlinePersonalInjury, MdOutlinePolicy, MdOutlineFamilyRestroom } from 'react-icons/md'
import "./Pricing.css"

export const Pricing = () => {
    return (
        <div>
            <h1>Third Party Only</h1>
            <div className = "firstDiv">
                <MdOutlinePolicy style={{ marginTop: "20px" }} /> <p>Death, injury or property damage to any third party <br /> arising from your car</p>
            </div>
            <p>Additional Covers</p>
            <div >
                <div className = "addDivFirst" style={{ display: "flex", width: "450px"}}>
                    <MdOutlinePersonalInjury style={{ marginTop: "20px" }} /> <p className = "addP">Personal Accident Cover @ <span className = "green">₹399</span></p>
                    <button className = "btnAddFirst addBtn">Add</button>
                </div>
                <div>
                    <p className = "paraGrey">Rs. 15 lakh coverage against accidental injury or death</p>
                </div>
                
                <div className = "addDivSecond">
                    <MdOutlineFamilyRestroom style={{ marginTop: "20px" }} /> <p className = "addP">
                    Personal Accident Cover for Passengers @ <span className = "green">₹250</span> </p>
                    <button className = "addBtn">Add</button>
                </div>
                <div>
                    <p className = "paraGrey">Protect your loved ones in case of unfortunate accidents. Coverage upto <br/> INR 1  Lakh per passenger.</p>
                </div>
                <div className = "price">
                    <p className = "amount">₹3,221 + GST</p>
                    <button className = "buyBtn">Buy Now</button>

                </div>
                <div className = "lastEmi">
                    <span className = "emi">EMI</span> <span>starting from ₹184</span> <span><a style = {{textDecoration:"none"}} href="">View plans </a></span>

                </div>
            </div>

        </div>
    )
}