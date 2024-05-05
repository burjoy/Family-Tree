import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Utama } from '../components/utama';
import { Utama_descendant } from '../components/utama_descendant';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Utama />
    },
    {
        path: `/:gen/:nama`,
        element: <Utama_descendant />
    }
]);

// function AppRouter(){
//     // const [click, isClick] = useState(true);
//     return(
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Utama />} />
//                 <Route path="/:gen/:nama" element={<Utama_descendant />} />
//                 {/* <Route path="/add_anak" element={<AddAnak />} /> */}
//             </Routes>
//         </Router>
//     )
// }

export {router}