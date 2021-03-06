define({ "api": [
  {
    "type": "get",
    "url": "/getusername",
    "title": "Get user name",
    "name": "Get_Name",
    "group": "Authorization",
    "permission": [
      {
        "name": "anybody"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"54a8e47d2b6e18ea80f31e1b29dc51c9\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"name\": \"user-1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "name",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected token is invalid.\"\n    ],\n    \"name\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/getrole",
    "title": "Get user role",
    "name": "Get_Role",
    "group": "Authorization",
    "permission": [
      {
        "name": "anybody"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\": \"54a8e47d2b6e18ea80f31e1b29dc51c9\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"role\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "role",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected token is invalid.\"\n    ],\n    \"role\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login and Authorization",
    "name": "Login",
    "group": "Authorization",
    "permission": [
      {
        "name": "anybody"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Current user password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\":\"user1\",\n    \"password\":\"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Current User token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"token\": \"54a8e47d2b6e18ea80f31e1b29dc51c9\",\n    \"role\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token",
            "description": "<p>null</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"Wrong password\"\n    ],\n    \"token\": null,\n    \"role\": \"user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/resetpassword",
    "title": "Reset User password",
    "name": "Reset_password",
    "group": "Authorization",
    "permission": [
      {
        "name": "anybody"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword",
            "description": "<p>User old password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password1",
            "description": "<p>User new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>User new password confirm</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"token\":\"54a8e47d2b6e18ea80f31e1b29dc51c9\",\n    \"oldpassword\":\"123456\",\n    \"password1\":\"654321\",\n    \"password2\":\"654321\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>New User token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"token\": \"291b8bad5193986bc6f289bbe45fb92c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected oldpassword is invalid.\"\n    ],\n    \"token\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Authorization"
  },
  {
    "type": "post",
    "url": "/addfile",
    "title": "Add File",
    "name": "Add_file",
    "group": "Files",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Input type=&quot;file&quot; .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "<input type=\"file\" name=\"image\">\n<input type=\"hidden\" name=\"userToken\" value = \"af4c236904b2069d556e33e73f2aa033\">",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Relative file path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>File have been uploaded successfully.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"image\": \"uploads/general-purpose_application.png\",\n    \"answer\": \"File have been uploaded successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>File have not been uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The image field is required.\"\n     ],\n     \"image\": null,\n     \"answer\": \"File have not been uploaded\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Files"
  },
  {
    "type": "delete",
    "url": "/delfile",
    "title": "Del File",
    "name": "Del_file",
    "group": "Files",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Relative file path.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"af4c236904b2069d556e33e73f2aa033\",\n    \"filename\":\"uploads/general-purpose_application.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>File have been deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"File have been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Fire have not been deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"File does not exist\"\n     ],\n     \"answer\": \"Fire have not been deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Files"
  },
  {
    "type": "post",
    "url": "/addmanufacturers",
    "title": "Add Manufacturer",
    "name": "Add_Manufacturer",
    "group": "Manufacturers",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person",
            "description": "<p>Manufacturer contact person.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"8d680875a1f3b18ba7d537abb947af02\",\n    \"name\":\"MEFE\",\n    \"person\":\"Person-2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": null,\n   \"answer\": \"Manufacturer was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was not add.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n        \"The name field is required.\"\n     ],\n    \"answer\": \"Manufacturer not Add\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Manufacturers"
  },
  {
    "type": "delete",
    "url": "/delmanufacturers/:id",
    "title": "Delete Manufacturer",
    "name": "Delete_Manufacturer",
    "group": "Manufacturers",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"8d680875a1f3b18ba7d537abb947af02\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": null,\n   \"manufacturer\": \"Manufacturer was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was not deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n        \"Manufacturer not found\"\n     ],\n    \"answer\": \"Manufacturer was not deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Manufacturers"
  },
  {
    "type": "put",
    "url": "/editmanufacturers/:id",
    "title": "Edit Manufacturer",
    "name": "Edit_Manufacturer",
    "group": "Manufacturers",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Manufacturer Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "person",
            "description": "<p>Manufacturer contact person.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"8d680875a1f3b18ba7d537abb947af02\",\n    \"name\":\"MEFE\",\n    \"person\":\"Person-2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": null,\n   \"manufacturer\": \"Manufacturer was changed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>Manufacturer was not changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n        \"The selected id is invalid.\"\n     ],\n    \"answer\": \"Manufacturer not changed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Manufacturers"
  },
  {
    "type": "get",
    "url": "/getmanufacturers/:id",
    "title": "Get Manufacturer",
    "name": "Get_Manufacturer",
    "group": "Manufacturers",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Manufacturer unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Manufacturer data in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"err\": null,\n   \"manufacturer\": {\n       \"id\": 1,\n       \"name\": \"MEFE\",\n       \"person\": \"Person-1\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n        \"The selected id is invalid.\"\n     ],\n    \"manufacturer\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Manufacturers"
  },
  {
    "type": "get",
    "url": "/getmanufacturers",
    "title": "Get Manufacturers",
    "name": "Get_Manufacturers",
    "group": "Manufacturers",
    "permission": [
      {
        "name": "All Authorised"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "manufacturers",
            "description": "<p>All manufacturers in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"manufacturers\": [\n        {\n            \"id\": 1,\n            \"name\": \"MEFE\",\n            \"person\": \"Person-1\"\n        },\n        {\n             \"id\": 2,\n             \"name\": \"Ahen\",\n             \"person\": \"Person-2\"\n         }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"No Permission\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Manufacturers"
  },
  {
    "type": "post",
    "url": "/addmaterials",
    "title": "Add Material",
    "name": "Add_Material",
    "group": "Materials",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique material name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\":\"InSb\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Material was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was not added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The name has already been taken.\"\n     ],\n     \"answer\": \"Material was not added\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Materials"
  },
  {
    "type": "delete",
    "url": "/delmaterials/{id}",
    "title": "Delete Material",
    "name": "Del_Material",
    "group": "Materials",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique materials id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Material was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was not deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"Wrong ID\"\n     ],\n     \"answer\": \"Material was not deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Materials"
  },
  {
    "type": "put",
    "url": "/editmaterials/{id}",
    "title": "Edit Material",
    "name": "Edit_Material",
    "group": "Materials",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Materials unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique material name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\":\"InSb\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Material was changed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was not changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The name has already been taken.\"\n     ],\n     \"answer\": \"Material was not changed\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Materials"
  },
  {
    "type": "get",
    "url": "/getmaterials/{id}",
    "title": "Get Material",
    "name": "Get_Material",
    "group": "Materials",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Materials unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Material",
            "description": "<p>parameters in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"material\":\n         {\n             \"id\": 1,\n             \"name\": \"InSb\"\n         }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "material",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The selected id is invalid.\"\n     ],\n     \"material\": null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Materials"
  },
  {
    "type": "get",
    "url": "/getmaterials",
    "title": "Get Materials",
    "name": "Get_Materials",
    "group": "Materials",
    "permission": [
      {
        "name": "All Authorised"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "series",
            "description": "<p>All materials in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"materials\": [\n         {\n             \"id\": 1,\n             \"name\": \"InSb\"\n         },\n         {\n             \"id\": 2,\n             \"name\": \"InAs\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"No Permission\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Materials"
  },
  {
    "type": "post",
    "url": "/addsamples",
    "title": "Add Samples",
    "name": "Add_Samples",
    "group": "Samples",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iunits",
            "description": "<p>Current Units: 'nA', 'mkA', 'mA', 'A'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vunits",
            "description": "<p>Voltage Units: 'nV', 'mkV', 'mV', 'V'.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "samples",
            "description": "<p>Array of JSON ogjects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "current",
            "description": "<p>Sensor current.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "resistance",
            "description": "<p>Sensor resistance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sqr_resistance",
            "description": "<p>Sensor surface resistance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "offset",
            "description": "<p>Sensor offset voltage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "hall_voltage",
            "description": "<p>Sensor Hall voltage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sensitive_i",
            "description": "<p>Sensor Sencitivity at current source.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sensitive_v",
            "description": "<p>Sensor Sencitivity at voltage source.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "concentration",
            "description": "<p>Sensor charge carrier concentration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "resistivity",
            "description": "<p>Sensor resistivity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "mobility",
            "description": "<p>Sensor mobility.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Sensor measure Date Time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noties",
            "description": "<p>Sensor measure Notes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "series_id",
            "description": "<p>Sensor Series ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"3fb024e46e221b100b3b948be1c5eb79\",\n    \"iunits\":\"mA\",\n    \"vunits\":\"mV\",\n    \"samples\":[\n    {\n        \"name\":\"name-7\",\n        \"current\":10,\n        \"resistance\":50,\n        \"sqr_resistance\":30,\n        \"offset\":2,\n        \"hall_voltage\":3,\n        \"sensitive_i\": 12,\n        \"sensitive_v\":8,\n        \"concentration\":5E17,\n        \"resistivity\": 0.32,\n        \"mobility\": 20000,\n        \"date_time\":\"2000-01-01 00:00:00\",\n        \"noties\":\"noty\",\n        \"series_id\":3\n    },\n    {\n        \"name\":\"name-8\",\n        \"current\":0.01,\n        \"resistance\":50,\n        \"sqr_resistance\":30,\n        \"offset\":0.2,\n        \"hall_voltage\":0.3,\n        \"sensitive_i\": 12,\n        \"sensitive_v\":8,\n        \"concentration\":5E17,\n        \"resistivity\": 0.32,\n        \"mobility\": 20000,\n        \"date_time\":\"2000-01-01 00:00:00\",\n        \"noties\":\"noty\",\n        \"series_id\":3\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Information about add Sensors.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Samples was add\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Sensors was not added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The selected iunits is invalid.\",\n         \"The samples.1.current must be a number.\"\n     ],\n     \"answer\": \"Samples was not added\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Samples"
  },
  {
    "type": "delete",
    "url": "/delsamples",
    "title": "Del Samples",
    "name": "Del_Samples",
    "group": "Samples",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "id",
            "description": "<p>Array of unique sensors id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"id\":[49, 50]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>All selected samples have been deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"All selected samples have been deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Material was not deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"Sample with ID = 11 not exist\",\n         \"Sample with ID = 12 not exist\"\n     ],\n     \"answer\": \"Some samples have not been deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Samples"
  },
  {
    "type": "put",
    "url": "/editsamples",
    "title": "Edit Samples",
    "name": "Edit_Samples",
    "group": "Samples",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iunits",
            "description": "<p>Current Units: 'nA', 'mkA', 'mA', 'A'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vunits",
            "description": "<p>Voltage Units: 'nV', 'mkV', 'mV', 'V'.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "samples",
            "description": "<p>Array of JSON ogjects.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Sensor unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Sensor name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "current",
            "description": "<p>Sensor current.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "resistance",
            "description": "<p>Sensor resistance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sqr_resistance",
            "description": "<p>Sensor surface resistance.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "offset",
            "description": "<p>Sensor offset voltage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "hall_voltage",
            "description": "<p>Sensor Hall voltage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sensitive_i",
            "description": "<p>Sensor Sencitivity at current source.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "sensitive_v",
            "description": "<p>Sensor Sencitivity at voltage source.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "concentration",
            "description": "<p>Sensor charge carrier concentration.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "resistivity",
            "description": "<p>Sensor resistivity.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "mobility",
            "description": "<p>Sensor mobility.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Sensor measure Date Time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "noties",
            "description": "<p>Sensor measure Notes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "series_id",
            "description": "<p>Sensor Series ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\":\"3fb024e46e221b100b3b948be1c5eb79\",\n    \"iunits\":\"mA\",\n    \"vunits\":\"mV\",\n    \"samples\":[\n    {\n        \"id\":1,\n        \"name\":\"name-7\",\n        \"current\":10,\n        \"resistance\":50,\n        \"sqr_resistance\":30,\n        \"offset\":2,\n        \"hall_voltage\":3,\n        \"sensitive_i\": 12,\n        \"sensitive_v\":8,\n        \"concentration\":5E17,\n        \"resistivity\": 0.32,\n        \"mobility\": 20000,\n        \"date_time\":\"2000-01-01 00:00:00\",\n        \"noties\":\"noty\",\n        \"series_id\":3\n    },\n    {\n        \"id\":2,\n        \"name\":\"name-8\",\n        \"current\":0.01,\n        \"resistance\":50,\n        \"sqr_resistance\":30,\n        \"offset\":0.2,\n        \"hall_voltage\":0.3,\n        \"sensitive_i\": 12,\n        \"sensitive_v\":8,\n        \"concentration\":5E17,\n        \"resistivity\": 0.32,\n        \"mobility\": 20000,\n        \"date_time\":\"2000-01-01 00:00:00\",\n        \"noties\":\"noty\",\n        \"series_id\":3\n    }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Information about edit Sensors data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Changes have been saved\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>No changes applied.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The selected samples.0.id is invalid.\",\n         \"The samples.1.current must be a number.\"\n     ],\n     \"answer\": \"No changes applied\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Samples"
  },
  {
    "type": "get",
    "url": "/getsamples?page={page}",
    "title": "Get Samples",
    "name": "Get_Samples",
    "group": "Samples",
    "permission": [
      {
        "name": "All Authorised"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number for paginate For first page can be '/getsamples'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "materials_id",
            "description": "<p>Materials unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "manufacturers_id",
            "description": "<p>Manufacturers unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "series_id",
            "description": "<p>Series unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DateTime",
            "description": "<p>Sample measure time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "findvalue",
            "description": "<p>Find text by Name or Note.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "itemCount",
            "description": "<p>Find text by Name or Note.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_by",
            "description": "<p>Order samples by: 'Name', 'R', 'SI', 'n', 'ρ', 'μ', 'DateTime'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Order samples direct or inverce: 'asc', 'desc'.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"materials_id\":[3,2],\n    \"manufacturers_id\":[1,2],\n    \"series_id\":[1,2],\n    \"DateTime\":\"2019-05-12 15:45:00\",\n    \"findvalue\":\"some note\",\n    \"itemCount\":5,\n    \"order_by\":\"name\",\n    \"order\":\"asc\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "samples",
            "description": "<p>All samples with paginate and paginate data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>All samples data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "current_page",
            "description": "<p>Current paginate page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_page_url",
            "description": "<p>First page URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "from",
            "description": "<p>From paginate page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "last_page",
            "description": "<p>Last paginate page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_page_url",
            "description": "<p>Last page URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "next_page_url",
            "description": "<p>Last page URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Main path page URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>Samples per page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prev_page_url",
            "description": "<p>Previous page URL.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "to",
            "description": "<p>To paginate page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total Samples count.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"samples\": {\n        \"current_page\": 1,\n        \"data\": [\n        {\n            \"id\": 2,\n            \"name\": \"name-2\",\n            \"current\": 10400.000000000004,\n            \"resistance\": 50.4,\n            \"sqr_resistance\": 30.4,\n            \"offset\": 2400,\n            \"hall_voltage\": 3400,\n            \"sensitive_i\": 12.4,\n            \"sensitive_v\": 8.4,\n            \"concentration\": 540000000000000000,\n            \"resistivity\": 0.324,\n            \"mobility\": 20000.4,\n            \"date_time\": \"2000-01-01 00:00:00\",\n            \"noties\": \"noty\",\n            \"series_id\": 2,\n            \"iunits\": \"mkA\",\n            \"vunits\": \"mkV\",\n            \"series_name\": \"series-2\",\n            \"material_name\": \"InAs\",\n            \"manufacturer_name\": \"ACHEN\"\n        },\n        {\n            \"id\": 4,\n            \"name\": \"name-4\",\n            \"current\": 10,\n            \"resistance\": 50,\n            \"sqr_resistance\": 30,\n            \"offset\": 199.99999999999991,\n            \"hall_voltage\": 300,\n            \"sensitive_i\": 12,\n            \"sensitive_v\": 8,\n            \"concentration\": 500000000000000000,\n            \"resistivity\": 0.32,\n            \"mobility\": 20000,\n            \"date_time\": \"2000-01-01 00:00:00\",\n            \"noties\": \"noty\",\n            \"series_id\": 2,\n            \"iunits\": \"mkA\",\n            \"vunits\": \"mkV\",\n            \"series_name\": \"series-2\",\n            \"material_name\": \"InAs\",\n            \"manufacturer_name\": \"ACHEN\"\n        },\n        {\n            \"id\": 6,\n            \"name\": \"name-6\",\n            \"current\": 10,\n            \"resistance\": 50,\n            \"sqr_resistance\": 30,\n            \"offset\": 200,\n            \"hall_voltage\": 300,\n            \"sensitive_i\": 12,\n            \"sensitive_v\": 8,\n            \"concentration\": 500000000000000000,\n            \"resistivity\": 0.32,\n            \"mobility\": 20000,\n            \"date_time\": \"2000-01-01 00:00:00\",\n            \"noties\": \"noty\",\n            \"series_id\": 2,\n            \"iunits\": \"mkA\",\n            \"vunits\": \"mkV\",\n            \"series_name\": \"series-2\",\n            \"material_name\": \"InAs\",\n            \"manufacturer_name\": \"ACHEN\"\n        }\n        ],\n        \"first_page_url\": \"http://sensordb.loc/api/getsamples?page=1\",\n        \"from\": 1,\n        \"last_page\": 1,\n        \"last_page_url\": \"http://sensordb.loc/api/getsamples?page=1\",\n        \"next_page_url\": null,\n        \"path\": \"http://sensordb.loc/api/getsamples\",\n        \"per_page\": 5,\n        \"prev_page_url\": null,\n        \"to\": 3,\n        \"total\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Array",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"No Permission\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Samples"
  },
  {
    "type": "post",
    "url": "/addseries",
    "title": "Add Serie",
    "name": "Add_Serie",
    "group": "Series",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Serie name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "structure",
            "description": "<p>Serie layers structure.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "thickness",
            "description": "<p>Sensitive layer thickness.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Immage path.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "current",
            "description": "<p>Typical current for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "resistance",
            "description": "<p>Typical resistance for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "sencitivity",
            "description": "<p>Typical sencitivity for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offset",
            "description": "<p>Typical offset for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "material_type",
            "description": "<p>Type of sensitive layer may be &quot;2D&quot; or &quot;3D&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "iunits",
            "description": "<p>Voltage units for this serie. May be &quot;A&quot;, &quot;mA&quot;, &quot;mkA&quot;, &quot;nA&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "vunits",
            "description": "<p>Voltage units for this serie. May be &quot;V&quot;, &quot;mV&quot;, &quot;mkV&quot;, &quot;nV&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "manufacturers_id",
            "description": "<p>Manufacturer id for this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "materials_id",
            "description": "<p>Material id for this serie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\": \"series-1\",\n    \"structure\": \"layer-1/substrate\",\n    \"thickness\": 1900,\n    \"image\": \"image-11\",\n    \"current\": 20,\n    \"resistance\": 150,\n    \"sensitivity\": 25,\n    \"offset\": 3,\n    \"material_type\": \"3D\",\n    \"iunits\": \"mA\",\n    \"vunits\": \"mkV\",\n    \"manufacturers_id\": 1,\n    \"materials_id\": 1,\n    \"materials_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Serie was added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Serie was added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The name has already been taken.\",\n         \"The selected vunits is invalid.\"\n     ],\n     \"answer\": \"Serie was not added\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Series"
  },
  {
    "type": "delete",
    "url": "/delseries/{id}",
    "title": "Delete Serie",
    "name": "Del_Serie",
    "group": "Series",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Series unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Serie was deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Serie was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"Wrong ID\"\n     ],\n     \"answer\": \"Serie was not deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Series"
  },
  {
    "type": "put",
    "url": "/editseries/{id}",
    "title": "Edit Serie",
    "name": "Edit_Serie",
    "group": "Series",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Series unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Serie name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "structure",
            "description": "<p>Serie layers structure.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "thickness",
            "description": "<p>Sensitive layer thickness.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Immage path.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "current",
            "description": "<p>Typical current for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "resistance",
            "description": "<p>Typical resistance for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "sencitivity",
            "description": "<p>Typical sencitivity for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "offset",
            "description": "<p>Typical offset for samples in this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "material_type",
            "description": "<p>Type of sensitive layer may be &quot;2D&quot; or &quot;3D&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "iunits",
            "description": "<p>Voltage units for this serie. May be &quot;A&quot;, &quot;mA&quot;, &quot;mkA&quot;, &quot;nA&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "vunits",
            "description": "<p>Voltage units for this serie. May be &quot;V&quot;, &quot;mV&quot;, &quot;mkV&quot;, &quot;nV&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "manufacturers_id",
            "description": "<p>Manufacturer id for this serie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "materials_id",
            "description": "<p>Material id for this serie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\": \"series-1\",\n    \"structure\": \"layer-1/substrate\",\n    \"thickness\": 1900,\n    \"image\": \"image-11\",\n    \"current\": 20,\n    \"resistance\": 150,\n    \"sensitivity\": 25,\n    \"offset\": 3,\n    \"material_type\": \"3D\",\n    \"iunits\": \"mA\",\n    \"vunits\": \"mkV\",\n    \"manufacturers_id\": 1,\n    \"materials_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Series was changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"Serie was changed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The selected material type is invalid.\",\n         \"The selected vunits is invalid.\"\n     ],\n     \"answer\": \"Serie was not changed\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Series"
  },
  {
    "type": "get",
    "url": "/getseries/{id}",
    "title": "Get Serie",
    "name": "Get_Serie",
    "group": "Series",
    "permission": [
      {
        "name": "root, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Series unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "serie",
            "description": "<p>Series data in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"serie\":\n         {\n             \"id\": 1,\n             \"name\": \"series-1\",\n             \"structure\": \"layer-1/substrate\",\n             \"thickness\": 1900,\n             \"image\": \"image-11\",\n             \"current\": 20,\n             \"resistance\": 150,\n             \"sensitivity\": 25,\n             \"offset\": 3,\n             \"material_type\": \"3D\",\n             \"iunits\": \"mA\",\n             \"vunits\": \"mkV\",\n             \"manufacturers_id\": 1,\n             \"materials_id\": 1\n         }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"The selected id is invalid.\"\n     ],\n     \"serie\": null\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Series"
  },
  {
    "type": "get",
    "url": "/getseries",
    "title": "Get Series",
    "name": "Get_Series",
    "group": "Series",
    "permission": [
      {
        "name": "All Authorised"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "series",
            "description": "<p>All series in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"series\": [\n         {\n             \"id\": 1,\n             \"name\": \"series-1\",\n             \"structure\": \"layer-1/substrate\",\n             \"thickness\": 1900,\n             \"image\": \"image-11\",\n             \"current\": 20,\n             \"resistance\": 150,\n             \"sensitivity\": 25,\n             \"offset\": 3,\n             \"material_type\": \"3D\",\n             \"iunits\": \"mA\",\n             \"vunits\": \"mkV\",\n             \"manufacturers_id\": 1,\n             \"materials_id\": 1,\n             \"material_name\": \"InSb\",\n             \"manufacturer_name\": \"MEFE\"\n         },\n         {\n             \"id\": 2,\n             \"name\": \"series-2\",\n             \"structure\": \"layer-2/substrate\",\n             \"thickness\": 100,\n             \"image\": \"image-2\",\n             \"current\": 50,\n             \"resistance\": 3,\n             \"sensitivity\": 0.001,\n             \"offset\": 300,\n             \"material_type\": \"3D\",\n             \"iunits\": \"mkA\",\n             \"vunits\": \"mkV\",\n             \"manufacturers_id\": 2,\n             \"materials_id\": 1,\n             \"material_name\": \"InAs\",\n             \"manufacturer_name\": \"ACHEN\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"err\": [\n         \"No Permission\"\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Series"
  },
  {
    "type": "post",
    "url": "/addusers",
    "title": "Add new User",
    "name": "Add_User",
    "group": "Users",
    "permission": [
      {
        "name": "root"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for new user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role for new user (user, admin).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\":\"user4\",\n    \"password\":\"123456\",\n    \"role\":\"user\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Add user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"err\": null,\n  \"answer\": \"User add successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>User was not Added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The name has already been taken.\"\n    ],\n    \"answer\": \"user not added\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/delusers/:id",
    "title": "Delete selected User",
    "name": "Delete_User",
    "group": "Users",
    "permission": [
      {
        "name": "root"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Delete user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"answer\": \"user was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>User wos not deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"user not found\"\n    ]\n    \"answer\": \"user was not deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/editusers/:id",
    "title": "Edit selected User",
    "name": "Edit_User",
    "group": "Users",
    "permission": [
      {
        "name": "root"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password for new user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role for new user (user, admin).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\",\n    \"name\":\"user4\",\n    \"password\":\"123456\",\n    \"role\":\"user\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "answer",
            "description": "<p>Edit user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"err\": null,\n  \"answer\": \"user was changed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "answer",
            "description": "<p>User data not changed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected id is invalid.\"\n    ],\n    \"answer\": \"user not changed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/getusers/:id",
    "title": "Get User",
    "name": "Get_User",
    "group": "Users",
    "permission": [
      {
        "name": "root"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>null.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User Data in JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"user\": {\n        \"id\": 3,\n        \"name\": \"admin\",\n        \"password\": \"5b27b6e52d0f2c64c66d5dbc9e8a836b\",\n        \"token\": \"e058b73aa4377d20b56157713cfd6b78\",\n        \"roles_id\": 2,\n        \"role\": \"admin\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server error array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "user",
            "description": "<p>null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected id is invalid.\"\n    ]\n    \"user\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/getusers",
    "title": "Get All Users",
    "name": "Get_Users",
    "group": "Users",
    "permission": [
      {
        "name": "root"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>Current user token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userToken\" : \"af4c236904b2069d556e33e73f2aa033\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "err",
            "description": "<p>Server error.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>Return JSON array with all users without root.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"users\": {\n        {\n            \"id\":3,\n            \"name\":\"admin\",\n            \"password\":\"5b27b6e52d0f2c64c66d5dbc9e8a836b\",\n            \"token\":\"e058b73aa4377d20b56157713cfd6b78\",\n            \"roles_id\":2,\n            \"role\":\"admin\"\n        },\n        {\n            \"id\":4,\n            \"name\":\"admin1\",\n            \"password\":\"e10adc3949ba59abbe56e057f20f883e\",\n            \"token\":\"af4c236904b2069d556e33e73f2aa033\",\n            \"roles_id\":2,\n            \"role\":\"admin\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err",
            "description": "<p>Server errors array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"No Permission\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Users"
  }
] });
