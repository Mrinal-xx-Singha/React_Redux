const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
};

function fetchFeatureFlagDataServiceCall () {
    return new Promise((resolve,reject) =>{
        if(dummyApiResponse)setTimeout(resolve(dummyApiResponse),500)
        else reject("some error occured please try again")
    })

}

export default fetchFeatureFlagDataServiceCall;