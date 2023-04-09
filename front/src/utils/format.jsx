export const dateFormat = (inputDate) =>{
    const date = new Date(inputDate);
    const fullYear = date.getFullYear();
    const month = twoBtype(date.getMonth() + 1);
    const day = twoBtype(date.getDate());
    const hours = twoBtype(date.getHours());
    const mins = twoBtype(date.getMinutes());

    return `${fullYear}-${month}-${day} ${hours}:${mins}`
}

const twoBtype = (value) => value <10 ? '0'+value : value;