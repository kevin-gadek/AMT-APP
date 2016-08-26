/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "items_array": {
        "type": "array",
        "items": {
            "type": "item"
        }
    },
    "item": {
        "type": "object",
        "properties": {
            "notes": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "category": {
                "type": "string"
            },
            "date_bought": {
                "type": "string"
            },
            "location": {
                "type": "string"
            },
            "itemphotoname": {
                "type": "string"
            },
            "deleteflag": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "user_session_token": new $a.LocalStorage("user_session_token", "String"),

    "username": new $a.LocalStorage("username", "String"),

    "image_uri": new $a.LocalStorage("image_uri", "String"),

    "image_base64": new $a.LocalStorage("image_base64", "String"),

    "sendAttachment": new $a.LocalStorage("sendAttachment", "Boolean"),

    "items_array": new $a.LocalStorage("items_array", "items_array"),

    "item": new $a.LocalStorage("item", "item"),

    "file_name": new $a.LocalStorage("file_name", "String"),

    "userID": new $a.LocalStorage("userID", "String"),

    "deleted_items": new $a.LocalStorage("deleted_items", "items_array"),

    "tempPhotoName": new $a.LocalStorage("tempPhotoName", "String")
};