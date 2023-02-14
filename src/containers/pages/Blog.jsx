import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from 'react'
import { Helmet } from "react-helmet-async"

function Blog(){
    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
    return(
        <Layout>
            <Helmet>
                <title>Prudential | Blog</title>
                <meta name="author" content="Juan Pablo Listte"></meta>
                <meta name="publisher" content="Juan Pablo Listte"></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                Blog
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Blog