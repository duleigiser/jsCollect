//user_id;用户id
var user_id = localStorage.getItem("user_id");
//org_id_origin 用户所属的组织
var org_id_orgin = localStorage.getItem("orgid_baobiao");
//获取当前服务器地址的url    
if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}
var ctx = window.location.origin;
