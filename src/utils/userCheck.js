// export const userCheck = async (user) => {
//     await fetch("https://dsa-tracker-api.herokuapp.com/api/user/check", {
//         method: "GET",
//         headers: {
//             "authorization": `Bearer ${user}`
//         }
//     }).then(res => res.json()).then(res => {
//         // console.log(res.message, 8);
//         return res.message;
//     }).catch((err) => {
//         // console.log(err.message, 10);
//         return false;
//     })
// }


// export const userCheck = (user) => {
//     return (async function (user) {
//         await fetch("https://dsa-tracker-api.herokuapp.com/api/user/check", {
//             method: "GET",
//             headers: {
//                 "authorization": `Bearer ${user}`
//             }
//         }).then(res => res.json()).then(res => {
//             // console.log(res.message, 8);
//             return res.message;
//         }).catch((err) => {
//             // console.log(err.message, 10);
//             return false;
//         })
//     })()
// }