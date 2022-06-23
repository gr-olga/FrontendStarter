export const selectAppLoading = state => state.appState.loading;
export const selectMessage = state => state.appState.message;
export const selectSpaces = state => state.appState.spaces;
export const selectSpaceDetails = state => state.appState.spaceDetails;
export const selectSpaceDetailsStories = state => state.appState.spaceDetails.stories;

// export const selectSpaceStories = state  => {
//   const filter = state.appState.spaceDetails.map((item)=>{
//      return  item.stories
//   })
//     return filter
// }


// export const selectSpaceStoriesSorted = state => state.appState.spaceDetails => {
//     const sortByDate = (a, b) => {
//         const dateA = new Date(a.createdAt).getTime();
//         const dateB = new Date(b.createdAt).getTime();
//         return dateA > dateB ? 1 : -1;
//     }
//     const sortedStories = [...selectSpaceStories].sort(sortByDate);
//     console.log(sortedStories);
// }





// export const selectSpaceDetail = (id) => state => {
//     return state.appState.spaces.find((spaceDetail) => {
//         console.log(Number(spaceDetail.id), Number(id));
//         // return spaceDetail.userId === id
//         return Number(spaceDetail.id) === Number(id)
//     })
// }


    // export const sortSpaceStories = state => {
    //     const newArr = state.appState.spaceDetails
    //     console.log(newArr)
    // if(newArr)   newArr.sort((a, b) => {
    //         const c = new Date(a.createdAt)
    //         const d = new Date(b.createdAt)
    //        return (c - d)
    //     })
    // }


//export const selectSpaceDetail = state => state.appState.spaceDetails;

