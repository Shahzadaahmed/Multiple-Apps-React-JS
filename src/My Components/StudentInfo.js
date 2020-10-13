import React from "react";
import { useHistory } from "react-router-dom";

const StudentInfo = (props) => {
    const history = useHistory();
    let getData = props.sendingStudentData;

    // Function to check view detail...!
    const viewMarksheet = () => {
        history.push(`show-marksheet/${getData.name}/${getData.rollNum}/${getData.htmlMarks}/${getData.cssMarks}/${getData.jsMarks}/${getData.esMarks}/${getData.reactJSMarks}`);
    }

    return (
        <div className="container" id="view-marksheet-container">
            <h1 className="view-marksheet-head"> {getData.name} </h1>
            <button id="view-marksheet-btn" className="btn btn-primary" onClick={viewMarksheet} title="Click to View Marksheet"> View Marksheet </button>

        </div>
    );
}

export default StudentInfo;