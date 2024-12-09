
function delay(varVal:boolean) {
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve(varVal = true);
        console.log('resolved----', resolve)
    }, 1000));

    return myPromise;
}

export default function First() {
    let displayData = false;
    
    delay(displayData).then(e => {
        displayData = true
        console.log('displaydata-----------', displayData);
        
});
    return (
        <div>
            {displayData ? <h1>First blog post!!</h1> : <h1>No Data to display</h1>}
        </div>
    )
}