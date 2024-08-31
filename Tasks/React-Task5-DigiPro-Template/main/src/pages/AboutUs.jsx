import React from 'react';
import aboutHeroImg from '/public/img/about_hero.jpg'; // Assuming images are in the src folder
import ab1Img from '/public/img/ab1.jpg';
import ab2Img from '/img/ab2.jpg';
import team1 from '/img/team1.jpg';
import team2 from '/img/team2.jpg';
import team3 from '/img/team3.jpg';
import team4 from '/img/team4.jpg';
import c4 from '/img/c4.jpg';
import c3 from '/img/c3.jpg';

export default function AboutUs() {
    return (
        <>
            <section className="about_hero bgimage">
                <div className="bg_image_holder">
                    <img src={aboutHeroImg} alt="About Hero" />
                </div>
                <div className="container content_above">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about_hero_contents">
                                <h1 className="display-4">Welcome to
                                    <span>DigiPro</span>
                                </h1>
                                <p className="display-4">We Help Marketers Build Products</p>
                                <div className="about_hero_btns">
                                    <a href="#" className="play_btn btn btn--lg btn-primary" data-toggle="modal" data-target="#myModal"
                                        data-theVideo="https://www.youtube.com/embed/lvtfD_rJ2hE">
                                        <span className="icon-control-play"></span> Play Quick Video</a>
                                    <a href="#" className="btn btn-light btn--lg">Join Us Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="content_block1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="content_area m-bottom-md">
                                    <h1 className="content_area--title">About
                                        <span className="highlight">DigiPro</span>
                                    </h1>
                                    <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut sceler isque the mattis,
                                        leo quam aliquet congue this there placerat mi id nisi they interdum mollis. Praesent
                                        pharetra
                                        justo ut sceleris que the mattis, <br /><br /> leo quam aliquet. Nunc placer atmi id nisi interdum mollis
                                        quam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt sanctus est Lorem ipsum dolor sit amet consetetur sadipscing.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 offset-xl-1 col-lg-6">
                                <img src={ab1Img} alt="About Image 1" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="content_block2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <img src={ab2Img} alt="About Image 2" className="img-fluid" />
                                </div>
                                <div className="col-xl-6 offset-xl-1 col-lg-6">
                                    <div className="content_area m-top-md">
                                        <h1 className="content_area--title">DigiPro
                                            <span className="highlight">Mission</span>
                                        </h1>
                                        <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra justo ut sceler isque the mattis,
                                            leo quam aliquet congue this there placerat mi id nisi they interdum mollis. Praesent
                                            pharetra
                                            justo ut sceleris que the mattis, leo quam aliquet. Nunc placer atmi id nisi interdum mollis
                                            quam. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt sanctus est Lorem ipsum dolor sit amet consetetur sadipscing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-up-area counter-up--area2 p-top-40 p-bottom-40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="counter-up">
                                <div className="counter warning">
                                    <span className="icon-briefcase"></span>
                                    <span className="count_up">38,436</span>
                                    <p>Items for sale</p>
                                </div>
                                <div className="counter info">
                                    <span className="icon-basket"></span>
                                    <span className="count_up">68,257</span>
                                    <p>Total Sale</p>
                                </div>
                                <div className="counter secondary">
                                    <span className="icon-emotsmile"></span>
                                    <span className="count_up">25,567</span>
                                    <p>Happy Customers</p>
                                </div>
                                <div className="counter danger">
                                    <span className="icon-people"></span>
                                    <span className="count_up">76,458</span>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h1>The Team at <span className="highlighted">DigiPro</span></h1>
                                <p>Laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats. Lid est laborum dolo rumes fugats untras.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team1} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Douglus Khundu</h5>
                                        <span className="member-title">CEO &amp; Founder</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team2} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Matt Kimel</h5>
                                        <span className="member-title">Project Manager</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team3} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Jason Bown</h5>
                                        <span className="member-title">Web Developer</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team4} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Bin Daisel</h5>
                                        <span className="member-title">UI/UX Developer</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team3} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Jason Bown</h5>
                                        <span className="member-title">Web Developer</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team1} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Douglus Khundu</h5>
                                        <span className="member-title">CEO &amp; Founder</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team4} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Bin Daisel</h5>
                                        <span className="member-title">UI/UX Developer</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-single">
                                <figure>
                                    <img src={team2} alt="" className="img-fluid rounded-circle" />
                                    <figcaption>
                                        <h5>Matt Kimel</h5>
                                        <span className="member-title">Project Manager</span>
                                        <ul className="list-unstyled team-social">
                                            <li>
                                                <a href="#">
                                                    <span className="icon-envelope-open"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-facebook"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-twitter"></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon-social-dribbble"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



           
        </>
    );
}
