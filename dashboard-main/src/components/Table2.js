import React,{useEffect,useState} from 'react'
const Table =()=>{
  const [data,setData] = useState([]);
  useEffect(() => {
    // Fetch data from API
    fetch('https://form-handler.onrender.com/waitlist')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

 return(
    <div className='table-container'>
      <table width="100%">
    <thead>
      <tr>
        <th>s.no</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
       {data.map((item,i) => (
          <tr key={item.i}>
            <td>{(i+1)}</td>
            <td>{item.email}</td>
          </tr>
        ))}
    </tbody>
    
      </table>
    </div>
 );
}
export default Table;