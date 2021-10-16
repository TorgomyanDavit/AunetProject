import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./contactUs.css"
import "./responsive.css"



export function ContactUs() {
    const state = useSelector((state) => state.mainPage)
    return (
        <div className="contactUs">
            <div className="contactUsDiv"><h2>Contact Us</h2></div>
            <div className="contactDiv">
                <p className="registerNewTitle">Contscts :</p>
                <a href="mailTo:AllNet@mail.ru"><img src="/mainPageImages/messigeimg.png" alt=""/>AllNet@mail.ru</a>
                <a id="afterLine" href="tel:+374 (00) 00-00-00"><img src="/mainPageImages/phone.png" alt=""/>+374 (00) 00-00-00</a>
                <div className="socialSiteIcon">
                    {state.contactDivSocialLink.map((val) => {
                        return (
                            <Link className="contactLink" to={{pathname:val.Link}} key={Math.random()} target="_blank" style={{background:val.background}}><img src={val.img} alt=""/></Link>
                        )
                    })}
                </div>
            </div>
            <div className="contactData">
                    <form className="contactFormTetx" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="E-mail"/>
                        </div>
                        <textarea type="text" placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
            </div>
        </div>
    )
}