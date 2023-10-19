import React from 'react'

function Nav() {
    return (
        <>
            <div className="h-14  bg-white fixed top-0 w-full">
                <div className="flex gap-4 justify-end p-3 items-center text-sm">
                    <div><a href="#">Gmail</a></div>
                    <div><a href="#">Images</a></div>
                    <div><a href="#">
                        <img src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" />
                    </a></div>
                    <div><a href="#">
                        <img className="rounded-full w-8" src="https://lh3.googleusercontent.com/ogw/AKPQZvxMlbfw__gGtIIt9mGCzZ-l1ArRgiaYI2QhDj3PBw=s64-c-mo" alt="" /></a></div>
                </div>
            </div>
        </>
    )
}

export default Nav