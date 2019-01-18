import React, { Component } from 'react';
import axios from 'axios';

export default class FileInput extends Component {
    state = {
        selectedFile: null,
        loaded: 0,
    };


    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };


    handleUpload = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile, this.state.selectedFile.name);

        axios
            .post(``, data, {
                onUploadProgress: ProgressEvent => {
                    this.setState({
                        loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                    })
                },
            })
            .then(res => {
                console.log(res.statusText)
            })

    };

    render() {
        return (
            <div className="form-group">
                <label for ="file"> Загрузить ваш файл.</label>
                <input type="file" className="form-control mb-2" name="" id="file" onChange={this.handleselectedFile} />

                <button className="btn btn-outline-secondary" onClick={this.handleUpload}>Загрузить</button>
                <div> {Math.round(this.state.loaded,2) } %</div>
            </div>
        )
    }
}
