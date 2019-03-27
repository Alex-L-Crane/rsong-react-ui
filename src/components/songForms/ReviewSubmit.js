import React, { Component } from 'react';
import Button from '../../components/buttons/Button';
import TextButton from '../../components/buttons/TextButton';

import largeCover from '../../assets/img/nils-frahm-cover-large.jpg';

export default class ReviewSubmit extends Component {
	changeStep(step) {
		this.props.changeStep(step);
    }
    
    render() {
        return (
            <div className="pt5">
                <div className="flex mb5">
                    <div className="w-50">
                        <img src={largeCover} className="w-100" alt=""/>
                    </div>
                    <div className="w-50 pl3 border-box">
                        <span className="f3 lh-copy dib mb2">Nils Frahm</span><br />
                        <span className="f4 "><i>Germany</i></span>
                    </div>
                </div>
        
                <section className="mb5 w-100 bg-black white pa3 border-box br1">
                    <span className="f3 b">Songwriters</span>
                    <div>
                        <span className="f4 dib pv4">Nils Frahm</span>
                    </div>
                </section>
        
                <div className="pb3">
                    <TextButton
                        name="exit"
                        buttonText="Exit"
                    />
                    <Button
                        name="back"
                        buttonText="< Back"
                        onClick={() => this.changeStep(2)}
                    />
                    <Button
                        name="next"
                        buttonText="Continue >"
                    />
                </div>
            </div>
        );
    }
}