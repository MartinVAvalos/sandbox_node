// 
// Mimetype mish mash

// Mimetypes are useful on the internet for distinguishing
// what type of content a file might hold and suggesting
// types of programs that could reliably use this information.
// In this exercise we will build a lookup table of file
// extensions to mimetypes. Then we will build a function that
// accepts filenames and either 
// TODO: returns a known mimetype or "UNKNOWN".

// ****** REQUIREMENTS *****
// 1. build a lookup table with file extensions as the keys and
// mimetypes as the values.
// ? key: fileExtension, value: mimetype

// 2. populate your table with the following pairs:
// 	html -> text/html
// 	gif -> image/gif
// 	png -> image/png
// 	wav -> audio/x-wav
// 	mp3 -> audio/mpeg
//  pdf -> application/pdf

// 3. build a function that accepts a filename as an argument
// and returns its mimetype (should not be case sensitive). For unknown or invalid extensions return "UNKNOWN"

// 4. Run your function against each filename in the filenames
// variable provided below and print the result

// ***** BONUS *****

// 1. Each time your function is called with an unknown
//   extension, add the filename to the lookup table with the value 'TBD'.
//   Print out the key/value pairs of the table with arrows,
//   so it looks like the pairs mentioned above in step 2. All keys should
//   have a value and not be empty.
// 

const filenames = ["a.html", "a.b.html", "png", "presentation..pdf", "test.css", "wow.WAV", "mp3.pdf.gif.", "Z.PNG", "data.json"];
const lookupTable = {
    "html": "text/html",
    "gif": "image/gif",
    "png": "image/png",
    "wav": "audio/x-wav",
    "mp3": "audio/mpeg",
    "pdf": "application/pdf"
}

function mimetypeMishMash(filename) {
    const split = filename.split(".");
    if(split.length===1) return "UNKNOWN";
    
    const extension = lookupTable[split[split.length-1].toLowerCase()];
    const result = extension && extension!=="" ? extension : "UNKNOWN"
    if(result !== "UNKNOWN") {
        lookupTable[extension] = "TBD";
    }
    return result;
}

function bonus() {
    Object.entries(lookupTable).forEach(([key, value]) => {
        console.log(key, '-->', value);
    })
}
// 	html -> text/html
// 	gif -> image/gif
// 	png -> image/png
// 	wav -> audio/x-wav
// 	mp3 -> audio/mpeg
//  pdf -> application/pdf

filenames.forEach((filename) => {
    // mimetypeMishMash(filename);
    console.log(filename, '------', mimetypeMishMash(filename));
});

bonus();