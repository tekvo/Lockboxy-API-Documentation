const fs = require('fs');
const path = require('path');

//parameters
const endpoint = require('./components/parameters/endpoint.json');
const limit = require('./components/parameters/limit.json');
const page = require('./components/parameters/page.json');
const secretKey = require('./components/parameters/secret-key.json');

//components
const generateApiKey = require('./components/generateApiKey.json');
const securitySchemes = require('./components/securitySchemes.json');
//schemas
const saveForm = require('./components/schemas/saveForm.json');
const filter = require('./components/schemas/filter.json');
const notionQueryDto = require('./components/schemas/notionQueryDto.json');
const formDataSchema = require('./components/schemas/formData.json');

//endpoints
const formList = require('./forms/formList.json');
//Add parametrs to the apis
formList.get.parameters.push(endpoint);
formList.get.parameters.push(limit);
formList.get.parameters.push(page);
formList.get.parameters.push(secretKey);

const formSchema = require('./forms/formSchema.json');
const formSave = require('./forms/formSave.json');
const tableList = require('./tables/tableList.json');
const tableData = require('./tables/tableData.json');

const main = {
  openapi: '3.0.0',
  info: {
    title: 'LockBoxy',
    description: 'API documentation for Lockboxy services including form and table management.',
    version: 'v1',
    contact: {
      email: 'thecrew@lockboxy.io',
    },
  },
  paths: {
    '/?endpoint=form/list': formList,
    '/?endpoint=form/schema': formSchema,
    '/?endpoint=form/save': formSave,
    '/?endpoint=table/list': tableList,
    '/?endpoint=table': tableData,
  },
  tags: ['APIs'],
  servers: [
    {
      url: 'https://api.lockboxy.io/',
    },
  ],
  components: {
    generateApiKey: generateApiKey,
    securitySchemes: securitySchemes,
    schemas: {
      SaveForm: saveForm,
      Filter: filter,
      NotionQueryDto: notionQueryDto,
      FormData: formDataSchema,
    },
  },
};

function createOrReplaceJsonFile(filePath, data) {
  // Convert the JavaScript object to a JSON string
  const jsonString = JSON.stringify(data, null, 2);

  // Write the JSON string to a file
  fs.writeFile(filePath, jsonString, 'utf8', err => {
    if (err) {
      console.error('An error occurred while writing JSON to the file:', err);
    } else {
      console.log('JSON file has been saved.');
    }
  });
}

const filePath = path.join(__dirname, 'main.json');

createOrReplaceJsonFile(filePath, main);
