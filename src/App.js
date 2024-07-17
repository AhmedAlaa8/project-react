
import Header from "./comp/header";
import MainCon from "./comp/mainCon";
import { Helmet } from 'react-helmet-async';


function App() {
    return (

        <>
            <Helmet>
                <title>Hello</title>
            </Helmet>
            <Header/>
            <MainCon aa="App"/>

        </>
    );
}

export default App;
