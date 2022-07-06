import react, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setterm] = useState('')

    const [results, upresult] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:
                {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            })
            upresult(data.query.search)
        }

        search()

    }, [term])

    const renderresult = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org/?curid=${result.pageid}`}>GO</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        <h3>
                            <u>
                                {result.title}
                            </u>
                        </h3>
                    </div>
                    <snap dangerouslySetInnerHTML={{ __html: result.snippet }}></snap>
                </div>
            </div>
        )
    })
    return (
        <div className='ui segment container'>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Here!</label>
                    <input className='input' placeholder='Hello!'
                        value={term}
                        onChange={e => setterm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderresult}
            </div>

        </div>
    )
}

// const Search = () => {
//     const [name, setupname] = useState('')
//     const myref = useRef(null)

//     useEffect(()=>{
//         myref.current = name
//     },[name])

//     return (
//         <div>
//             <input className='input'
//             value={name}
//             onChange={e=>setupname(e.target.value)}/>
//             <div>{name} and my prev cick is {myref.current}</div>
//         </div>
//     )
// }
export default Search