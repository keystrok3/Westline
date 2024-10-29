import AddTrip from "../../components/Admin/AddTrip";
import Header from "../../components/Header/Header";

const AdminHome = () => {
    
    return (
        <div className="admin-home">
            <Header />

            <main>
                <AddTrip />
            </main>
        </div>
    )
};


export default AdminHome;