import styles from "@src/scss/FreeLecture.module.scss";
import Tab01 from "@src/components/freeLecture/Tab01";
import Banner from "@src/components/freeLecture/banner";
import TopNavi from "@src/components/freeLecture/topNavi";

export type PropsType = {
  state: number;
  name: string;
};

export default function Layout(props: PropsType) {
  return (
    <div className={styles.inner}>
      <TopNavi name={props.name} />
      <div className={styles.cont01}>
        <h2>무료컨텐츠</h2>
        <Banner />
        <Tab01 state={props.state} />
      </div>
    </div>
  );
}
