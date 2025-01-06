# express-typescript-crud
Our app is a powerful tool designed to help you manage your items with ease. It provides a simple and intuitive interface for performing CRUD operations on your data

<pre>
express-typescript-crud/
├── src/
│   ├── models/
│   │   └── item.model.ts
│   ├── routes/
│   │   └── item.routes.ts
│   ├── controllers/
│   │   └── item.controller.ts
│   ├── index.ts
├── tsconfig.json
└── package.json
</pre>



<table>
    <caption>API Methods Table</caption>
    <thead>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/items</td>
            <td>Get all items</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/items/:id</td>
            <td>Get item by ID</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/items</td>
            <td>Create a new item</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/items/:id</td>
            <td>Update an item</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/items/:id</td>
            <td>Delete an item</td>
        </tr>
    </tbody>
</table>

