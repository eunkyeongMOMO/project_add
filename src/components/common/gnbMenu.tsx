import Link from "next/link";
import { Menu, SubMenu } from "@src/graphql/menu";
import styles from "@src/scss/Header.module.scss";


const GnbMenu = ({
  name,
  link,
  sub
} : Menu) => {
  
    if(sub && sub.length > 0){
      return (
        <li>
          <Link href={link}>{name}</Link>
          <ul className={`${styles.subMenu}`}>
          {
            sub.map((item : SubMenu) => {
              return (<li key={item.name}><Link href={item.link}>{item.name}</Link></li>)
            })
          }
          </ul>
        </li>
      )
    }else{
      return <li><Link href={link}>{name}</Link></li>
    }

} 

export default GnbMenu; 