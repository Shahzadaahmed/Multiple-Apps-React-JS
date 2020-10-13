// Marksheet Component...!

import React from "react";
import { useParams } from "react-router-dom";

const Marksheet = () => {
    const { name, rollNum, htmlMarks, cssMarks, jsMarks, esMarks, reactJSMarks } = useParams();
    let totalMarks = 500;
    let marksObtained = Number(htmlMarks) + Number(cssMarks) + Number(jsMarks) + Number(esMarks) + Number(reactJSMarks);
    let percentage = (marksObtained * 100) / totalMarks;
    let garde = undefined;
    let remarks = undefined;

    if (percentage >= 80 && percentage <= 100) {
        garde = "A+1";
        remarks = "Excellent";
    }

    else if (percentage >= 70 && percentage <= 80) {
        garde = "A";
        remarks = "Best";
    }

    else if (percentage >= 60 && percentage <= 70) {
        garde = "B";
        remarks = "Good";
    }

    else if (percentage >= 50 && percentage <= 60) {
        garde = "C";
        remarks = "Satisfactory";
    }

    else if (percentage >= 40 && percentage <= 50) {
        garde = "D";
        remarks = "Weak";
    }

    else if (percentage >= 33 && percentage <= 40) {
        garde = "E";
        remarks = "Very Bad";
    }

    else if (percentage < 33) {
        garde = "Fail";
        remarks = "Poor";
    }

    return (
        <div className="container" id="marksheet-container">
            <h1 className="marksheet-header"> Web Development </h1>

            <div className="div-1">
                <div className="row-1"> {`Name : ${name}`} </div>
                <div className="row-1"> {`Roll Number # ${rollNum}`} </div>
            </div>

            {/* Marks Table */}
            <table className="marksheet-table" border="1">
                <tr>
                    <th colspan="3"> Marksheet </th>
                </tr>
                <tr>
                    <th> Subjects </th>
                    <th> Totak Marks </th>
                    <th> Marks Obtained </th>
                </tr>
                <tr>
                    <th> HTML5 </th>
                    <th> 100 </th>
                    <th> {htmlMarks} </th>
                </tr>
                <tr>
                    <th> CSS3 </th>
                    <th> 100 </th>
                    <th> {cssMarks} </th>
                </tr>
                <tr>
                    <th> JavaScript </th>
                    <th> 100 </th>
                    <th> {jsMarks} </th>
                </tr>
                <tr>
                    <th> EcmaScript6/7 </th>
                    <th> 100 </th>
                    <th> {esMarks} </th>
                </tr>
                <tr>
                    <th> React JS </th>
                    <th> 100 </th>
                    <th> {reactJSMarks} </th>
                </tr>
            </table>

            {/* Result Table */}
            <table className="result-table" border="1">
                <tr>
                    <th> Total Marks </th>
                    <th> Marks Obtained </th>
                    <th> Percentage </th>
                    <th> Grade </th>
                    <th> Remarks </th>
                </tr>
                <tr>
                    <th> {totalMarks} </th>
                    <th> {marksObtained} </th>
                    <th> {percentage}% </th>
                    <th> {garde} </th>
                    <th> {remarks} </th>
                </tr>
            </table>
        </div>
    );
}

export default Marksheet;