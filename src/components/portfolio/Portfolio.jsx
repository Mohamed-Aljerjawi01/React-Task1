import img1 from'./../../assets/imges/cabin.png'
import img2 from'./../../assets/imges/cake.png'
import img3 from'./../../assets/imges/circus.png'
import img4 from'./../../assets/imges/game.png'
import img5 from'./../../assets/imges/safe.png'
import img6 from'./../../assets/imges/submarine.png'

import stylePortfolio from'./portfolio.module.css'

function Portfolio(){
    // JS COde 

    // HTML Code 
    return <>
        <div className={stylePortfolio.one} id='portfolio'>
            <h2 className={stylePortfolio.title}>PORTFOLIO</h2>
            <span className={stylePortfolio.span}>***</span>
            <div className={stylePortfolio.flex}>
                <div className={stylePortfolio.div1}>
                    <img src={img1} alt=""/>
                </div>
                <div className={stylePortfolio.div1}>
                    <img src={img2} alt=""/>
                </div>
                <div className={stylePortfolio.div1}>
                    <img src={img3} alt=""/>
                </div>
                <div className={stylePortfolio.div1}>
                    <img src={img4} alt=""/>
                </div>
                <div className={stylePortfolio.div1}>
                    <img src={img5} alt=""/>
                </div>
                <div className={stylePortfolio.div1}>
                    <img src={img6} alt=""/>
                </div>
            </div>
        </div>
    </>
}

export default Portfolio;