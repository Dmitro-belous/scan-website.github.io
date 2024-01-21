import React from "react"

import leftArrow from '../../media/left_arrow.png'
import rightArrow from '../../media/right_arrow.png'

import s from '../../styles/main_page/CustomArrow.module.css'

export function CustomPrevArrow(props) {
    return (
        <button onClick={props.onClick} className={s.left_arrow}>
            <img src={leftArrow} alt="left arrow"></img>
        </button>
    )
}

export function CustomNextArrow(props) {
    return (
        <button onClick={props.onClick} className={s.right_arrow}>
            <img src={rightArrow} alt="right arrow"></img>
        </button>
    )
}