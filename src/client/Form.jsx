import {useState} from 'react'
function Form(props) {
    const [show, setShow] = useState('')
    const [watched, setWatched] = useState(0)
    const [total, setTotal] = useState(0)
    const [modifySelector, setModifySelector] = useState('')

    const submit = function(event){

        event.preventDefault()
        const json = {
            show: show,
            watched: Number(watched),
            total: Number(total)
        }
        props.submit(json)
    }
    const modifyShow = function(){
        const json = {
            _id: modifySelector,
            show: show,
            watched: Number(watched),
            total: Number(total)
        }
        props.modifyShow(json)
    }
    return (
        <form onSubmit={submit}>
            <label className="form-group" htmlFor="showname">Show</label>
            <input className="form-group" type='text' id='showname' value={show} placeholder = "Name Of Show Here"
            onChange={(event) => setShow(event.target.value)}/>

            <label className="form-group" htmlFor="episodeswatched">Episodes Watched</label>
            <input className="form-group" type='number' id='episodeswatched' value={watched}
            onChange={event => setWatched(event.target.value)}/>


            <label className="form-group" htmlFor="episodecount">Total Episodes</label>
            <input className="form-group" type='number' id='episodecount' value={total}
            onChange={event => setTotal(event.target.value)}/>
            <div className="form-buttons">
                <button id="submitbutton" type="submit">Submit</button>
                <span>OR</span>
                <button type="button" id="modifybutton" onClick={modifyShow}>Modify</button>
                <div className="modify-show">
                    <label htmlFor="index">Show to Modify</label>

                    <select id='index' value={modifySelector} onChange={(event) => setModifySelector(event.target.value)}>
                        <option value = "">
                            Select
                        </option>
                        {props.shows.map((show, index) => (
                            <option key={show._id} value={show._id}>
                                {index+1}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

        </form>

    )

}
export default Form