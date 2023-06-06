import { checkUrl } from './checkUrl';
const fields = [ 'score_tag', 'subjectivity', 'irony'];


async function handleSubmit(event) {
    event.preventDefault()    
    // check what text was put into the form field
    let formText = document.getElementById('name').value;    
    //console.log(checkUrl(formText), 'value on call');

    if (checkUrl(formText)){
        //console.log('rula!');
        await fetch('/article', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: formText,
        })
        .then( res => res.json())
        .then( res => {
            createDOMContent(res);
            alertIfError(false);
        })
        .catch((err) => {             
            //console.log(err)
            alertIfError(true);
        });           
    
    }else{
        //console.log('no entra');
    }
};

function alertIfError(state) {
    if (state) {
        return true;
    }
    return false;
}

function createDOMContent (content) {
    for ( let i = 0; i < fields.length; i++ ) {
        let target = document.getElementById(fields[i]);
        target.innerHTML = `${target.dataset.text}: ${content[fields[i]]}`;
    }
}

export { handleSubmit, alertIfError }