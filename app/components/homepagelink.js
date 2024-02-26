"use client"
import Link from "next/link";
import PropTypes from 'prop-types'

export default function Homelink( {href,text} ) {
    return(
        <button><Link href = {href}>{text}</Link></button>
    );
}

