import React, {Component} from 'react';

//import renderHTML from 'react-render-html';
//import someHTML from '../../LDA.html';

export default class RenderHTML extends Component{
    render() {
        const url = 'https://qauniversity.cfapps.eu10.hana.ondemand.com/'
        function openInNewTab(url) {
            let win = window.open(url, '_blank');
            win.focus();
        }
        return (
        <div className = "App">
            <button onClick={openInNewTab(url)} target = "_blank">Download Pdf</button>
        </div>
        )

    }
}