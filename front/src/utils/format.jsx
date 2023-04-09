export const dateFormat = (inputDate) =>{
    const date = new Date(inputDate);
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const mins = date.getMinutes();

    return `${fullYear}-${month}-${day} ${hours}:${mins}`
}