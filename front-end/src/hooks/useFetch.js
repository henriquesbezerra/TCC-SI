export const useFetch = () =>{
    
    // const myHeaders = new Headers({
    //     "Content-Type": "application/json"
    // });
    
    const myHost = 'http://127.0.0.1:3333';

    const post = async (path, data) => {
        try {
            const result = await fetch(
                myHost+path,
                {
                    method: 'POST',            
                    body: data
                });
            if(result){
                return result;
            }
        } catch (e) {
            console.log('Error to POST DATA to: ' + path, e);
        }
        return null;       
    }


    return {
        post
    }
}