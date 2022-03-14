const TODOS = [
    {
    "id": "1",
    "description": "Finalize the sales plan for new product marketing",
    "category": "Management",
    "isCompleted": true,
    "chat":4,
    "file":2,
    "categorycolor":"#47a4fc",
    "topbar":"#2765c0",
    "usr1":"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "usr2":"https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1647179639~hmac=2515cec1e3706bb43fd7292c2fa44e82"
    },
    {
    "id": "2",
    "description": "Run sales training program for sales representativies",
    "category": "Sales",
    "isCompleted": false,
    "chat":3,
    "file":0,
    "categorycolor":"#fbe9bf",
    "topbar":"#ebc070",
    "usr1":"https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140047.png?token=exp=1647179639~hmac=bc23cb8a0062c14a8f253f222b9ad0d4"
    },
    {
    "id": "3",
    "description": "Secure Lease on new office space for expanded team",
    "category": "Operations",
    "isCompleted": true,
    "chat":3,
    "file":2,
    "categorycolor":"#fcdddd",
    "topbar":"#e15d5d",
    "usr1":"https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140037.png?token=exp=1647179767~hmac=80afd489af03c1d221a052b874f84fcd"
    },
    {
    "id": "4",
    "description": "Hire New Operations & Facilities Manager",
    "category": "Human Resource",
    "isCompleted": true,
    "chat":2,
    "file":4,
    "categorycolor":"#f1d6b4",
    "topbar":"#db985b",
    "usr1":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140051.png?token=exp=1647179773~hmac=8887db583917f0819a380cd5ee0f8914",
    "usr2":"https://cdn-icons-png.flaticon.com/512/4139/4139970.png"
    },
    {
    "id": "5",
    "description": "Prepare end of year report for board of directors",
    "category": "Management",
    "isCompleted": true,
    "chat":2,
    "file":1,
    "categorycolor":"#6187bb",
    "topbar":"#2163c0",
    "usr1":"https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140059.png?token=exp=1647179818~hmac=6ce2f381b10d3a4fd86c0f341ed7ba69"
    },
    {
    "id": "6",
    "description": "Cost projections for company acquisition & impact on revenue",
    "category": "Finance",
    "isCompleted": true,
    "chat":3,
    "file":4,
    "categorycolor":"#bfe3b9",
    "topbar":"#6cb464",
    "usr1":"https://cdn-icons.flaticon.com/png/512/4139/premium/4139993.png?token=exp=1647179836~hmac=44c7fc973981e1475301918719cc937c",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140074.png?token=exp=1647179847~hmac=9fe00bad0c38e0f635995047cdbb5a9a"
    },
    {
    "id": "7",
    "description": "On-board new user from SkyNet Networks company",
    "category": "Customer Service",
    "isCompleted": false,
    "chat":8,
    "file":3,
    "categorycolor":"#e0bff0",
    "topbar":"#9e4ddc",
    "usr1":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140052.png?token=exp=1647179860~hmac=e3c1a54b85b4de5a4c51b9b03f1c3744",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140061.png?token=exp=1647179873~hmac=07ec761f7a0318dc71d5799d00d5090d"
    },
    {
    "id": "8",
    "description": "Create facebook Ad capaign from product launch",
    "category": "Marketing",
    "isCompleted": false,
    "chat":5,
    "file":3,
    "categorycolor":"#ae9ae1",
    "topbar":"#694ac0",
    "usr1":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140044.png?token=exp=1647179886~hmac=49c737b7c3659735b1fc3306cc801574",
    "usr2":"https://cdn-icons.flaticon.com/png/512/4140/premium/4140066.png?token=exp=1647179901~hmac=94c8ac122dc2e2828f0fccada9c8b854"
    }
];

var rowDiv = document.getElementsByClassName('row-container');

for(var i=0; i<TODOS.length;i++)
{
    var div = document.createElement('div');
    div.setAttribute('class','card');
    var stats;
    if(TODOS[i]["isCompleted"]==true)
        {
            stats="&#9989;";
        }
        else{
            stats="&#10060";
        }
    div.innerHTML = `
        <div class="sub-card">
        <div class="card-header">
            <div class="category"><p>${TODOS[i]["category"]}</p></div>
            <div class="status"><p>${stats}</p></div>
        </div>
        <div class="card-info">
            <p class="description">${TODOS[i]["description"]}</p>
            
        </div>
        <div class="card-footer">
            <div class="footer-info">
                <img src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png" alt="" srcset="">
                <p class="chat">${TODOS[i]["chat"]}</p>
                <img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/04-512.png" alt="files" srcset="">
                <p class="file">${TODOS[i]["file"]}</p>
            </div>
            <img class="user-profile"src="${TODOS[i%3]["usr1"]}" alt="">
        </div>
        </div>
    `;
    rowDiv[0].appendChild(div);
    console.log("TEST");
}

