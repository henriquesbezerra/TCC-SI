export function formatDate(stringDate) {
    let date = new Date(stringDate);
    return date.toLocaleString("pt-BR", {
        dateStyle: "short"        
    });
}


