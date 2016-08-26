/*
 * JS for Details generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '7620cc77-d422-41fb-b193-1642dec1ee05';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "Details",
    "location": "Details.html"
}, {
    "name": "Welcome",
    "location": "Welcome.html"
}];

function Details_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileimage_32': 'Details_mobileimage_32',
        'mobilelabel_2': 'Details_mobilelabel_2',
        'details_name': 'Details_details_name',
        'mobilelabel_4': 'Details_mobilelabel_4',
        'details_location': 'Details_details_location',
        'mobilelabel_6': 'Details_mobilelabel_6',
        'details_date': 'Details_details_date',
        'mobilelabel_9': 'Details_mobilelabel_9',
        'details_notes': 'Details_details_notes',
        'mobilelabel_11': 'Details_mobilelabel_11',
        'details_category': 'Details_details_category',
        'confirm_deletion_text': 'Details_confirm_deletion_text',
        'confirm_deletion_button': 'Details_confirm_deletion_button',
        'details_delete_button': 'Details_details_delete_button'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Details_Details_onpageshow_mapping_0"] = {
        "homeScreen": "Details",
        "directions": [

        {
            "from_name": "item",
            "from_type": "LOCAL_STORAGE",

            "to_name": "Details",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['name']",
                "target_transformation": function(value, element) {
                    return value;
                },
                "target": "$['details_name:text']"

            },

            {

                "source": "$['location']",
                "target_transformation": function(value, element) {
                    return value;
                },
                "target": "$['details_location:text']"

            },

            {

                "source": "$['date_bought']",
                "target_transformation": function(value, element) {
                    return value;
                },
                "target": "$['details_date:text']"

            },

            {

                "source": "$['notes']",
                "target_transformation": function(value, element) {
                    return value;
                },
                "target": "$['details_notes:text']"

            },

            {

                "source": "$['category']",
                "target_transformation": function(value, element) {
                    return value;
                },
                "target": "$['details_category:text']"

            }

            ]
        },

        {
            "from_name": "item",
            "from_type": "LOCAL_STORAGE",

            "to_name": "tempPhotoName",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['itemphotoname']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Details_perm_delete_onsuccess_mapping_0"] = {
        "homeScreen": "Details",
        "directions": []
    };

    Apperyio.mappings["Details_perm_delete_onbeforesend_mapping_0"] = {
        "homeScreen": "Details",
        "directions": [

        {
            "from_name": "item",
            "from_type": "LOCAL_STORAGE",

            "to_name": "perm_delete",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$['id']",
                "target": "$['parameters']['_id']"

            }

            ]
        },

        {
            "from_name": "item",
            "from_type": "LOCAL_STORAGE",

            "to_name": "deleted_items",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$",
                "target": "$[0]"

            },

            {

                "source": "$['name']",
                "target": "$[0]['name']"

            },

            {

                "source": "$['date_bought']",
                "target": "$[0]['date_bought']"

            },

            {

                "source": "$['location']",
                "target": "$[0]['location']"

            },

            {

                "source": "$['notes']",
                "target": "$[0]['notes']"

            },

            {

                "source": "$['category']",
                "target": "$[0]['category']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Details_getPhotoName_onsuccess_mapping_0"] = {
        "homeScreen": "Details",
        "directions": [

        {
            "from_name": "getPhotoName",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "tempPhotoName",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['ItemPictureName']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Details_getPhotoName_onbeforesend_mapping_0"] = {
        "homeScreen": "Details",
        "directions": [

        {
            "from_name": "item",
            "from_type": "LOCAL_STORAGE",

            "to_name": "getPhotoName",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$['id']",
                "target": "$['parameters']['_id']"

            }

            ]
        },

        {
            "from_name": "user_session_token",
            "from_type": "LOCAL_STORAGE",

            "to_name": "getPhotoName",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['headers']['X-Appery-Session-Token']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.perm_delete = Apperyio.datasources.perm_delete = new Apperyio.DataSource(WarehouseDB_Goods_delete_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Details_perm_delete_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Details");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Details_perm_delete_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.getPhotoName = Apperyio.datasources.getPhotoName = new Apperyio.DataSource(WarehouseDB_Goods_read_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Details_getPhotoName_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Details");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Details_getPhotoName_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Details';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Details_onLoad = function() {
            Details_elementsExtraJS();

            Details_deviceEvents();
            Details_windowEvents();
            Details_elementsEvents();
        };

    // screen window events


    function Details_windowEvents() {

        $('#Details').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#Details').on({
            pageshow: function(event) {
                Apperyio.processMappingAction(Apperyio.mappings["Details_Details_onpageshow_mapping_0"]);
                try {
                    getPhotoName.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                Appery('mobileimage_32').attr('src', 'https://api.appery.io/rest/1/db/files/55397ddbe4b0c3e581ee22d5/' + localStorage.getItem('tempPhotoName'));
            },
        });

    };

    // device events


    function Details_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Details_elementsExtraJS() {
        // screen (Details) extra code

    };

    // screen elements handler


    function Details_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Details_mobilecontainer [name="confirm_deletion_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        perm_delete.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    Apperyio.navigateTo('Welcome', {
                        reverse: false
                    });

                }
            },
        }, '#Details_mobilecontainer [name="confirm_deletion_button"]');
        $(document).off("click", '#Details_mobilecontainer [name="details_delete_button"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('Details_confirm_deletion_text', 'mob', 'true');
                    toggle('Details_confirm_deletion_button', 'mob', 'true');

                }
            },
        }, '#Details_mobilecontainer [name="details_delete_button"]');

    };

    $(document).off("pagebeforeshow", "#Details").on("pagebeforeshow", "#Details", function(event, ui) {
        Apperyio.CurrentScreen = "Details";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Details_onLoad();
};

$(document).off("pagecreate", "#Details").on("pagecreate", "#Details", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Details_js();
});