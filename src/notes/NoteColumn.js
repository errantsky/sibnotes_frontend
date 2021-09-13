import React from "react";

class NoteColumn extends React.Component {

    render() {
        return (
            <div id="note-column" className="col-md-3">
                <div id="search-bar">
                    <div><span id="search-icon">
                            <i className="fas fa-search"/>
                        </span></div>
                    <div><input type="text" placeholder="Search all notes"/></div>
                </div>
                <div id="note-list">

                    <div className="note">
                        <div>
                            Note Title
                        </div>
                        <div>
                            Last edited 1 attachment
                        </div>
                        <div>
                            <i className="far fa-folder"/>Folder 1
                        </div>
                    </div>
                    <div className="note">
                        <div>
                            Note Title 2
                        </div>
                        <div>
                            Last edited 2 attachment
                        </div>
                        <div>
                            <i className="far fa-folder"/>Folder 2
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteColumn;