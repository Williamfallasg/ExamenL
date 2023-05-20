import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
    return (
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  )
}

  export default MyApp; 