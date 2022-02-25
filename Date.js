import React from 'react'
export default function D(){
    let dateObj =new Date()
    const days= ["sun","mon","Tus","wed","thu","fri","sat"]
    const months=["jan","feb","mar","apr","may","june","jul","Aug","oct","Nov","Dec"]
const day=days[dateObj.getMonth()]
const month=months[dateObj.getMonth()]
const date=dateObj.getUTCDate()
const year=dateObj.geetUTCFullYear()
return <h4 className="date">{day},{month}
{date}{year}</h4>
}