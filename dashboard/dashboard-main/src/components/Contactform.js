import React,{useEffect,useState} from 'react'
const Table =()=>{
  const [data,setData] = useState([]);
  useEffect(() => {
    // Fetch data from API
    fetch('https://form-handler.onrender.com/contact')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

 return(
    <div className='table-container'>
      <table width="100%">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
       {data.map((item,i) => (
          <tr key={item.i}>
            <td>{(i+1)}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
    </tbody>
    
      </table>
    </div>
 );
}
export default Table;