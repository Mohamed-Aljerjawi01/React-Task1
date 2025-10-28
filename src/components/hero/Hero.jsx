import img1 from'./../../assets/imges/avataaars.svg'
import styleHero from'./hero.module.css'

function Hero(){
    // JS COde 

    // HTML Code 
    return <>
        <div className={styleHero.one}>
            <div>
                <img src={img1} alt="img1" width={240} height={254}/>
                <h2 className={styleHero.title}>Start Bootstrap</h2>
                <span className={styleHero.span}>***</span>
                <p className={styleHero.para}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </>
}

export default Hero;