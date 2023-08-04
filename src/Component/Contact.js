import React from 'react'

export default function Contact(props) {
  return (
    <div>
      <div className={`container text-center my-5 text-${props.mode==="black"?"white":"black"}`}>
        <h1>Contact Me</h1>
        <h6>Creater By : Shivanand Hattali</h6>
        <h6>Email : shivanandhattali2002@gmail.com</h6>
        <h5><a href="https://www.linkedin.com/in/shivanand-hattali-073898220/">LinkedIn</a></h5>
      </div>
    </div>
  )
}
