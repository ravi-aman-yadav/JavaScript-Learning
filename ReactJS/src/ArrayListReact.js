

function ArrayListReact() {

    //List ot array
    // const students = ['ajay', 'aman', 'rahul', 'ashish'];

    //Objects
    const student = [
        {
            name : 'anil',
            email : 'aman@test.com',
            contact : 1234
        },{
            name : 'siddu',
            email : 'siddu@test.com',
            contact : 12345
        },{
            name : 'sam',
            email : 'sam@test.com',
            contact : 123
        }
    ]
    
    //map looping
    // students.map((item) => {
    //     console.warn("my name is ", item)
    // })
const cellStyle={
    border:"1px solid blue",
    padding:"4px"
}
    return(
        <div>
            <h1>Handle Array with List</h1>
            <table border="1">
                <tr>
                    <td style={cellStyle}>Name</td>
                    <td style={cellStyle}>Email</td>
                    <td style={cellStyle}>Contact</td>
                </tr>
                {
                    student.map((data) =>( 
                        <tr>
                            <td style={cellStyle}>{data.name}</td>
                            <td style={cellStyle}>{data.email}</td>
                            <td style={cellStyle}>{data.contact}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default ArrayListReact;
