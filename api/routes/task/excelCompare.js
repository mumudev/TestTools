var express = require('express');
var Model = require('../../models/User');
var fileHandler = require('../../util/fileHandler');
var XLSX = require("xlsx-style");
var fs = require("fs");
var router = express.Router();
var addResultMsg = function(label, msg, type) {
    return {
        label: label,
        msg: msg,
        class: type
    };
};
var compareSheetData = function(sheetName, srcJSON, tarJSON, option) {
    var result = [];
    srcJSON = srcJSON ? srcJSON : {};
    tarJSON = tarJSON ? tarJSON : {};
    var srcArrayName = Object.keys(srcJSON);
    var tarArrayName = Object.keys(srcJSON);
    var data = { '!ref': srcJSON['!ref'] };
    let diffCount = 0;
    for (let index = 1; index < srcArrayName.length; index++) {
        let name = srcArrayName[index];
        let srcData = srcJSON[name];
        let tarData = tarJSON[name];
        if (!tarData) {
            srcData.s = {
                fill: { fgColor: { rgb: "FFFF6A6A" } }
            };
            diffCount++;
        } else if (srcData.w !== tarData.w) {
            srcData.s = {
                fill: { fgColor: { rgb: "FFFF6A6A" } }
            };
            diffCount++;
        }
        data[name] = srcData;
    }
    for (let index = 1; index < tarArrayName.length; index++) {
        let name = tarArrayName[index];
        let srcData = srcJSON[name];
        let tarData = tarJSON[name];
        if (data[name] || tarData.w === '') {
            continue;
        }
        tarData.s = {
            fill: { fgColor: { rgb: "FF98FB98" } }
        };
        diffCount++;
        data[name] = tarData;
    }
    return {
        data: data,
        diffCount: diffCount
    };
};
router.route('/:id?')
    .get(function(req, res) {
        var id = req.params.id;
        var username = req.session.username ? req.session.username : 'default';
        var userPath = './pub/files/' + username + '/';
        var files = fileHandler.getFilesByRegExp(userPath, id);
        var workbookSrc = XLSX.read(userPath + files[0], { type: 'file' });
        var workbookTar = XLSX.read(userPath + files[1], { type: 'file' });
        var data = [];
        for (let index = 0; index < workbookSrc.SheetNames.length; index++) {
            let sheetName = workbookSrc.SheetNames[index];
            let sheet1 = workbookSrc.Sheets[sheetName];
            let sheet2 = workbookTar.Sheets[sheetName];
            let result = compareSheetData(sheetName, sheet1, sheet2);
            workbookSrc.Sheets[sheetName] = result.data;
            if (!sheet2) {
                data.push({
                    msg: '第二个文件没有"' + sheetName + '" worksheet',
                    class: 'error'
                });
            } else if (result.diffCount) {
                data.push({
                    msg: '在"' + sheetName + '" worksheet 有' + result.diffCount + '处不同',
                    class: 'error'
                });
            }
        }
        var fileName = id + 'out.xlsx';
        var writeFilePath = userPath + fileName;
        XLSX.writeFile(workbookSrc, writeFilePath);

        var downloadFilePath = 'files/' + username + '/' + fileName;
        if (!data.length) {
            data = [{
                msg: 'No error, congratulations!',
                class: 'success'
            }];
        }
        res.msg(1, 'work done!', {
            url: downloadFilePath,
            data: data
        });
    })
    .delete(function(req, res) { //TODO
        var id = req.params.id;
        return res.msg(1, 'Delete object success!');
    });
module.exports = router;