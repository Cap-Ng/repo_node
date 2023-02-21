// we now combine the code of section 4.6 and 4.7 to create a notes app

const yargs = require('yargs');
const notes = require('./notes-sub_app.js');

add = {
    command:"add",
    describe:"This helps to add a note in the app",
    builder:{
        title:{
            command:"title",
            demandOption:true,
            type:'string'
        },
        body:{
            command:"body",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>notes.addNotes(argv.title,argv.body)
}

remove = {
    command:'remove',
    describe:"This removes the notes desired",
    builder:{
        title:{
            command:"title",
            demandOption:true,
            type:'string'
        }
    },
    handler : (argv)=> notes.removeNotes(argv.title)
}

yargs.command(add);
yargs.command(remove);
yargs.argv;

// node notes-app_main.js add --title="romanch" --body="Nyaupane"
// node notes-app_main.js remove --title="romanch"