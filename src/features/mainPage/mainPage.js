import { useState } from "react"
import { Route, Switch } from "react-router"
import { About } from "./about/about.js"
import { Faq } from "../mainPage/FAQ/faq"
import { Headers } from "./header/header.js"
import Main from "./main/main.js"
import "./mainPage.css"
import Register from "./registerPage/register.js"
import SignIn from "./signInPage/signIn.js"
import UserHeader from "./userPage/header/userHeader.js"
import { ContactUs } from "./contactUs/contactUs.js"

function MainPage() {
    let [type,setType] = useState("block")
    let [Width,setWidth] = useState("block")

    return (
        <div className="MainPage">
           <Headers type={type} Width={Width}/>
           <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/FAQ">
                    <Faq/>
                </Route>
                <Route path="/contactUs">
                    <ContactUs/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/signIn">
                    <SignIn/>
                </Route>
                <Route path="/userPage">
                    <UserHeader/>
                </Route>
                <Route path="/">
                    <Main changeType = {(display,size) => {
                        if(window.location === "http://localhost:3000") {
                            alert("hi")
                        }
                        setType(display)
                        setWidth(size)
                    }}/>
                </Route>
           </Switch>
        </div>
    )
}
export default MainPage