import React from "react";
import logo from '../../sibnotes_frontend/src/logo.svg';
import './App.css';
import FolderColumn from './folders/FolderColumn';
import NoteColumn from './notes/NoteColumn';
import EditorColumn from './editor/EditorColumn';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <FolderColumn/>
                        <NoteColumn/>
                        <EditorColumn/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
