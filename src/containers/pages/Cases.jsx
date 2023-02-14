import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from 'react'
import { Helmet } from "react-helmet-async"

function Cases(){
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return(
        <Layout>
            <Helmet>
                <title>Prudential | Study Cases</title>
                <meta name="author" content="Juan Pablo Listte"></meta>
                <meta name="publisher" content="Juan Pablo Listte"></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <CasesList/>
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Cases