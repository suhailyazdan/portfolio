import './styles/styles.scss';
import {Outlet} from "react-router-dom"
import myPic from "./images/suhailYazdan.jpg"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='glassWrapper'>
      <div className="glassContainer">
          <div className='row h-100'>
            <div className='col-3'>
              <div className="leftPanel py-3">
                <div className='d-flex flex-column align-items-center justify-content-center p-3 text-center'>
                  <div className='myPicBox d-flex justify-content-center mb-2'>
                    <img src={myPic} alt="Suhail Yazdan" />
                  </div>
                  <h3>Suhail Yazdan</h3>
                  <h6>Graphic, Web, UI UX Designer</h6>
                </div>
                <Navbar />
              </div>
            </div>

            <div className='col-9'>
              <Outlet />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
