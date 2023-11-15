function extractFile(path) {

    path = path.split('\\');
    
    let file = path.pop();

    let indexOfLastDot = file.lastIndexOf('.');
    let fileName = file.slice(0, indexOfLastDot);
    let extension = file.slice(indexOfLastDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    
}
extractFile('C:\\Internal\\training-internal\\Template.kse.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')