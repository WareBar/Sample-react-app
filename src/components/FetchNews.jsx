import { useEffect } from "react"

const FetchNews = ({API, setNewsData, query, setLoading}) => {
    console.log("this is fetch news component")

    useEffect(()=>{
        
        async function fetchTheNews(){

            const result = await fetch(`https://newsdata.io/api/1/latest?apikey=${API}&q=${query}`)
            const fetchInfo = await result.json();


            if (fetchInfo.status !== 'success'){
                alert(fetchInfo.message)
            }
            else{
                console.log(fetchInfo)
                setNewsData(fetchInfo)
                setLoading(false)
            }
        }

        fetchTheNews()


    },[query])
}

export default FetchNews