const students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];
//Receive a request
//Do something with that request
//Give a response

// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/cit/student", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Student route</h1>");
});

// Student/id
fastify.get("/cit/student/:id", (request, reply) => {
    //receive a request ,- receive a student id "x"
    let studentIDFromClient= request.params.id; 
    //do something with that request <- get the student ("s") with id == "x" from array "students"
    studentToSendToClient = null;
    for (studentInArray of studentIDFromClient){
        if(studentInArray.id == student)
            studentToSendToClient = studentInArray;
            break;
        }
    }       
//Give a reply <- send the student "s" back to the client
if (studentToSendToClient != null){
reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(StudentToSendToClient);
}
else {
    reply
    .code(404)
    .header("Content-Type", "text/html; charset-utf-8")
    .send("Could not find student with given id.");

}
});


// Student/id route
fastify.get("*", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Unmatched route</h1>");
});

    // (A) Get information from the request
    const {first, last} = request.query;
    
    // (B) Modify/Transform/Use information from the request in some way
    const name = first && last ? `${first} ${last}` : `Guest`;

    // (C) Return the result of our modification/transformation to the client
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello, ${name}</h1>`);
  });
  // Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});