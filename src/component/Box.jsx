import { useState } from 'react'
import { FaQuestion } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
function Box(prop) {
    let [show, setShow] = useState(false)
    function update() {
        console.log(`show old value:${show}`)
        let s = !show
        setShow(s)
        console.log(`show new value:${s}`)
    }


    return (
        <>
            <div className="box">
                {/* {console.warn(`show past value:${show}`)} */}
                <h2 onClick={update} >

                    <div className='first-part'>
                        <FaQuestion />
                        {prop.Heading}
                    </div>

                    <FaChevronDown />
                </h2>
                {show && <p className='para'>{prop.para} </p>} {/* this line meaning is if show variable value is ture then after && will display */}

            </div>
        </>

    )
}
export default Box