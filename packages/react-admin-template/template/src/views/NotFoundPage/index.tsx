import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const NotFoundPage = () => {
  const navigatge = useNavigate();

  const goToHomePage = () => {
    navigatge(-1);
  };

  return (
    <section className={styles.container}>
      <Result
        status="404"
        title="404"
        subTitle="资源不存在"
        extra={
          <Button type="primary" onClick={goToHomePage}>
            返回上一页
          </Button>
        }
      />
    </section>
  );
};

export default NotFoundPage;
