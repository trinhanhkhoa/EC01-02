import Header from "../sub-EL/header.js";
import Category from "../sub-EL/category.js";
import Footer from "../sub-EL/footer.js";
import React from "react";

class Home extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Category/>
                <Footer/>
            </div>
        );
    }
}

export default Home;