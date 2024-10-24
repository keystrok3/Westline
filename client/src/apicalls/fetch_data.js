

export const fetch_data = async (route, setData) => {     
    try {
        const response = await fetch(`/api/general/${route}`, {
            method: 'GET'
        });
        console.log(response)
        if(response.ok) {
            const data = await response.json();
            setData([...data.data]);
        }
        

    } catch (error) {
        console.error('Could not fetch data: ', error);
    }
};

