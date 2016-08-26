/*
 * Service settings
 */
var WarehouseDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "55397ddbe4b0c3e581ee22d5",
    "photo_url": "https://api.appery.io/rest/1/db/files/"
}

/*
 * Services
 */

var WarehouseDB_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});
var CameraService = new Apperyio.CameraService({});

var WarehouseDB_signup_service = new Apperyio.RestService({
    'url': '{database_url}/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Login_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Login/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB__files_upload_service = new Apperyio.RestService({
    'url': '{database_url}/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': WarehouseDB_settings
});
var CameraService1431296613379 = new Apperyio.CameraService({});

var WarehouseDB__files_read_service = new Apperyio.RestService({
    'url': '{database_url}/files/{database_id}/{file_name}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': WarehouseDB_settings
});

var WarehouseDB_Goods_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Goods/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': WarehouseDB_settings
});