import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { wrapper } from '../redux/store'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
