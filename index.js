export async function loadHtml(id, file){

    try{
        const response = await fetch(file);
        if(!response.ok) throw new Error(response.status + ": " + response.statusText);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    }
    catch (e){
        console.error(e);
        document.body.innerHTML = "Error: " + e;
    }
}