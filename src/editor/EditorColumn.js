import React from "react";

class EditorColumn extends React.Component {

    render() {
        return (
            <div id="editor-column" className="col-md">
                <div id="editor-buttons">
                    <div className="button-bunch">
                        <div><span className="fa-icon">
                        <i className="far fa-edit"/>
                        </span></div>
                        <div><span className="fa-icon"><i className="fas fa-font"/></span></div>
                    </div>
                    <div id="top-left-buttons">
                        <div className="button-bunch">
                            <div><span className="fa-icon"><i
                                className="fas fa-user-plus"/></span></div>
                            <div><span className="fa-icon"><i className="far fa-trash-alt"/></span></div>
                        </div>
                        <div id="username">
                            User name
                        </div>
                    </div>
                </div>
                <div id="editor-display">

                </div>
            </div>
        );
    }
}

export default EditorColumn;