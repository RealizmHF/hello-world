import React, { Component } from 'react'

class JohnLink extends Component {

    render() {
        return (
            <div>
                 <a
                        href="http://www.simonjohnlab.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        type="button"
                    >
                        <button className="Header-john">
                            Welcome to the John Lab
                        </button>
                    </a>
            </div>
        )
    }
}

export default JohnLink