import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "@src/scss/Main.module.scss";
import evtStyle from "@src/components/event/Event.module.scss";
import Banner from '@src/components/event/Banner';

const modalData = [
    {
    number:'1',
    imgUrl: ``,
    altValue: '',
    },
]
const Modal = () => {
    let [modal, setmodal] = useState()
    return (
        <div>
            
        </div>
    )
}

export default Modal;