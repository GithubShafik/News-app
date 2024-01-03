import React, { Component , useState} from 'react'

export default class Navbar extends Component {
  render() {
    function alert(){
      alert('i am h')
    }
    return (
      <div>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
    
      </ul>

      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  /> 
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked</label>
</div>
      
    </div>
  </div>
</nav> */}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">News App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    )
  }
}



// import React, { Component } from 'react';

// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDarkMode: false,
//     };
//   }

//   toggleDarkMode = () => {
//     this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
//     // You can add logic to toggle dark mode styles or class on the entire page here
//     document.body.style.backgroundcolo="red";
//   };
 

//   render() {
//     const { isDarkMode } = this.state;

//     return (
//       <div className=''>
//         <nav className={ `navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               News-app
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">
//                     About
//                   </a>
//                 </li>
//               </ul>

//               <form>
//                 <div className="form-check form-switch">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     role="switch"
//                     id="darkModeSwitch"
//                     checked={isDarkMode}
//                     onChange={this.toggleDarkMode}
//                   />
//                   <label className="form-check-label" htmlFor="darkModeSwitch">
//                     {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//                   </label>
//                 </div>

               
//                 <button
//                   className={`btn btn-${isDarkMode ? 'light' : 'dark'} d-lg-none`}
//                   onClick={this.toggleDarkMode}
//                 >
//                   {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
