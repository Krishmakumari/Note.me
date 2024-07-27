// // import React from 'react'
// // import styles from './bar.module.scss';
// // import logo from '../../../assets/logo1.svg';

// // function ProgressBar(props) {
// //     const { percentage } = props;
// //     return (
// //         <div className={styles.container}>
// //             <img src={logo} alt='img'></img>
// //             <span style={{ width: percentage }}></span>
// //         </div>
// //     )
// // }

// // export default ProgressBar

// import React from 'react';
// import styles from './bar.module.scss';
// import logo from '../../../assets/logo1.svg';

// function ProgressBar(props) {
//     const { percentage } = props;
//     return (
//         <div className={styles.container}>
//             <img src={logo} alt='logo' className={styles.logo}/>
//             <div className={styles.progressBar}>
//                 <span style={{ width: `${50}%` }} className={styles.progress}></span>
//             </div>
//         </div>
//     )
// }

// export default ProgressBar;

import React from 'react';
import styles from './bar.module.scss';
import logo from '../../../assets/logo1.svg';

function ProgressBar(props) {
    const { percentage } = props; // You can use this percentage value if needed for dynamic updates

    return (
        <div className={styles.container}>
            <img src={logo} alt='Logo' className={styles.logo} />
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
