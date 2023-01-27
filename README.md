# inistate.js

To bump a new patch version
`npm version patch`

To publish package
`npm publish`

Configuration

Inistate.configure({ apiKey: 'API_KEY', workspace: 'Workspace_Name', endpoint: 'https://endpoint.inistate.com' })

refer Community for how to generate API_KEY


const inistate = new Inistate.configure({ apiKey: 'API_KEY' });

Workspace:
inistate.request()

Listing:
inistate.module('Module_Name').list('Listing Name');

inistate.module('Module_Name').list({
    listing: 'Listing Name'
});


list, 
api -> listing (workspace, module, name)


Query/Pagination:
const module = inistate.module('Module_Name');
let result = module.list({
    listing: 'Listing_Name',
    pageSize: 100,
    currentPage: 2
})

query: [
    { name: 'test', operator: 'is', payload: 'testing' },
    { name: 'test', operator: 'contains', payload: 'testing' },
]

Result:
{
    list: [{inistateEntity}],
    totalItems: 10,
    currentPage: 2
}


Activity:
const moduleName = inistate.module('Module_Name');
let activityName = moduleName.perform('Activity_Name');
let formName = moduleName.form('view');


View:
const moduleName = inistate.module('Module_Name');
let viewForm = moduleName.view();

InistateEntity
