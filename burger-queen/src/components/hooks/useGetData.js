import {useState, useEffect} from 'react'
import {db} from '../../firebase'

export const useGetData = () => { 
    let [menuCards, setMenuCards] = useState([]);

    const fetchData = async () => {
        const res = db.collection("productos ")
        const data = await res.get()
        console.log(data.docs)
        setMenuCards(
            data.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
                //doc.data()
            ))
        )

    }
    useEffect(() => {
        fetchData()       

    }, [])

     //console.log(menuCards);
     return menuCards

      
}
