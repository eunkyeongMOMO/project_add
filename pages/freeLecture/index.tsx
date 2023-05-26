import styles from "@src/scss/FreeLecture.module.scss";
import Layout from "@src/components/freeLecture/layout";
import FreeVideo from "@src/components/freeLecture/video";

function Index() {
  return (
    <div className={styles.inner}>
      <Layout name="한국사 무료 강의" state={0} />
      <FreeVideo />
    </div>
  );
}

export default Index;
