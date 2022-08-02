import Header from './elements/Header'
import Sidebar from './elements/Sidebar'
function MasterLayout(props){
    return(
        <div className="App">
            <Header />
            <Sidebar />
            { props.children }
        </div>
    );
}
export default MasterLayout;