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

```{
"title": "User Registration",
"fields": [
{
"type": "string",
"label": "Name",
"name": "name",
"required": true
},
{
"type": "number",
"label": "Age",
"name": "age",
"required": true
},
{
"type": "boolean",
"label": "Agree to terms",
"name": "agree",
"required": true
},
{
"type": "enum",
"label": "Gender",
"name": "gender",
"options": ["Male", "Female", "Other"],
"required": true
}
],
"buttons": [
{
"text": "Submit",
"action": "submit"
},
{
"text": "Reset",
"action": "reset"
}
]
}
```
