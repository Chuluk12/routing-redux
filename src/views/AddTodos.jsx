// import React from 'react';
// import useRouter from 'use-react-router';
// import qs from 'query-string';

// const AddTodo = (props) => {
//     const {location} = useRouter();
//     const ParserQs = qs.parse(location.search);
//     alert ('location.search', location.search); 
//     console.log('qs', ParserQs);
//     console.log('ambil title', ParserQs.title);

//     console.log('props', props);
//     const GoBack = () => {
//         props.history.goBack();
//     };
//     return (
//         <>
//         Add Todo
//         <button onClick={GoBack}> Kembali Kehalaman Sebelumnya</button>
//         </>
//     ); 
// };

// export {AddTodo} ;