import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
import check from './assets/img/check.png';
import pencil from './assets/img/pencil.png';
import trash from './assets/img/delete.png';

const Comment = (props) => {
    const [modifyComment, setModifyComment] = useState(false)
    const inputHandler = useRef()

    useEffect(() => {
        setModifyComment(false)
    }, [props.updateComment])

    const confirmDeletion = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.delete(props.itineraryId, props.newComment._id, props.token)
                Swal.fire(
                    'Deleted!',
                    'Your comment has been deleted.',
                    'success'
                )
            }
        })
    }

    const img = props.newComment.userId._id ? props.newComment.userId.urlImage : props.dataComment.urlImage
    const user = props.userId == props._id || props.newComment.userId._id === props._id
    const text = props.newComment.userId._id ? props.newComment.userId.name : props.dataComment.name
    
    const comment = <div className="textArea">
        <div>
            {!modifyComment
                ? <p>{props.newComment.comment}</p>
                : <>
                    <input type="text" defaultValue={props.newComment.comment} ref={inputHandler} />
                    <img src={check} alt="send" onClick={() => props.edit(props.newComment._id, inputHandler.current.value, props.token)} />
                </>
            }
        </div>
        <div className="cursor">

            {props.token ? <><img src={pencil} alt="pencil" onClick={() => setModifyComment(!modifyComment)} />
                <img src={trash} alt="trash" onClick={confirmDeletion} /> </> : null}
        </div>
    </div>

    const renderComment = user ? comment : <p>{props.newComment.comment}</p>
            console.log(props.newComment)
            console.log(props.dataComment.comment)
    return (
        <>
            <div className="textArea">
                <div className="profilePic">

                    <img width="30%" src={img} />
                </div>
                <h4>{text}</h4>
                <div className="nameAndComment">
                    {renderComment}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token,
        _id: state.authReducer._id
    }
}

export default connect(mapStateToProps)(Comment)