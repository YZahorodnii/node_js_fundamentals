// Створіть папку
// В тій папці створіть 5 папок і 5 файлів
// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
//
// FILE: {fileName}
// FOLDER: {folderName}
//
// !руками нічого не робимо, все через fs

const path = require('path');
const fs = require('fs');

const mainPath = path.resolve('folder')
const path1 = path.resolve(path.join('folder', 'folder1'));
const path2 = path.resolve(path.join('folder', 'folder2'));
const path3 = path.resolve(path.join('folder', 'folder3'));
const path4 = path.resolve(path.join('folder', 'folder4'));
const path5 = path.resolve(path.join('folder', 'folder5'));

// fs.mkdirSync(mainPath)
// fs.mkdirSync(path1)
// fs.mkdirSync(path2)
// fs.mkdirSync(path3)
// fs.mkdirSync(path4)
// fs.mkdirSync(path5)

const pathFile1 = path.resolve(path.join('folder', 'folder1', 'text1.txt'));
const pathFile2 = path.resolve(path.join('folder', 'folder2', 'text2.txt'));
const pathFile3 = path.resolve(path.join('folder', 'folder3', 'text3.txt'));
const pathFile4 = path.resolve(path.join('folder', 'folder4', 'text4.txt'));
const pathFile5 = path.resolve(path.join('folder', 'folder5', 'text5.txt'));

// fs.writeFile(pathFile1, 'Hello my first file', (err) => {
//     if (err) throw new Error(err.message)
// })
// fs.writeFile(pathFile2, 'Hello my first file', (err) => {
//     if (err) throw new Error(err.message)
// })
// fs.writeFile(pathFile3, 'Hello my first file', (err) => {
//     if (err) throw new Error(err.message)
// })
// fs.writeFile(pathFile4, 'Hello my first file', (err) => {
//     if (err) throw new Error(err.message)
// })
// fs.writeFile(pathFile5, 'Hello my first file', (err) => {
//     if (err) throw new Error(err.message)
// })

fs.writeFile(path.join(__dirname, 'folder', 'test1.txt'), 'Hello my first file', (err) => {
    if (err) throw new Error(err.message)
});
fs.writeFile(path.join(__dirname, 'folder', 'test2.txt'), 'Hello my first file', (err) => {
    if (err) throw new Error(err.message)
});
fs.writeFile(path.join(__dirname, 'folder', 'test3.txt'), 'Hello my first file', (err) => {
    if (err) throw new Error(err.message)
});
fs.writeFile(path.join(__dirname, 'folder', 'test4.txt'), 'Hello my first file', (err) => {
    if (err) throw new Error(err.message)
});
fs.writeFile(path.join(__dirname, 'folder', 'test5.txt'), 'Hello my first file', (err) => {
    if (err) throw new Error(err.message)
});

fs.readdir(path.join(__dirname, 'folder'), {withFileTypes: true}, (err, files) => {
    if (err) throw new Error(err.message);
    files.forEach(file => {
        if (file.isDirectory()) {
            console.log('Folder: ', file.name);
        } else {
            console.log('FILE: ', file.name);
        }
    })
});