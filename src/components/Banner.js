import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Banner = () => {
    return <header className="header">
        <div className=" container">
            <div className="row">
                <div className="col-6">
                    < div className=" header_content">
                        <div className="header_section">
                            <ul className="header_ul">
                                <li><i class="fab fa-github"></i></li>
                                <li><i class="fab fa-bitbucket"></i></li>
                                <li><i class="fab fa-linkedin"></i></li>
                            </ul>
                            <h1>I am Akshay K A</h1>
                            <p>i'm Akshay, professional web developer with long time experience in this field </p>
                            <div className="header_buttons">
                                <a href="" className=" btn btn-outline">My Portfolio</a>&nbsp;&nbsp;&nbsp;
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    </header>

}

export default Banner
