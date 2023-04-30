import '@/styles/globals.css'
import Header from '@/components/header'
import Menu from '@/components/menu'
import Footer from '@/components/footer'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return <div>
  <Header />
  <Menu />
  <Component {...pageProps} />
  <Footer />
  </div>
}
