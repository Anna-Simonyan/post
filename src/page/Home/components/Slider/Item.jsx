import React,{ useState} from 'react'


const Item = (props) => {
    const [level, setLevel] = useState(props.level)
    const className = 'item level' + props.level
    return (
        <div className={className}>
            {props.id}
        </div>
    )

}
export default Item;


