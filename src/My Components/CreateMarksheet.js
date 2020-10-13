// Create Marksheet Component...!

import React, { useState } from "react";
import StudentInfo from "./StudentInfo";

const CreateMarksheet = () => {

    // Handeling state here...!
    let [name, setName] = useState('');
    let [rollNum, setRollNum] = useState('');
    let [htmlMarks, setHtmlMarks] = useState('');
    let [cssMarks, setCssMarks] = useState('');
    let [jsMarks, setJsMarks] = useState('');
    let [esMarks, setEsMarks] = useState('');
    let [reactJSMarks, setReactJSMarks] = useState('');
    let [studentsArr, setStudentsArr] = useState([]);

    // Submit data handler...!
    const dataHandler = () => {
        // Saving all forms information in an object...!
        let studentObj = {
            name,
            rollNum,
            htmlMarks,
            cssMarks,
            jsMarks,
            esMarks,
            reactJSMarks
        }

        if (studentObj.name != 0 &&
            studentObj.rollNum != 0 &&
            studentObj.htmlMarks != 0 && studentObj.htmlMarks <= 100 &&
            studentObj.cssMarks != 0 && studentObj.cssMarks <= 100 &&
            studentObj.jsMarks != 0 && studentObj.jsMarks <= 100 &&
            studentObj.esMarks != 0 && studentObj.esMarks <= 100 &&
            studentObj.reactJSMarks != 0 && studentObj.reactJSMarks <= 100
        ) {
            let cloneStudentArray = studentsArr;
            cloneStudentArray.push(studentObj);
            setStudentsArr(cloneStudentArray);
            setName("");
            setRollNum("");
            setHtmlMarks("");
            setCssMarks("");
            setJsMarks("");
            setEsMarks("");
            setReactJSMarks("");
        }

        else {
            alert("You need to fill all the fields!!!");
            setName("");
            setRollNum("");
            setHtmlMarks("");
            setCssMarks("");
            setJsMarks("");
            setEsMarks("");
            setReactJSMarks("");
        }
    }

    return (
        <div className="container-fluid" id="create-marksheet-container">
            <h1 className="cm-head"> Create Your Marksheet </h1>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> Your Name : </span>
                </div>
                <input autoFocus type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={(event) => { setName(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> Roll Number : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={rollNum} onChange={(event) => { setRollNum(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> HTML5 Score : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={htmlMarks} onChange={(event) => { setHtmlMarks(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> CSS3 Score : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={cssMarks} onChange={(event) => { setCssMarks(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> JavaScript Score : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={jsMarks} onChange={(event) => { setJsMarks(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> EcmaScript6/7 Score : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={esMarks} onChange={(event) => { setEsMarks(event.target.value) }} />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> React JS Score : </span>
                </div>
                <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={reactJSMarks} onChange={(event) => { setReactJSMarks(event.target.value) }} />
            </div>

            <button id="submit-data-btn" className="btn btn-primary" onClick={dataHandler}> Submit </button>

            <hr />

            {/* Rendering data on DOM */}
            {
                studentsArr.map((data, index) => {
                    return <StudentInfo key={index} sendingStudentData={data} />
                })
            }
        </div>
    );
}

export default CreateMarksheet;