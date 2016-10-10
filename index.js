"use strict";

document.body.innerHTML = "script loading...";

// Change color based on status
const getStatusStyle = (status) => {
    let base = "style='display: inline-block; color: #888888; width: 200px'";
    status === "Has Self Changes" && ( base = base.replace("#888888", "red") );
    status === "Has Dep Changes" && ( base = base.replace("#888888", "blue") );
    return base;
};

// Change color based on project group
const getRepositoryStyle = (status) => {
    let base = "style='display: inline-block; color: #888888; width: 400px'";
    return base;
};

const render = (data) => {
    document.body.innerHTML = `
        <b>Repository Count: ${ data.repositories.length }</b>
        <div>
        ${
            data.repositories.map((repository) => {
                return `
                <div>
                    [ <div ${ getStatusStyle(repository.status) }>${ repository.status }</div> ]
                      <div ${ getRepositoryStyle(repository.name) }>${ repository.name }</div>
                </div>
                `;
            }).join("\n")
        }
        </div>
    `;
};

fetch("/api/call/io.naq.tools.api?request=repositories")
    .then((res) => res.json())
    .then((data) => render(data))
    .catch((error) => console.log(`Error: ${ error }`));
