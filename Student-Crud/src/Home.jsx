import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";   
import './App.css';
import './Home.css';
function Home(){
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, seterr] = useState(false);
    const[search,setSearch]=useState('');
    const[filtered,setFiltered]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5000/students')
        .then(res=>res.json())
        .then(data=>{
            setStudents(data);
            setFiltered(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            seterr(true);
            setLoading(false);
        });
    },[]);

    if(loading)return <p>Loading...</p>
    if(err)return <p>Something went wrong</p>

    const clickedview=(id)=>{
     navigate("/View/"+id);
    }

    const clickedEdit=(id)=>{
     navigate("/Edit/"+id);
    }

    const clickedDelete=(id)=>{
        fetch("http://localhost:5000/students/"+id,{
            method:"DELETE"
    }).then(()=>{
      alert("Student data deleted successfully");
      setStudents(prev => prev.filter(student => student.id !== id));
      setFiltered(prev => prev.filter(student => student.id !== id));
    }).catch((err)=>{
      console.log(err);})
    }

    const filteredStudents=(value)=>{
    setSearch(value);

    value==''?setFiltered(students):
         setFiltered(students.filter((s)=>
            s.name.toLowerCase().includes(value.toLowerCase()) ||
            s.dept.toLowerCase().includes(value.toLowerCase()) 
            ))
    }

    return(
        <>
        <h1 className="h1">STUDENT DETAILS</h1>

        <div className="top">
            <div className="search-container">
            <input type="text" placeholder="Search here..." className="search-box" value={search} onChange={(e)=>filteredStudents(e.target.value)} />
            <button className="search-img-btn">
            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1"/>
            </button>
            </div>
            <Link to="/Addstudent">
              <button className="add-btn">Add Students</button>
            </Link>
        </div>

        <div className="Table">
        <table>
            <thead>
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Dept</th>    
                    <th>Age</th>
                    <th>Email</th>
                    <th>phone No</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filtered.map((student)=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    <td>{student.age}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNo}</td>
                    <td>
                    <button className="View-btn" onClick={()=>clickedview(student.id)}>View</button>
                    <button className="Edit-btn" onClick={()=>clickedEdit(student.id)}>Edit</button>
                    <button className="Delete-btn" onClick={()=>clickedDelete(student.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        
        </>
    );
}
export default Home; 