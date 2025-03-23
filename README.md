# Form Generator Application

## After installing run

```bash
pnpm install
```

## Start the development server

```bash
pnpm dev
```

### Usage:

1. Go to the **Config** tab and input the JSON configuration for your form.
2. Switch to the **Result** tab to see the generated form based on your configuration.

#### Example JSON Configuration:

```
{
  "title": "User Registration Form",
  "items": [
    {
      "label": "Full Name",
      "type": "string"
    },
    {
      "label": "Age",
      "type": "number"
    },
    {
      "label": "Gender",
      "type": "enum",
      "options": ["Male", "Female", "Other"]
    },
    {
      "label": "Bio",
      "type": "multi-line"
    },
    {
      "label": "Accept Terms",
      "type": "boolean"
    },
    {
      "label": "Date of Birth",
      "type": "date"
    }
  ],
  "buttons": [
    { "text": "Save", "action": "save" },
    { "text": "Cancel", "action": "cancel" },
    { "text": "Submit", "action": "submit" },
    { "text": "Reset", "action": "reset" },
    { "text": "Clear", "action": "clear" },
    { "text": "Validate", "action": "validate" }
  ]
}
```
