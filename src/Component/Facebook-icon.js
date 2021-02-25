import React,{useState} from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import GradeIcon from '@material-ui/icons/Grade';
export default function FacebookIcon() {
    const [like, setlike] = useState('')
    const [dislike, setdislike] = useState('')
    const [star, setstar] = useState('')
    let changelike=like?'':'primary'

    let changedislike=dislike?'':'primary'
    
    let changestar=star?'':'primary'
    function likeFunction(){ 

        setlike(changelike)

        changedislike=''
        setdislike(changedislike)
        changestar=''
        setstar(changestar)
    }
    function dislikeFunction(){
       
        setdislike(changedislike)

        changelike=''
        setlike(changelike)
        changestar=''
        setstar(changestar)


    }
    function starFunction(){
        
        setstar(changestar)

        changedislike=''
        setdislike(changedislike)
        changelike=''
        setlike(changelike)
        changestar=''
        
    }
    return (
        <div>
            <ThumbUpAltIcon onClick={likeFunction} color={like} ></ThumbUpAltIcon>
            <ThumbDownIcon onClick={dislikeFunction} color={dislike} />
            <GradeIcon onClick={starFunction} color={star} />
        </div>
    )
}
