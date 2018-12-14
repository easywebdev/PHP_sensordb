define({ "api": [
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
            "description": "<p>Server Error</p>"
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
            "description": "<p>Wrong token</p>"
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
            "description": "<p>Server Error</p>"
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
            "description": "<p>Wrong authorization data</p>"
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
            "description": "<p>Server Error</p>"
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
            "description": "<p>Wrong reset password data</p>"
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
            "description": "<p>Server Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Add user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"err\": null,\n  \"result\": \"User add successfully\"\n}",
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
            "description": "<p>User is already exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>User was not Added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The name has already been taken.\"\n    ],\n    \"result\": \"user not added\"\n}",
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
            "description": "<p>Server Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Delete user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err\": null,\n    \"result\": \"user was deleted\"\n}",
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
            "description": "<p>No User find</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>User wos not deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"user not found\"\n    ]\n    \"result\": \"user was not deleted\"\n}",
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
            "description": "<p>Server Error.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "result",
            "description": "<p>Edit user information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"err\": null,\n  \"result\": \"user was changed\"\n}",
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
            "description": "<p>User is already exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>User data not changed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"err\": [\n        \"The selected id is invalid.\"\n    ],\n    \"result\": \"user not changed\"\n}",
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
            "description": "<p>Server Error.</p>"
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
            "description": "<p>No User find</p>"
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
          "content": "{\n    \"err\": null,\n    \"users\": {\n        \"3\": {\"id\":3,\"name\":\"admin\",\"password\":\"5b27b6e52d0f2c64c66d5dbc9e8a836b\",\"token\":\"e058b73aa4377d20b56157713cfd6b78\",\"roles_id\":2,\"role\":\"admin\"},\n        \"4\": {\"id\":4,\"name\":\"admin1\",\"password\":\"e10adc3949ba59abbe56e057f20f883e\",\"token\":\"af4c236904b2069d556e33e73f2aa033\",\"roles_id\":2,\"role\":\"admin\"}\n    }",
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
            "description": "<p>No Permission for this request</p>"
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
