import './NormalCSS.css'
import style from './custom.module.css'

function StyleReact() {
    return(
        <div>
            <h1 className='primary'>Style in React using Normal CSS</h1>
            <h1 style={{color:'red', backgroundColor:"black"}}>Style in React using inline css</h1>
            <h1 className={style.success}>Style in React using modular CSS</h1>  
        </div>
    )
}

export default StyleReact;
