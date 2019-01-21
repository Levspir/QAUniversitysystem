import React, { Component } from 'react';
//import RenderHtml from '../RenderHtml';
import QuestionInput from "../QuestionInput";
import FileInput from "../FileInput";
export default class Main extends Component {
    render() {
        return (
            <main className=' marginTop'>
                <section className="about mt-5 " id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="text-dark py-3">About us</h2>
                                <p className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eligendi error dolores ipsa, repudiandae hic iste dolorem quae aspernatur,
                                    vitae doloremque quia dolore sint nam quam ex voluptatum unde alias praesentium id
                                    amet repellendus? Dolor, magni, sed
                                    ab voluptatem magnam aliquam eaque dolore perferendis saepe atque tempore
                                    repudiandae porro at! Ullam quam velit quidem,
                                    facilis laudantium praesentium mollitia blanditiis distinctio beatae sunt!
                                    Consequatur placeat reiciendis hic totam,
                                    veniam minus ratione molestias.</p>
                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="col text-center mt-5" >
                                <QuestionInput/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col text-center mt-5" >
                                <FileInput/>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col text-center mb-5" >
                                <a className="btn btn-primary" target="_blank" href="https://qauniversity.cfapps.eu10.hana.ondemand.com/lda?topics=3">Topic Modeling</a>
                            </div>
                        </div>


                    </div>
                </section>
            </main>
        )
    }
}
