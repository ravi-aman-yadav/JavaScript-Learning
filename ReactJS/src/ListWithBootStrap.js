

function ListWithBootStrap() {

    const cellStyle = {
        border : "1px solid black",
        padding : "4px"
    }

    const users = [
        {
            name : 'Aman',
            email : 'aman@test.com',
            contact : 123
        }, {
            name : 'Ajay',
            email : 'ajay@test.com',
            contact : 1234
        }, {
            name : 'Ashish',
            email : 'ashish@test.com',
            contact : 12345
        }, {
            name : 'Rahul',
            email : 'Rahul@test.com',
            contact : 123456
        }
    ]

    return(
        <div>
            <h1>List with bootstrap table</h1>
            <table>
               <tbody>
                <tr>
                    <td style={cellStyle}>Name</td>
                    <td style={cellStyle}>Email</td>
                    <td style={cellStyle}>Contact</td>
                </tr>
                    {
                        users.map((items, i) => (
                            <tr key={i}>
                                <td style={cellStyle}>{items.name}</td>
                                <td style={cellStyle}>{items.email}</td>
                                <td style={cellStyle}>{items.contact}</td>
                            </tr>
                        ))
                    }
               </tbody>
            </table>
        </div>
    )
}

export default ListWithBootStrap;
