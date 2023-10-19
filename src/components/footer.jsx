import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="fixed w-full bottom-0">

                <div className="flex border-b p-3 items-center text-sm bg-gray-100">
                    <div className="flex gap-4 text-gray-700 text-sm">
                        <div><a href="#">India</a></div>
                    </div>

                </div>

                <div className="flex justify-between p-3 items-center text-sm bg-gray-100 flex-wrap">
                    <div className="flex gap-4 text-gray-700 text-sm">
                        <div><a href="#">About</a></div>
                        <div><a href="#">Advertising</a></div>
                        <div><a href="#">Business</a></div>
                        <div><a href="#"> How Search works </a></div>
                    </div>
                    <div className="flex gap-4 text-gray-700 text-sm">
                        <div><a href="#">Privacy</a></div>
                        <div><a href="#">Terms</a></div>
                        <div><a href="#">Settings</a></div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer