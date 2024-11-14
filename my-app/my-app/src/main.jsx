import{StrictMode} from 'react'
import{createRoot} from 'react.dom/client'
// import App from './App'.jsx'
import Greeting from './Greeting'
import Header from './Header.jsx'

createRoot(document.getElememtById('root')).render(
    <StrictMode>
        <Header/>
    <App/>
    <Greeting/>
    </StrictMode>,


)