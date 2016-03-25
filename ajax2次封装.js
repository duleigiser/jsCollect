/**
 * Created by lei on 2016/3/25 0025.
 */
function prearData(data, columns, table) {
    var htmlArray = [];
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        htmlArray.push("<tr>");
        for (var j = 0;j < columns.length; j++) {
            var columnValue = getColumnValue(table, columns[j], d[columns[j]]);
            if(table == "baojingTable"||table =='JTbaojing') {
                htmlArray.push("<td class='overflow'><a title=" + columnValue + ">" + columnValue + "</a></td>");
            }

        }
    }
    htmlArray.push("</tr>");
    return htmlArray.join('');
}
function getColumnValue(table, column, columnValue) {
    if(table == 'baojingTable'){
        if(column =='W_DATE'){
            columnValue = columnValue.replace(/\s/g,"&#13;")
        }
    }
    return columnValue;
}
function ajax(url, tableId, columns) {
    $.ajax({
        url : url,
        dataType : "json",
        success : function(data) {
            var tableHtml = '';
            if(data!=="[]"&&data.pagedata){
                if(data.pagedata.length>0){
                    tableHtml = prearData(data.pagedata, columns, tableId);
                }
            }else{
                tableHtml = prearData(data, columns, tableId);
            }
            $("#" + tableId).html(tableHtml);
           // styleTable("#" + tableId); 对生成的table的样式重写；
        }
    });
}

