import React from "react";

class FolderColumn extends React.Component {

    render() {
        return (
            <div id="folder-column" className="col-md-2">
                <div>
                    Sib Notes
                </div>
                <div id="folder-list">
                    <div className="folder">
                        <span className="fa-icon"><i className="far fa-folder"/></span>All Folders
                    </div>
                    <div className="folder">
                        <span className="fa-icon"><i className="far fa-folder"/></span>Folder 1
                    </div>
                    <div className="folder">
                        <span className="fa-icon"><i className="far fa-folder"/></span>Folder 2
                    </div>
                </div>
                <div id="folder-column-settings">
                    <div>

                        <span className="fa-icon"><i className="fas fa-cog"/></span>
                    </div>
                    <div>
                        <span className="fa-icon"><i className="fas fa-plus"/></span>
                    </div>
                </div>
            </div>

        );
    }
}


export default FolderColumn;
