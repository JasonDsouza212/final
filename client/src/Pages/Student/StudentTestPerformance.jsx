import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../../redux/action/studentAction'
import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom'
import {PieChart, Pie,Tooltip} from "recharts";
import { Chart as ChartJS } from 'chart.js/auto'
import {Bar} from "react-chartjs-2"

const StudentTestPerformance = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMarks())
    }, [])
    const data1=[
        {name:"Jason",value:678},
        {name:"mazan",value:678},
        {name:"ree",value:678},
        {name:"Jas",value:678},
        {name:"Jn",value:678}
    ]
    let arr=[]

const stat={
    labels:[
        
    ],
    datasets:[{
        label:"man",
        backgroundColor:"rgba(75,192,192,1)",
        borderColor:"rgba(0,0,0,1)",
        borderWidth:2,
        data:arr
    }]
}


    function resu(v){
        let r="FAIL";
        if(v>40){
            r="Pass";
        }
        return r;
    }

    function rescolor(v){
        let c="red";
        if(v>40){
            c="green";
        }
        return c;
    }

 
    return (

        <>
            {store.student.isAuthenticated ? <>
                <HomeHelper />

                <div className="container">

                    {store.student.allMarks.CycleTest1 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest1.length !== 0 ? <>
                                    <h4>INTERNAL ASSESSMENT 1</h4>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.CycleTest1.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        {/* {stat.labels.add(res.subject.subjectName)} */}
                                                        <td>{res.marks}</td>
                                                        {/* {arr.add(res.marks)} */}
                                                        <td>{res.totalMarks}</td>
                                                        
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>


                    }

                    
{/* ===================================================================================================================================== */}

{/* <div>
    <h1>Checking</h1>
    
        <Bar data={stat}/>


     
</div> */}






{/* ===================================================================================================================================== */}

                    <hr></hr>
                   
                    {store.student.allMarks.CycleTest2 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest2.length !== 0 ? <>
                                    <h4>EVENT 1</h4>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.CycleTest2.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>
                    }
                     <hr></hr>
                     {store.student.allMarks.CycleTest3 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest3.length !== 0 ? <>
                                    <h4>INTERNAL ASSESSMENT 2</h4>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.CycleTest3.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>


                    }
                     <hr></hr>
                     {store.student.allMarks.CycleTest4 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest4.length !== 0 ? <>
                                    <h4>EVENT 2</h4>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.CycleTest4.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>


                    }
                     <hr></hr>
                     {store.student.allMarks.CycleTest5 &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.CycleTest5.length !== 0 ? <>
                                    <h4>INTERNAL ASSESSMENT 3</h4>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.CycleTest5.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>


                    }
                      <hr></hr>












                    {store.student.allMarks.Semester &&
                        <div className="row mt-3">
                            <div className="col-md-8 m-auto">
                                {store.student.allMarks.Semester.length !== 0 ? <>
                                    <h4>SEMESTER END EXAMINATION</h4>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Subject Code</th>
                                                <th scope="col">Subject Name</th>
                                                <th scope="col">Obtained Marks</th>
                                                <th scope="col">Total Marks</th>
                                                <th scope="col">Percentage</th>
                                                <th scope="col">Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.student.allMarks.Semester.map((res, index) =>
                                                    
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.subject.subjectCode}</td>
                                                        <td>{res.subject.subjectName}</td>
                                                        <td>{res.marks}</td>
                                                        <td>{res.totalMarks}</td>
                                                        <td>{((res.marks / res.totalMarks) * 100).toFixed(2)}%</td>
                                                        <td  style={{color:rescolor(((res.marks / res.totalMarks) * 100).toFixed(2)),fontWeight:"bold"}}>{resu(((res.marks / res.totalMarks) * 100).toFixed(2))}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></> : null}
                            </div>
                        </div>

                    }
                     <hr></hr>
                </div></> : (history.push('/'))}

        </>

    )
}

export default StudentTestPerformance
