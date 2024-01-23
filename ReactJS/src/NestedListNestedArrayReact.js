import { Tab, Table } from "react-bootstrap";

function NestedListNestedArrayReact() {

    const users = [
        {
            name : 'Aman',
            email : 'aman@test.com',
            address :[
                {
                    hn : 10,
                    city : 'korba',
                    country : 'India'
                }, {
                    hn : 30,
                    city : 'raipur',
                    country : 'India'
                }, {
                    hn : 160,
                    city : 'jaijaipur',
                    country : 'India'
                }, {
                    hn : 190,
                    city : 'rajnangav',
                    country : 'India'
                }
            ]
        }, {
            name : 'rahul',
            email : 'rahul@test.com',
            address : [
                {
                    hn : 40,
                    city : 'korba',
                    country : 'India'
                }, {
                    hn : 56,
                    city : 'raipur',
                    country : 'India'
                }, {
                    hn : 160,
                    city : 'jaijaipur',
                    country : 'India'
                }, {
                    hn : 190,
                    city : 'rajnangav',
                    country : 'India'
                }
            ]
        }, {
            name : 'Ajay',
            email : 'ajay@test.com',
            address : [
                {
                    hn : 40,
                    city : 'korba',
                    country : 'India'
                }, {
                    hn : 56,
                    city : 'raipur',
                    country : 'India'
                }, {
                    hn : 160,
                    city : 'jaijaipur',
                    country : 'India'
                }, {
                    hn : 190,
                    city : 'rajnangav',
                    country : 'India'
                }
            ]
        }
    ]
    return(
        <div>
            <h1>Nested list with nested array</h1>
            <Table variant="dark" striped>
                <tbody>
                    <tr>
                        <td>S.NO</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        users.map((items, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>
                                    {
                                        <Table variant="dark" striped>
                                            <tbody>
                                                {
                                                    items.address.map((add) => (
                                                        <tr>
                                                            <td>{add.hn}</td>
                                                            <td>{add.city}</td>
                                                            <td>{add.country}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default NestedListNestedArrayReact;
