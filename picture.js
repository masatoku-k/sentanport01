import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
/*画像*/
import mito from '../images/mito.gif'
import icon from '../images/icon.jpg'
import back from '../images/back.png'
import Link from 'next/link'


export default function picture() {
  return (
    <div className={styles.main}>
      <header>
      
          <div className="header">
            <div className="header_icon">
            <Link href="./"><Image src={icon} width={60} height={60} alt="small icon"/></Link>
            </div>
            <p className="header_title">
              まーくんの部屋
            </p>
          </div>
        
      </header>
      <div className="profile">
        <div className="koumoku">
          <div className="profile_header">
            <h2>イラスト</h2>
          </div>
          <div className="profile_art">
            <p>最近は他の趣味で忙しくてイラストを描く時間がなかなか作れないが、イラスト制作は昔から続いている趣味の一つだ。<br/><br/>
              色々自慢したいがpixivのアカウントがバレるのはなんとしても避けたいのでガチで描いたイラストはお見せできない、
              なので去年製作したVTuverの月ノ美兎さんの二次創作作品を載せておこうと思う。
            </p>
              <Image src={mito}  alt="mito"/>
            <p>雲や翼もちゃんと手書きです</p>
          </div>
        </div>
        <div className="back">
        <Link href="./"><Image src={back} width={50} height={50} alt="back"/></Link>
        </div>
      </div>
      </div>
  )
}
