import { useSelector } from "react-redux"
import "./faq.css"
import "./responsive.css"


export function Faq() {
    const state = useSelector((state) => state.mainPage)
    return (
        <div className="faq">
            <div><h2>FAQ</h2></div>
            {state.faq.map((val) => {
                return (
                    <p key={Math.random()} className="faqP">
                        <span>{val.name}</span>
                        <button>{val.simbol}</button>
                    </p>
                )
            })}
        </div>
    )
}