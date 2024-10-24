import { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import { DataContext } from "../../context/DataContext";

const AdminHome = () => {

    const { destinations } = useContext(DataContext);

    
    
    
    return (
        <div className="admin-home">
            <Header />

            <main>
                   {
                    destinations.length === 0 ? <h2>Loading...</h2> :
                    <ul>
                        {
                            destinations.map((item, idx) => {
                                return <li key={`${idx}`}>{ item.name}</li>
                            })
                        }
                    </ul>
                   } 
            </main>
        </div>
    )
};


export default AdminHome;