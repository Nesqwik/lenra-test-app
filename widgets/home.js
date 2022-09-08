'use strict'

module.exports = (data, counter) => {
    return {
        "type": "form",
        "onSubmit": {
            "action": "submit"
        },
        "child": {
            "type": "flex",
            "direction": "vertical",
            "spacing": 4,
            "mainAxisAlignment": "spaceEvenly",
            "crossAxisAlignment": "center",
            "children": [{
                "type": "checkbox",
                "value": false,
                "name": "accept_cgu"
            }, {
                "type": "textfield",
                "value": "email",
                "name": "email"
            }, {
                "type": "slider",
                "min": 18,
                "max": 100,
                "name": "age"
            }, {
                "type": "button",
                "text": "Submit !",
                "submit": true
            }]
        }
    }
}

