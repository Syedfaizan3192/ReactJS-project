import React, {useState} from 'react'

    const Accordion = ({ item }) => {

    const[activeIndex, setActiveIndex] = useState(null);

    const onTittleCLick = (index) => {
        setActiveIndex(index)
    }

    const renderItem = item.map(
        (item, index) => {
            const active = index === activeIndex ? 'active': '';
            return (
                <React.Fragment key={item.title}>
                    <div className={`title ${active}`}
                        onClick={() => onTittleCLick(index)}
                    >
                        <i className='dropdown icon'></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        }
    )
    return <div className='ui segment container styled accordion'>{renderItem}
    {/* <h1>{activeIndex}</h1> */}
    </div>
}
export default Accordion