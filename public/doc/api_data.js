define({ "api": [
  {
    "type": "get",
    "url": "/addshedulelesson/:id",
    "title": "Add Lesson Form",
    "name": "AddLessonForm",
    "group": "Shedule",
    "permission": [
      {
        "name": "Director"
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
            "description": "<p>dayID unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "dayName",
            "description": "<p>Name of day for add lesson.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "lessons",
            "description": "<p>Array of all Lessons.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "lpositions",
            "description": "<p>Array of all  Lessons position for this day.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "atLast",
            "description": "<p>Number last position + 1.</p>"
          },
          {
            "group": "Success 200",
            "type": "view",
            "optional": false,
            "field": "AddLessonForm",
            "description": "<p>Template for show Add Lesson Form.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api.php",
    "groupTitle": "Shedule"
  }
] });
