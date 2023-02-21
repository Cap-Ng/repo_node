const fs = require('fs');

//adding the notes
addNotes = (_title,_body) =>{

    // to add the notes, we need to load them first
    notes = loadNotes();


    //now appending the data recieved by the addNotes function in the notes file
    //we also add a failsafe to calculate duplicates. the notes will only be appended if duplicates are not found
    const duplicate = notes.filter((arr_element)=>arr_element.title===_title);      //'duplicate' is now an array

    // if the entered data already exists, the 'duplicate' array will have non-zero length
    if(duplicate.length===0){
        console.log("notes added");
        //saving the notes after checking for duplicates
        notes.push({title:_title,body:_body});
        //saving the 'notes' array in JSON file
        saveNotes(notes);
    }
    else{
        console.log("Duplicates detected");
    }

}

//removing the notes
removeNotes = (_title) => {
    //loading the notes
    notes = loadNotes();

    //removing the notes
    notes_to_store = notes.filter((arr_element)=>arr_element.title !==_title);
    saveNotes(notes_to_store);

}


loadNotes = () => {
    //good luck!!
    try{
        notesJSON = fs.readFileSync('./notes_stored.JSON','utf-8');
        return JSON.parse(notesJSON);
    }
    catch(e){
        console.log('File was empty. Returning an array...');
        return [];
    }
}

saveNotes = (_notes) => {
    fileJSON = JSON.stringify(_notes);      //to save in json file, the object should be converted to a json object
    fs.writeFileSync('notes_stored.JSON',fileJSON);         //saving to the json file
}

module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes
}