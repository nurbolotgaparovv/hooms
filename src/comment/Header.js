import React from "react";
import '../App.css'
import hoom from './img/hoom.png'
import elitka from './img/export.png'
import ozera from './img/ozero.png'
import city from './img/city.png'
import {useState} from 'react'
const Header = () => {
    const [button, setButton] = useState(false)
    return(
        <div id="header">
            <div className="container">
                <div className="header-text">
                    <h1 className="header-logo">Наши лучшие инвестиционные предложения </h1>
                    <p className="header-P">Мы отобрали, проверили и рассчитали прибыльность каждого объекта</p>
                </div>
                <div className="header">
                    <div className="header-images">
                        <img src={hoom} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Atlantis Deluxe»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">65,25%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">22 года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">29%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 33 000 000 руб.</h2>
                                <p className="price-P">от 1 500 000 руб. за м2</p>
                            </div>

                        </div>
                    </div>
                    <div className="header-images">
                        <img src={elitka} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Алые Паруса»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">60,75%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P"> 32года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 27 000 000 руб.</h2>
                                <p className="price-P">от 800 000 руб. за м2</p>
                            </div>

                        </div>
                    </div>
                    <div className="header-images">
                        <img src={ozera} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Снегири Эко»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">15%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">1 год</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">5%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 13 000 000 руб.</h2>
                                <p className="price-P">от 500 000 руб. за м2</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-images">
                        <img src={city} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «ART-Сити»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">32года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 6 000 000 руб.</h2>
                                <p className="price-P">от 320 000 руб. за м2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header" style={{
                    display: button ? "flex" : "none"
                }}>
                    <div className="header-images">
                        <img src={hoom} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Atlantis Deluxe»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">65,25%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">22 года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">29%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 33 000 000 руб.</h2>
                                <p className="price-P">от 1 500 000 руб. за м2</p>
                            </div>

                        </div>
                    </div>
                    <div className="header-images">
                        <img src={elitka} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Алые Паруса»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">60,75%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P"> 32года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 27 000 000 руб.</h2>
                                <p className="price-P">от 800 000 руб. за м2</p>
                            </div>

                        </div>
                    </div>
                    <div className="header-images">
                        <img src={ozera} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «Снегири Эко»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">15%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">1 год</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">5%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 13 000 000 руб.</h2>
                                <p className="price-P">от 500 000 руб. за м2</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-images">
                        <img src={city} alt=""/>
                        <div className="header-img-texts">
                            <h4 className="img-texts-H">ЖК «ART-Сити»</h4>
                            <div className="header-logotip">
                                <div className="img-text">
                                    <h3 className="img-text-H">Доходность</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H-C">Сроки</h3>
                                    <h5 className="text-H-H-P">32года</h5>
                                </div>
                                <div className="img-text">
                                    <h3 className="img-text-H">Риски</h3>
                                    <h5 className="text-H-H">35,25%</h5>
                                </div>
                            </div>
                            <div className="header-img-price">
                                <h2 className="price-text">от 6 000 000 руб.</h2>
                                <p className="price-P">от 320 000 руб. за м2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <button className="header-btn" onClick={() => setButton(!button)}>Смотреть все объекты</button>
                </center>

            </div>
        </div>
    )
}
export default Header