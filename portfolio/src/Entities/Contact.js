{
  "name": "Contact",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the person contacting"
    },
    "email": {
      "type": "string",
      "format": "email",
      "description": "Email address"
    },
    "message": {
      "type": "string",
      "description": "Message content"
    },
    "status": {
      "type": "string",
      "enum": [
        "new",
        "read",
        "replied"
      ],
      "default": "new",
      "description": "Status of the contact submission"
    }
  },
  "required": [
    "name",
    "email",
    "message"
  ]
}