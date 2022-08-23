import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import classes from './SchedulePage.module.css'
export default function SchedulePage() {
  return (
    <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
        <Header/>
        <div className={classes.Images}>
        <div className={classes.Title}>Расписание богослужений</div>
        <img src="https://s3-alpha-sig.figma.com/img/92c5/0cd8/71c488aa3d2dd31c7eb0bcf3302197c4?Expires=1662336000&Signature=fa3HCiSqm4kCzAwOGk6qzVMXlTEw69xbhsuV5tS801qZRHpB4yzXsIW4aciVyhSfyyWwNY3JbPfhDOImeuxPHOPkDnR~gBAJcUCfQm~U3EZB8G3yecqvP3~ymDoZFcqvDClVdUxw~Xk~79~zTC7zf3EFfmouV0XIP0Nld5GGdymHfgURMl8eB3TMOPGSWYqQ8VxFuq1Y0Zt3PfQ1azfnpEdv8BaRi3J4Cq5cYQLomqp3yBIzxRxbQPvXACf0JpI~XJHGPA3w5d8YoedfLTW5oG9Lxum-KrPP7~G2AkfrZ96KF2IMtbXPEkNWUpXQFmo8Wpu4~DhT8bAzy81S8Y7ikg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="не работает" className={classes.Img} />
        <img src="https://s3-alpha-sig.figma.com/img/45a8/328e/6af24ff7d768530452cc17a28744fe88?Expires=1662336000&Signature=Y6iXszM7EklQ-Sgcs7muQd88L2Sm8qklUiIg53~IXKp00KBW5XiZNRhu~NSPyUeCokahaz9hmLP9cYG~tKNBLjjWchQ7lJjtMVigprowqJd7aWZkTYQZ-JLqWJmZ6LDObSV9c4O4Hpdw~kc5URqQerT5YbqctguaXw7rwVsHSYEOOmoNF1PWOtJZ4uRPwxULS4TGx93PNvZhvf2nbfFj4wQUlXSWkWmzFBY3t1plU183~FLWGoblQ83TTcTqSHYPZjp1kCoQuFK73SKcuemqB3urSsSV1keP-5n0D8i6f1AJDSMGf8pGDbMiTDjXwnEIt68LIqVoYIVRRxVe5LtdoQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="не работает" className={classes.Img} />
        </div>
        <Footer/>
    </div>
  )
}
