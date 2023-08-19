import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1>Login API</h1>
        <div className="links">
          <Link to="/login">Login</Link>
          <a href="">Signup</a>
        </div>
      </div>
    </div>
  );
};

{/* <>
            <LoadingScreen />
            {token &&
                <div className='home'>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="body">
                        <div className="content-body">
                            <Navbar />
                            <Routes>
                                <Route path="/*" element={<Dashboard />} />
                                <Route path='search' element={<Search />} />
                                <Route path='customize' element={<Customize />} />
                                <Route path='layerGroups' element={<LayerGroups />} />
                                <Route path='basemaps' element={<Basemaps />} />
                                <Route path='external-services' element={<ExternalService />} />
                                <Route path='layers' element={<Layers />} />
                                <Route path='users' element={<Users />} />
                                <Route path='groups' element={<Groups />} />
                                <Route path='domain' element={<Domain />} />
                                <Route path='roles' element={<LayerRoles />} />
                                <Route path='upload' element={<Panogps />} />
                                <Route path='projects' element={<Projects />} />
                            </Routes>
                            <Toast ref={toast} position="bottom-center" style={{ zIndex: '9 !important' }}></Toast>
                        </div>
                    </div>
                </div>
            }
        </> */}
export default Navbar;




