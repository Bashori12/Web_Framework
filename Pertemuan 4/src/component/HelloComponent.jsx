import React from 'react';
import './HelloComponent.css';

const HelloComponent = () =>{
    return (
        <div>
            <h1 className="header"><b>Form Login</b></h1>
            <div className="text">
                <h2><b>Tugas Pertemuan Ketiga</b></h2>
                <div className="text1">
                    <h3 for="username">Username</h3>
                    <input type="username" placeholder="Enter Username" id="username"/>
                    <h3 for="password">Password</h3>
                    <input type="password" placeholder="Enter Password" id="password"/>
                </div>
                <div>
                    <button className="button">Login</button>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" type="checkbox" for="defaultCheck1">
                        Remember Me
                    </label>
                </div>
                <div>
                    <button className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default HelloComponent;