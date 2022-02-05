import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../Components/Header'
import SearchResults from '../Components/SearchResults'

const Search = ({results}) => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            <Header />
<SearchResults results={results}/>
        </div>
    )
}

export default Search

export const getServerSideProps = async(context) =>{
   
const start_index = context.query.start || "0" ;
const data =  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.api_key}&cx=${process.env.context_key}&q=${context.query.term}&start=${start_index}`).then(response => response.json());
 
return{
    props:{
        results:data
    }
}
}
