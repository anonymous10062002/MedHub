// Sort Function

/*
// Example of how to use it

parameter:
*resource URL
*category to sort by
*order

let sorted_protein_data_asc = await get_sorted_data(protein_URL, 'price', 'asc');

*/
export async function get_sorted_data(resource,sortBy=`price`, order=`asc`) {
    try {
        let res = await fetch(`${resource}?_sort=${sortBy}&_order=${order}`);
        let data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}